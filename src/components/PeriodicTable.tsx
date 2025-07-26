import { useState } from 'react';
import { elements, Element } from '@/data/elements';
import { ElementCard } from './ElementCard';
import { NewQuizMode } from './NewQuizMode';
import { QuizModeSelector, type QuizMode as QuizModeType } from './QuizModeSelector';
import { IframeBrowser } from './IframeBrowser';
import { GameInterface } from './GameInterface';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGameStats } from '@/hooks/useGameStats';
import { toast } from '@/hooks/use-toast';
import { Settings, Minimize2, Maximize2 } from 'lucide-react';

interface GameScore {
  correct: number;
  total: number;
  streak: number;
  bestStreak: number;
}

type QuizScores = Record<QuizModeType, GameScore>;

export const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [currentView, setCurrentView] = useState<'table' | 'quiz-selector' | 'quiz' | 'browser'>('table');
  const [selectedQuizMode, setSelectedQuizMode] = useState<QuizModeType>('general-chemistry');
  const [compactMode, setCompactMode] = useState(false);
  const { stats, currentStreak, updateStats, resetSession } = useGameStats();
  const [quizScores, setQuizScores] = useState<QuizScores>(() => {
    const saved = localStorage.getItem('quizScores');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      'general-chemistry': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'organic-chemistry': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'inorganic-chemistry': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'physical-chemistry': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'analytical-chemistry': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'biochemical-chemistry': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'thermodynamics': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'chemical-engineering': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'mass-transfer': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'heat-transfer': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'fluid-mechanics': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'reaction-engineering': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'separation-processes': { correct: 0, total: 0, streak: 0, bestStreak: 0 },
      'process-control': { correct: 0, total: 0, streak: 0, bestStreak: 0 }
    };
  });

  const handleElementClick = (element: Element) => {
    if (element.symbol === 'DK') {
      handleDKElementClick();
      return;
    }
    
    if (currentView === 'table') {
      setSelectedElement(element);
      toast({
        title: element.name,
        description: `Atomic Number: ${element.atomicNumber}, Mass: ${element.atomicMass}`
      });
    }
  };

  const handleDKElementClick = () => {
    const password = prompt('Enter password to access advanced features:');
    if (password === 'ahmed') {
      setCurrentView('browser');
      toast({
        title: 'Access Granted',
        description: 'Welcome to the advanced browser!'
      });
    } else if (password !== null) {
      toast({
        title: 'Access Denied',
        description: 'Incorrect password',
        variant: 'destructive'
      });
    }
  };

  const updateScore = (mode: QuizModeType, correct: boolean) => {
    setQuizScores(prev => {
      const newScores = {
        ...prev,
        [mode]: {
          ...prev[mode],
          correct: prev[mode].correct + (correct ? 1 : 0),
          total: prev[mode].total + 1,
          streak: correct ? prev[mode].streak + 1 : 0,
          bestStreak: correct ? Math.max(prev[mode].bestStreak, prev[mode].streak + 1) : prev[mode].bestStreak
        }
      };
      
      // Cache scores
      localStorage.setItem('quizScores', JSON.stringify(newScores));
      
      return newScores;
    });
  };

  const handleQuizModeSelect = (mode: QuizModeType) => {
    setSelectedQuizMode(mode);
    setCurrentView('quiz');
  };

  if (currentView === 'browser') {
    return <IframeBrowser onClose={() => setCurrentView('table')} />;
  }

  if (currentView === 'quiz-selector') {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <QuizModeSelector 
            onModeSelect={handleQuizModeSelect}
            scores={quizScores}
          />
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentView('table')}
              className="glass"
            >
              ← Back to Periodic Table
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'quiz') {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <NewQuizMode 
            mode={selectedQuizMode}
            onScoreUpdate={updateScore}
            onBackToSelector={() => setCurrentView('quiz-selector')}
            gameStats={stats}
            onGameStatsUpdate={updateStats}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-2 md:p-4 space-y-4">
      {/* Game Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            🧪 CHEMICOOL ⚗️
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCompactMode(!compactMode)}
            className="glass"
          >
            {compactMode ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <Badge className="glass">
            Level {stats.level}
          </Badge>
          <Badge variant="outline" className="glass">
            {stats.totalScore.toLocaleString()} pts
          </Badge>
          <Badge variant="secondary" className="glass">
            {stats.accuracy}% accuracy
          </Badge>
        </div>
      </div>

      {/* Game Interface */}
      <div className="max-w-4xl mx-auto">
        <GameInterface
          stats={stats}
          currentStreak={currentStreak}
          onStartGame={() => {
            resetSession();
            setCurrentView('quiz-selector');
          }}
          compact={compactMode}
        />
      </div>

      {/* Compact Periodic Table */}
      <Card className="glass p-2 md:p-4">
        <div className={compactMode ? "periodic-grid-compact" : "periodic-grid"}>
          {elements.map(element => (
            <ElementCard
              key={`${element.symbol}-${element.atomicNumber}`}
              element={element}
              onClick={handleElementClick}
              isQuizMode={false}
            />
          ))}
        </div>
      </Card>

      {/* Element Info Panel */}
      {selectedElement && currentView === 'table' && (
        <Card className="glass p-4 max-w-sm mx-auto">
          <h3 className="text-xl font-bold mb-3">{selectedElement.name}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><strong>Symbol:</strong> {selectedElement.symbol}</div>
            <div><strong>Number:</strong> {selectedElement.atomicNumber}</div>
            <div><strong>Mass:</strong> {selectedElement.atomicMass}</div>
            <div><strong>Period:</strong> {selectedElement.period}</div>
          </div>
          <div className="mt-2">
            <strong>Category:</strong> {selectedElement.category.replace('-', ' ')}
          </div>
          <Button 
            onClick={() => setSelectedElement(null)}
            className="mt-3 w-full"
            variant="outline"
            size="sm"
          >
            Close
          </Button>
        </Card>
      )}

      {/* Compact Legend */}
      {!compactMode && (
        <Card className="glass p-3 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-3 text-center">🧪 Element Categories ⚗️</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-1 text-xs">
            {[
              { name: 'Hydrogen', color: 'hsl(var(--hydrogen))' },
              { name: 'Alkali', color: 'hsl(var(--alkali-metal))' },
              { name: 'Alkaline', color: 'hsl(var(--alkaline-earth))' },
              { name: 'Transition', color: 'hsl(var(--transition-metal))' },
              { name: 'Post-trans', color: 'hsl(var(--post-transition))' },
              { name: 'Metalloids', color: 'hsl(var(--metalloid))' },
              { name: 'Nonmetals', color: 'hsl(var(--nonmetal))' },
              { name: 'Halogens', color: 'hsl(var(--halogen))' },
              { name: 'Noble Gas', color: 'hsl(var(--noble-gas))' },
              { name: 'Special', color: 'hsl(var(--dk-element))' }
            ].map(category => (
              <div key={category.name} className="flex items-center gap-1">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: category.color }}
                />
                <span className="truncate">{category.name}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};