import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  FlaskConical, 
  Atom, 
  Zap, 
  TestTube, 
  Wrench,
  Trophy,
  Star,
  Thermometer,
  TestTube2,
  Microscope,
  Activity,
  Settings,
  TrendingUp
} from 'lucide-react';

export type QuizMode = 'general-chemistry' | 'organic-chemistry' | 'inorganic-chemistry' | 'physical-chemistry' | 'analytical-chemistry' | 'biochemical-chemistry' | 'thermodynamics' | 'chemical-engineering' | 'mass-transfer' | 'heat-transfer' | 'fluid-mechanics' | 'reaction-engineering' | 'separation-processes' | 'process-control';

interface QuizModeSelectorProps {
  onModeSelect: (mode: QuizMode) => void;
  scores: Record<QuizMode, { correct: number; total: number; bestStreak: number }>;
}

const quizModes = [
  {
    id: 'general-chemistry' as QuizMode,
    title: 'General Chemistry',
    description: 'Fundamental chemical principles and concepts',
    icon: Brain,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'organic-chemistry' as QuizMode,
    title: 'Organic Chemistry',
    description: 'Carbon-based compounds and reactions',
    icon: FlaskConical,
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'inorganic-chemistry' as QuizMode,
    title: 'Inorganic Chemistry',
    description: 'Non-organic compounds and coordination chemistry',
    icon: Atom,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'physical-chemistry' as QuizMode,
    title: 'Physical Chemistry',
    description: 'Chemical thermodynamics and kinetics',
    icon: Zap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'analytical-chemistry' as QuizMode,
    title: 'Analytical Chemistry',
    description: 'Chemical analysis and instrumentation',
    icon: Microscope,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'biochemical-chemistry' as QuizMode,
    title: 'Biochemical Chemistry',
    description: 'Chemistry of biological systems',
    icon: Activity,
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 'thermodynamics' as QuizMode,
    title: 'Thermodynamics',
    description: 'Energy and entropy in chemical processes',
    icon: Thermometer,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'chemical-engineering' as QuizMode,
    title: 'Chemical Engineering',
    description: 'Process design and chemical operations',
    icon: Settings,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'mass-transfer' as QuizMode,
    title: 'Mass Transfer',
    description: 'Movement of chemical species',
    icon: TrendingUp,
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 'heat-transfer' as QuizMode,
    title: 'Heat Transfer',
    description: 'Thermal energy transport mechanisms',
    icon: Thermometer,
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'fluid-mechanics' as QuizMode,
    title: 'Fluid Mechanics',
    description: 'Behavior of liquids and gases',
    icon: TestTube,
    color: 'from-blue-500 to-teal-500'
  },
  {
    id: 'reaction-engineering' as QuizMode,
    title: 'Reaction Engineering',
    description: 'Design and analysis of chemical reactors',
    icon: TestTube2,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'separation-processes' as QuizMode,
    title: 'Separation Processes',
    description: 'Purification and separation techniques',
    icon: FlaskConical,
    color: 'from-purple-500 to-blue-500'
  },
  {
    id: 'process-control' as QuizMode,
    title: 'Process Control',
    description: 'Automation and control systems',
    icon: Settings,
    color: 'from-gray-500 to-blue-500'
  }
];

export const QuizModeSelector = ({ onModeSelect, scores }: QuizModeSelectorProps) => {
  const getAccuracy = (mode: QuizMode) => {
    const score = scores[mode];
    if (score.total === 0) return 0;
    return Math.round((score.correct / score.total) * 100);
  };

  const getBadgeVariant = (accuracy: number) => {
    if (accuracy >= 90) return 'default';
    if (accuracy >= 70) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Choose Your Challenge
        </h2>
        <p className="text-muted-foreground">
          Test your chemistry knowledge across different quiz modes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizModes.map((mode) => {
          const Icon = mode.icon;
          const accuracy = getAccuracy(mode.id);
          const score = scores[mode.id];

          return (
            <Card 
              key={mode.id} 
              className="glass p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => onModeSelect(mode.id)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${mode.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {score.total > 0 && (
                    <div className="text-right">
                      <Badge variant={getBadgeVariant(accuracy)}>
                        {accuracy}%
                      </Badge>
                      {score.bestStreak > 0 && (
                        <div className="flex items-center gap-1 mt-1 text-yellow-500">
                          <Star className="w-3 h-3 fill-yellow-500" />
                          <span className="text-xs">{score.bestStreak}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {mode.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {mode.description}
                  </p>
                </div>

                {score.total > 0 && (
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{score.correct}/{score.total} correct</span>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      <span>Best: {score.bestStreak}</span>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full glass group-hover:bg-primary/20 transition-colors"
                  variant="outline"
                >
                  Start Quiz
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};