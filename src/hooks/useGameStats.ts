import { useState, useEffect } from 'react';

interface GameStats {
  level: number;
  xp: number;
  totalScore: number;
  gamesPlayed: number;
  accuracy: number;
  bestStreak: number;
  achievements: string[];
}

interface QuizResult {
  correct: boolean;
  streak: number;
  points: number;
}

export const useGameStats = () => {
  const [stats, setStats] = useState<GameStats>(() => {
    const saved = localStorage.getItem('gameStats');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      level: 1,
      xp: 0,
      totalScore: 0,
      gamesPlayed: 0,
      accuracy: 0,
      bestStreak: 0,
      achievements: []
    };
  });

  const [currentStreak, setCurrentStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);

  useEffect(() => {
    localStorage.setItem('gameStats', JSON.stringify(stats));
  }, [stats]);

  const updateStats = (result: QuizResult) => {
    setCurrentStreak(result.streak);
    setTotalAnswers(prev => prev + 1);
    
    if (result.correct) {
      setCorrectAnswers(prev => prev + 1);
    }

    setStats(prev => {
      const newXP = prev.xp + result.points;
      const newLevel = Math.floor(newXP / 100) + 1;
      const newTotalScore = prev.totalScore + result.points;
      const newAccuracy = Math.round(((correctAnswers + (result.correct ? 1 : 0)) / (totalAnswers + 1)) * 100);
      const newBestStreak = Math.max(prev.bestStreak, result.streak);

      const newAchievements = [...prev.achievements];
      
      if (prev.gamesPlayed === 0 && !newAchievements.includes('first_win')) {
        newAchievements.push('first_win');
      }
      
      if (result.streak >= 5 && !newAchievements.includes('streak_5')) {
        newAchievements.push('streak_5');
      }
      
      if (newAccuracy >= 80 && !newAchievements.includes('accuracy_80')) {
        newAchievements.push('accuracy_80');
      }
      
      if (newLevel >= 5 && !newAchievements.includes('level_5')) {
        newAchievements.push('level_5');
      }
      
      if (newTotalScore >= 1000 && !newAchievements.includes('score_1000')) {
        newAchievements.push('score_1000');
      }
      
      if (newLevel >= 10 && !newAchievements.includes('level_10')) {
        newAchievements.push('level_10');
      }

      return {
        level: newLevel,
        xp: newXP,
        totalScore: newTotalScore,
        gamesPlayed: prev.gamesPlayed + (result.correct ? 0 : 1),
        accuracy: newAccuracy,
        bestStreak: newBestStreak,
        achievements: newAchievements
      };
    });
  };

  const resetSession = () => {
    setCurrentStreak(0);
    setCorrectAnswers(0);
    setTotalAnswers(0);
  };

  const calculatePoints = (correct: boolean, difficulty: string, streak: number): number => {
    if (!correct) return 0;
    
    let basePoints = 10;
    
    switch (difficulty) {
      case 'easy': basePoints = 10; break;
      case 'medium': basePoints = 20; break;
      case 'hard': basePoints = 30; break;
    }
    
    const streakMultiplier = Math.min(1 + (streak * 0.1), 3);
    return Math.round(basePoints * streakMultiplier);
  };

  return {
    stats,
    currentStreak,
    updateStats,
    resetSession,
    calculatePoints
  };
};