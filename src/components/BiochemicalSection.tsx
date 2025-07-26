import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Atom, Dna, Zap, Droplets } from 'lucide-react';

interface BiochemicalCompound {
  name: string;
  formula: string;
  type: string;
  function: string;
  structure: string;
  significance: string;
}

const biochemicalCompounds: BiochemicalCompound[] = [
  {
    name: 'Adenosine Triphosphate',
    formula: 'C₁₀H₁₆N₅O₁₃P₃',
    type: 'Nucleotide',
    function: 'Energy storage and transfer',
    structure: 'Adenine + Ribose + 3 Phosphate groups',
    significance: 'Universal energy currency of cells'
  },
  {
    name: 'Glucose',
    formula: 'C₆H₁₂O₆',
    type: 'Carbohydrate',
    function: 'Primary energy source',
    structure: 'Six-carbon sugar molecule',
    significance: 'Main fuel for cellular respiration'
  },
  {
    name: 'Hemoglobin',
    formula: 'C₂₉₅₂H₄₆₆₄N₈₁₂O₈₃₂S₈Fe₄',
    type: 'Protein',
    function: 'Oxygen transport',
    structure: 'Four protein chains with iron-containing heme groups',
    significance: 'Carries oxygen in red blood cells'
  },
  {
    name: 'DNA',
    formula: 'Variable',
    type: 'Nucleic Acid',
    function: 'Genetic information storage',
    structure: 'Double helix of nucleotide pairs',
    significance: 'Contains genetic blueprint of life'
  },
  {
    name: 'Chlorophyll',
    formula: 'C₅₅H₇₂MgN₄O₅',
    type: 'Porphyrin',
    function: 'Light absorption for photosynthesis',
    structure: 'Magnesium-containing tetrapyrrole ring',
    significance: 'Enables plants to capture solar energy'
  },
  {
    name: 'Insulin',
    formula: 'C₂₅₇H₃₈₃N₆₅O₇₇S₆',
    type: 'Protein Hormone',
    function: 'Blood glucose regulation',
    structure: 'Two polypeptide chains linked by disulfide bonds',
    significance: 'Controls glucose uptake by cells'
  }
];

export const BiochemicalSection = () => {
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Nucleotide': 'bg-blue-500',
      'Carbohydrate': 'bg-green-500', 
      'Protein': 'bg-purple-500',
      'Nucleic Acid': 'bg-red-500',
      'Porphyrin': 'bg-yellow-500',
      'Protein Hormone': 'bg-pink-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, any> = {
      'Nucleotide': Zap,
      'Carbohydrate': Droplets,
      'Protein': Atom,
      'Nucleic Acid': Dna,
      'Porphyrin': Atom,
      'Protein Hormone': Atom
    };
    return icons[type] || Atom;
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
          Biochemical Chemistry
        </h2>
        <p className="text-muted-foreground">
          Essential molecules and compounds in biological systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {biochemicalCompounds.map((compound) => {
          const Icon = getTypeIcon(compound.type);
          return (
            <Card key={compound.name} className="glass p-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${getTypeColor(compound.type)} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="glass">
                    {compound.type}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">{compound.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{compound.formula}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-primary">Function: </span>
                    <span className="text-muted-foreground">{compound.function}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Structure: </span>
                    <span className="text-muted-foreground">{compound.structure}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Significance: </span>
                    <span className="text-muted-foreground">{compound.significance}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full glass">
                  Learn More
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};