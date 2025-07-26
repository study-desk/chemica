import { useState, useEffect, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Zap, Target, Award, Crown } from 'lucide-react';

interface GameStats {
  level: number;
  xp: number;
  totalScore: number;
  gamesPlayed: number;
  accuracy: number;
  bestStreak: number;
  achievements: string[];
}

interface GameInterfaceProps {
  stats: GameStats;
  currentStreak: number;
  onStartGame: () => void;
  compact?: boolean;
}

export const GameInterface = ({ stats, currentStreak, onStartGame, compact = false }: GameInterfaceProps) => {
  const [showLevelUp, setShowLevelUp] = useState(false);
  
  const xpForNextLevel = stats.level * 100;
  const xpProgress = (stats.xp % 100);
  
  const recentAchievements = useMemo(() => {
    const achievements = [
      { id: 'first_win', name: 'First Victory', icon: Star, condition: stats.gamesPlayed >= 1 },
      { id: 'streak_5', name: 'Hot Streak', icon: Zap, condition: stats.bestStreak >= 5 },
      { id: 'accuracy_80', name: 'Sharp Mind', icon: Target, condition: stats.accuracy >= 80 },
      { id: 'level_5', name: 'Rising Star', icon: Award, condition: stats.level >= 5 },
      { id: 'score_1000', name: 'Score Master', icon: Trophy, condition: stats.totalScore >= 1000 },
      { id: 'level_10', name: 'Chemistry Pro', icon: Crown, condition: stats.level >= 10 }
    ];
    
    return achievements.filter(achievement => 
      achievement.condition && !stats.achievements.includes(achievement.id)
    );
  }, [stats]);

  useEffect(() => {
    if (recentAchievements.length > 0) {
      const timer = setTimeout(() => setShowLevelUp(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [recentAchievements]);

  const containerClass = compact 
    ? "glass p-3 rounded-lg space-y-2" 
    : "glass p-6 rounded-xl space-y-4";

  return (
    <Card className={containerClass}>
      <div className="game-header rounded-lg p-3 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Crown className="w-5 h-5 text-yellow-400" />
          <span className="text-lg font-bold score-display">
            Level {stats.level}
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>XP: {stats.xp}</span>
            <span>Next: {xpForNextLevel}</span>
          </div>
          <Progress value={xpProgress} className="level-progress h-2" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="glass p-2 rounded-lg">
          <div className="text-xs text-muted-foreground">Total Score</div>
          <div className="text-lg font-bold score-display">{stats.totalScore.toLocaleString()}</div>
        </div>
        
        <div className="glass p-2 rounded-lg">
          <div className="text-xs text-muted-foreground">Accuracy</div>
          <div className="text-lg font-bold score-display">{stats.accuracy}%</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Streak: {currentStreak}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium">Best: {stats.bestStreak}</span>
        </div>
      </div>

      {recentAchievements.length > 0 && (
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground text-center">New Achievements!</div>
          <div className="flex flex-wrap gap-1 justify-center">
            {recentAchievements.slice(0, 3).map((achievement) => (
              <Badge 
                key={achievement.id}
                className="achievement-badge text-black text-xs px-2 py-1"
              >
                <achievement.icon className="w-3 h-3 mr-1" />
                {achievement.name}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Button 
        onClick={onStartGame}
        className="w-full game-header border-0"
        size={compact ? "sm" : "default"}
      >
        <Target className="w-4 h-4 mr-2" />
        Start Quiz Challenge
      </Button>
    </Card>
  );
};