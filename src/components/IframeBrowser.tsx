import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { 
  X, 
  Minus, 
  Maximize2, 
  Home, 
  RefreshCw, 
  ArrowLeft, 
  ArrowRight,
  Star
} from 'lucide-react';

interface IframeBrowserProps {
  onClose: () => void;
}

export const IframeBrowser = ({ onClose }: IframeBrowserProps) => {
  const [url, setUrl] = useState('https://www.google.com');
  const [currentUrl, setCurrentUrl] = useState('https://www.google.com');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const favorites = [
    { name: 'XAT', url: 'https://xat.com' },
    { name: 'WhatsApp Web', url: 'https://web.whatsapp.com' },
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ];

  const handleNavigate = () => {
    if (url && !url.startsWith('http')) {
      setCurrentUrl(`https://${url}`);
    } else {
      setCurrentUrl(url);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNavigate();
    }
  };

  const handleFavoriteClick = (favoriteUrl: string) => {
    setUrl(favoriteUrl);
    setCurrentUrl(favoriteUrl);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="glass"
        >
          🌐 Browser (Minimized)
        </Button>
      </div>
    );
  }

  const browserClasses = isMaximized 
    ? "fixed inset-0 z-50" 
    : "fixed inset-4 md:inset-8 z-50 rounded-lg overflow-hidden";

  return (
    <div className={browserClasses}>
      <Card className="h-full flex flex-col glass">
        {/* Title Bar */}
        <div className="flex items-center justify-between p-2 bg-background/20 border-b">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm font-medium">Advanced Browser</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMinimized(true)}
              className="w-8 h-8 p-0"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-8 h-8 p-0"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center gap-2 p-2 bg-background/10 border-b">
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-8 h-8 p-0"
            onClick={() => handleNavigate()}
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
            <Home className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 mx-2">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter URL..."
              className="glass"
            />
          </div>
          
          <Button 
            size="sm" 
            onClick={handleNavigate}
            className="glass"
          >
            Go
          </Button>
        </div>

        {/* Favorites Bar */}
        <div className="flex items-center gap-2 p-2 bg-background/5 border-b overflow-x-auto">
          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          {favorites.map((favorite, index) => (
            <Button
              key={index}
              size="sm"
              variant="ghost"
              onClick={() => handleFavoriteClick(favorite.url)}
              className="whitespace-nowrap text-xs"
            >
              {favorite.name}
            </Button>
          ))}
        </div>

        {/* Browser Content */}
        <div className="flex-1 relative">
          <iframe
            src={currentUrl}
            className="w-full h-full border-0"
            title="Browser Content"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
            loading="eager"
            onLoad={() => {
              // Hide loading overlay when iframe loads
              const overlay = document.querySelector('.loading-overlay');
              if (overlay) {
                overlay.remove();
              }
            }}
            onError={() => {
              // Handle loading errors
              const overlay = document.querySelector('.loading-overlay');
              if (overlay) {
                overlay.innerHTML = '<div class="text-center"><p class="text-red-400">Failed to load website</p></div>';
              }
            }}
          />
          
          {/* Loading overlay */}
          <div className="loading-overlay absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="text-center space-y-2">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
              <p className="text-sm text-muted-foreground">Loading website...</p>
              <p className="text-xs text-muted-foreground/70">{currentUrl}</p>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="p-2 bg-background/20 border-t text-xs text-muted-foreground">
          <div className="flex justify-between items-center">
            <span>Ready</span>
            <span>{currentUrl}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};