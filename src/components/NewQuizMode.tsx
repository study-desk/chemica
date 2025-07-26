import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { HeartAnimation } from './HeartAnimation';
import { generateQuizSet } from '@/utils/newQuizGenerator';
import { QuizQuestion } from '@/data/quizDatabase';
import type { QuizMode as QuizModeType } from './QuizModeSelector';
import { CheckCircle, XCircle, Trophy, Target } from 'lucide-react';

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

interface NewQuizModeProps {
  mode: QuizModeType;
  onScoreUpdate: (mode: QuizModeType, correct: boolean) => void;
  onBackToSelector: () => void;
  gameStats?: GameStats;
  onGameStatsUpdate?: (result: QuizResult) => void;
}

export const NewQuizMode = ({ mode, onScoreUpdate, onBackToSelector, gameStats, onGameStatsUpdate }: NewQuizModeProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState(0);

  const generateNewQuizSet = () => {
    const newQuestions = generateQuizSet(mode, 10);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowAnswer(false);
    setProgress(0);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showAnswer) return;
    
    setSelectedAnswer(answer);
    setShowAnswer(true);
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    onScoreUpdate(mode, isCorrect);
    
    if (isCorrect) {
      setStreak(prev => prev + 1);
      setShowHearts(true);
      
      if (onGameStatsUpdate) {
        const points = calculatePoints(currentQuestion.difficulty, streak + 1);
        onGameStatsUpdate({
          correct: true,
          streak: streak + 1,
          points
        });
      }
    } else {
      setStreak(0);
      
      if (onGameStatsUpdate) {
        onGameStatsUpdate({
          correct: false,
          streak: 0,
          points: 0
        });
      }
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer('');
        setShowAnswer(false);
        setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
      } else {
        onBackToSelector();
      }
    }, 3000);
  };

  useEffect(() => {
    generateNewQuizSet();
  }, [mode]);

  if (questions.length === 0) {
    return (
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">No questions available for this category.</p>
        <Button onClick={onBackToSelector} variant="outline" className="glass">
          ← Back to Quiz Selection
        </Button>
      </div>
    );
  }

  const calculatePoints = (difficulty: string, currentStreak: number): number => {
    let basePoints = 10;
    
    switch (difficulty) {
      case 'easy': basePoints = 10; break;
      case 'medium': basePoints = 20; break;
      case 'hard': basePoints = 30; break;
    }
    
    const streakMultiplier = Math.min(1 + (currentStreak * 0.1), 3);
    return Math.round(basePoints * streakMultiplier);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="space-y-6">
      <HeartAnimation 
        show={showHearts} 
        onComplete={() => setShowHearts(false)} 
      />

      <div className="text-center space-y-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Button
            variant="outline"
            onClick={onBackToSelector}
            className="glass"
          >
            ← Back
          </Button>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-bold">{streak}</span>
            {gameStats && (
              <div className="flex items-center gap-1 text-xs">
                <span>Lvl {gameStats.level}</span>
                <span>•</span>
                <span>{gameStats.totalScore}pts</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
            <span>Streak: {streak}</span>
          </div>
          <Progress value={progress} className="glass" />
        </div>
      </div>

      <Card className="glass p-6 text-center max-w-2xl mx-auto">
        <div className="space-y-4">
          <Badge variant="outline" className="glass">
            {mode.charAt(0).toUpperCase() + mode.slice(1).replace('-', ' ')}
          </Badge>
          
          <div className="space-y-2">
            <Badge 
              variant={currentQuestion.difficulty === 'easy' ? 'secondary' : 
                      currentQuestion.difficulty === 'medium' ? 'default' : 'destructive'}
              className="glass"
            >
              {currentQuestion.difficulty}
            </Badge>
          </div>

          <h3 className="text-xl font-bold">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {currentQuestion.options.map((option, index) => {
              let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline";
              let icon = null;

              if (showAnswer) {
                if (option === currentQuestion.correctAnswer) {
                  buttonVariant = "default";
                  icon = <CheckCircle className="w-5 h-5 text-green-500" />;
                } else if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
                  buttonVariant = "destructive";
                  icon = <XCircle className="w-5 h-5 text-red-500" />;
                }
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  size="lg"
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showAnswer}
                  className="glass p-4 h-auto text-left justify-between"
                >
                  <span>{option}</span>
                  {icon}
                </Button>
              );
            })}
          </div>

          {showAnswer && (
            <div className={`p-4 rounded-lg glass ${
              isCorrect ? 'border-green-500' : 'border-red-500'
            }`}>
              <div className="flex items-center gap-2 justify-center mb-3">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
                <span className={`text-lg font-bold ${
                  isCorrect ? 'text-green-400' : 'text-red-400'
                }`}>
                  {isCorrect ? 'Correct!' : `Wrong! Correct answer: ${currentQuestion.correctAnswer}`}
                </span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="text-blue-400">💡 {currentQuestion.explanation}</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};