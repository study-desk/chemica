import { Element, getCategoryColor } from '@/data/elements';

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
  isQuizMode?: boolean;
  isSelected?: boolean;
  showAnswer?: boolean;
  isCorrect?: boolean;
}

export const ElementCard = ({ 
  element, 
  onClick, 
  isQuizMode = false, 
  isSelected = false,
  showAnswer = false,
  isCorrect = false 
}: ElementCardProps) => {
  const backgroundColor = getCategoryColor(element.category);
  
  const handleClick = () => {
    onClick(element);
  };

  const getCardClasses = () => {
    let classes = "element-card glass cursor-pointer rounded-lg text-center transition-all border";
    
    if (element.symbol === 'DK') {
      classes += " element-card-compact p-1";
    } else {
      classes += " p-2";
    }
    
    if (isQuizMode && isSelected) {
      classes += " ring-2 ring-blue-400";
    }
    
    if (showAnswer && isCorrect) {
      classes += " correct-answer";
    } else if (showAnswer && !isCorrect && isSelected) {
      classes += " incorrect-answer";
    }
    
    return classes;
  };

  return (
    <div
      className={getCardClasses()}
      style={{ 
        backgroundColor,
        gridColumn: element.position.col,
        gridRow: element.position.row 
      }}
      onClick={handleClick}
    >
      {element.emoji && (
        <div className="text-xs mb-1">{element.emoji}</div>
      )}
      <div className="text-xs opacity-75 mb-1">{element.atomicNumber}</div>
      <div className={`${element.symbol === 'DK' ? 'text-sm' : 'text-lg md:text-xl'} font-bold text-white drop-shadow-lg`}>
        {element.symbol}
      </div>
      <div className="text-xs text-white/90 truncate">{element.name}</div>
      {element.symbol !== 'DK' && (
        <div className="text-xs opacity-75 mt-1">{element.atomicMass.toFixed(2)}</div>
      )}
    </div>
  );
};