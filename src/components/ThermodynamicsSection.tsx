import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Thermometer, Zap, TrendingUp, Calculator } from 'lucide-react';

interface ThermodynamicConcept {
  name: string;
  symbol: string;
  unit: string;
  description: string;
  equation: string;
  significance: string;
}

const thermodynamicConcepts: ThermodynamicConcept[] = [
  {
    name: 'Enthalpy',
    symbol: 'H',
    unit: 'J/mol',
    description: 'Heat content at constant pressure',
    equation: 'H = U + PV',
    significance: 'Determines heat absorbed or released in reactions'
  },
  {
    name: 'Entropy',
    symbol: 'S',
    unit: 'J/(mol·K)',
    description: 'Measure of disorder or randomness',
    equation: 'S = k ln(W)',
    significance: 'Determines the direction of spontaneous processes'
  },
  {
    name: 'Gibbs Free Energy',
    symbol: 'G',
    unit: 'J/mol',
    description: 'Available energy for useful work',
    equation: 'G = H - TS',
    significance: 'Predicts spontaneity of reactions'
  },
  {
    name: 'Internal Energy',
    symbol: 'U',
    unit: 'J',
    description: 'Total energy of a system',
    equation: 'ΔU = Q - W',
    significance: 'Foundation of the First Law of Thermodynamics'
  }
];

export const ThermodynamicsSection = () => {
  const [temperature, setTemperature] = useState<string>('298');
  const [enthalpy, setEnthalpy] = useState<string>('');
  const [entropy, setEntropy] = useState<string>('');
  const [gibbsEnergy, setGibbsEnergy] = useState<string>('');

  const calculateGibbsEnergy = () => {
    const T = parseFloat(temperature);
    const H = parseFloat(enthalpy);
    const S = parseFloat(entropy);
    
    if (!isNaN(T) && !isNaN(H) && !isNaN(S)) {
      const G = H - (T * S / 1000); // Convert S from J/(mol·K) to kJ/(mol·K)
      setGibbsEnergy(G.toFixed(2));
    }
  };

  const getConceptIcon = (name: string) => {
    const icons: Record<string, any> = {
      'Enthalpy': Thermometer,
      'Entropy': TrendingUp,
      'Gibbs Free Energy': Zap,
      'Internal Energy': Calculator
    };
    return icons[name] || Calculator;
  };

  const getConceptColor = (name: string) => {
    const colors: Record<string, string> = {
      'Enthalpy': 'from-red-500 to-orange-500',
      'Entropy': 'from-purple-500 to-pink-500',
      'Gibbs Free Energy': 'from-green-500 to-blue-500',
      'Internal Energy': 'from-blue-500 to-purple-500'
    };
    return colors[name] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
          Thermodynamics
        </h2>
        <p className="text-muted-foreground">
          Energy relationships and spontaneity in chemical processes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Key Concepts</h3>
          <div className="grid gap-4">
            {thermodynamicConcepts.map((concept) => {
              const Icon = getConceptIcon(concept.name);
              return (
                <Card key={concept.name} className="glass p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getConceptColor(concept.name)} text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold">{concept.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {concept.symbol}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {concept.unit}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{concept.description}</p>
                      <div className="bg-secondary/20 p-2 rounded font-mono text-sm">
                        {concept.equation}
                      </div>
                      <p className="text-xs text-blue-400">{concept.significance}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Gibbs Energy Calculator</h3>
          <Card className="glass p-6">
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg inline-block">
                  <span className="font-mono text-lg">ΔG = ΔH - TΔS</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="temperature">Temperature (K)</Label>
                  <Input
                    id="temperature"
                    type="number"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    placeholder="298"
                    className="glass"
                  />
                </div>

                <div>
                  <Label htmlFor="enthalpy">Enthalpy Change (kJ/mol)</Label>
                  <Input
                    id="enthalpy"
                    type="number"
                    value={enthalpy}
                    onChange={(e) => setEnthalpy(e.target.value)}
                    placeholder="e.g., -285.8"
                    className="glass"
                  />
                </div>

                <div>
                  <Label htmlFor="entropy">Entropy Change (J/mol·K)</Label>
                  <Input
                    id="entropy"
                    type="number"
                    value={entropy}
                    onChange={(e) => setEntropy(e.target.value)}
                    placeholder="e.g., 163.2"
                    className="glass"
                  />
                </div>

                <Button onClick={calculateGibbsEnergy} className="w-full glass">
                  Calculate ΔG
                </Button>

                {gibbsEnergy && (
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Gibbs Free Energy Change</p>
                    <p className="text-2xl font-bold text-primary">{gibbsEnergy} kJ/mol</p>
                    <p className="text-xs mt-2 text-muted-foreground">
                      {parseFloat(gibbsEnergy) < 0 ? '✓ Spontaneous process' : '✗ Non-spontaneous process'}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                <h4 className="font-medium text-foreground">Thermodynamic Laws</h4>
                <p><span className="font-medium">First Law:</span> Energy cannot be created or destroyed</p>
                <p><span className="font-medium">Second Law:</span> Entropy of the universe always increases</p>
                <p><span className="font-medium">Third Law:</span> Entropy approaches zero at absolute zero</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};