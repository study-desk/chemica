export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  category: string;
  period: number;
  group: number;
  position: { row: number; col: number };
  // Enhanced properties
  density?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  electronConfiguration: string;
  discoveryYear?: number;
  discoveredBy?: string;
  uses: string[];
  chemicalReactions: {
    reaction: string;
    testProcedure: string;
    result: string;
  }[];
  safetyInfo?: string;
  funFact?: string;
  emoji?: string; // Added for easier learning
}

export interface QuizQuestion {
  id: string;
  type: 'naming' | 'atomic-number' | 'position' | 'properties' | 'electron-config' | 'reactions' | 'uses';
  question: string;
  correctAnswer: string;
  options?: string[];
  element: Element;
}

export const elements: Element[] = [
  // Period 1
  { 
    symbol: "H", 
    name: "Hydrogen", 
    atomicNumber: 1, 
    atomicMass: 1.008, 
    category: "hydrogen", 
    period: 1, 
    group: 1, 
    position: { row: 1, col: 1 },
    density: 0.00008988,
    meltingPoint: -259.16,
    boilingPoint: -252.87,
    electronConfiguration: "1s¹",
    discoveryYear: 1766,
    discoveredBy: "Henry Cavendish",
    uses: ["Fuel cells", "Rocket fuel", "Chemical production", "Food processing"],
    chemicalReactions: [
      {
        reaction: "2H₂ + O₂ → 2H₂O",
        testProcedure: "Light hydrogen gas near oxygen",
        result: "Explosive reaction producing water"
      }
    ],
    safetyInfo: "Highly flammable and explosive",
    funFact: "Most abundant element in the universe!",
    emoji: "🚀" // Rocket fuel
  },
  { 
    symbol: "He", 
    name: "Helium", 
    atomicNumber: 2, 
    atomicMass: 4.003, 
    category: "noble-gas", 
    period: 1, 
    group: 18, 
    position: { row: 1, col: 18 },
    density: 0.0001785,
    meltingPoint: -272.2,
    boilingPoint: -268.93,
    electronConfiguration: "1s²",
    discoveryYear: 1868,
    discoveredBy: "Pierre Janssen",
    uses: ["Party balloons", "Cooling superconducting magnets", "Diving gas mixtures", "Leak detection"],
    chemicalReactions: [],
    safetyInfo: "Inert gas, can cause asphyxiation in enclosed spaces",
    funFact: "Second most abundant element in the universe but rare on Earth!",
    emoji: "🎈" // Balloons
  },
  
  // Period 2
  { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: 6.94, category: "alkali-metal", period: 2, group: 1, position: { row: 2, col: 1 }, electronConfiguration: "[He] 2s¹", uses: ["Batteries", "Mental health medication"], chemicalReactions: [], emoji: "🔋" },
  { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: 9.012, category: "alkaline-earth", period: 2, group: 2, position: { row: 2, col: 2 }, electronConfiguration: "[He] 2s²", uses: ["X-ray windows", "Aerospace alloys"], chemicalReactions: [], emoji: "🩻" },
  { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: 10.81, category: "metalloid", period: 2, group: 13, position: { row: 2, col: 13 }, electronConfiguration: "[He] 2s² 2p¹", uses: ["Glass production", "Nuclear reactors"], chemicalReactions: [], emoji: "🧪" },
  { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: 12.01, category: "nonmetal", period: 2, group: 14, position: { row: 2, col: 14 }, electronConfiguration: "[He] 2s² 2p²", uses: ["Steel production", "Diamonds", "Graphite"], chemicalReactions: [{ reaction: "C + O₂ → CO₂", testProcedure: "Burn carbon in oxygen", result: "Carbon dioxide gas" }], emoji: "💎" },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: 14.01, category: "nonmetal", period: 2, group: 15, position: { row: 2, col: 15 }, electronConfiguration: "[He] 2s² 2p³", uses: ["Fertilizers", "Liquid nitrogen cooling"], chemicalReactions: [], emoji: "🌱" },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: 16.00, category: "nonmetal", period: 2, group: 16, position: { row: 2, col: 16 }, electronConfiguration: "[He] 2s² 2p⁴", uses: ["Breathing", "Steel production", "Water"], chemicalReactions: [{ reaction: "2H₂ + O₂ → 2H₂O", testProcedure: "Combust hydrogen with oxygen", result: "Water formation" }], emoji: "💨" },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, atomicMass: 19.00, category: "halogen", period: 2, group: 17, position: { row: 2, col: 17 }, electronConfiguration: "[He] 2s² 2p⁵", uses: ["Toothpaste", "Teflon production"], chemicalReactions: [], emoji: "🦷" },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicMass: 20.18, category: "noble-gas", period: 2, group: 18, position: { row: 2, col: 18 }, electronConfiguration: "[He] 2s² 2p⁶", uses: ["Neon signs", "Lasers"], chemicalReactions: [], emoji: "🌈" },
  
  // Period 3
  { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicMass: 22.99, category: "alkali-metal", period: 3, group: 1, position: { row: 3, col: 1 }, electronConfiguration: "[Ne] 3s¹", uses: ["Table salt", "Street lights"], chemicalReactions: [{ reaction: "2Na + 2H₂O → 2NaOH + H₂", testProcedure: "Drop sodium in water", result: "Explosive reaction with hydrogen gas" }], emoji: "🧂" },
  { symbol: "Mg", name: "Magnesium", atomicNumber: 12, atomicMass: 24.31, category: "alkaline-earth", period: 3, group: 2, position: { row: 3, col: 2 }, electronConfiguration: "[Ne] 3s²", uses: ["Alloys", "Fireworks", "Dietary supplements"], chemicalReactions: [], emoji: "🎆" },
  { symbol: "Al", name: "Aluminum", atomicNumber: 13, atomicMass: 26.98, category: "post-transition", period: 3, group: 13, position: { row: 3, col: 13 }, electronConfiguration: "[Ne] 3s² 3p¹", uses: ["Cans", "Foil", "Aircraft"], chemicalReactions: [], emoji: "🥤" },
  { symbol: "Si", name: "Silicon", atomicNumber: 14, atomicMass: 28.09, category: "metalloid", period: 3, group: 14, position: { row: 3, col: 14 }, electronConfiguration: "[Ne] 3s² 3p²", uses: ["Computer chips", "Glass", "Solar panels"], chemicalReactions: [], emoji: "💻" },
  { symbol: "P", name: "Phosphorus", atomicNumber: 15, atomicMass: 30.97, category: "nonmetal", period: 3, group: 15, position: { row: 3, col: 15 }, electronConfiguration: "[Ne] 3s² 3p³", uses: ["Fertilizers", "Matches", "DNA"], chemicalReactions: [], emoji: "🔥" },
  { symbol: "S", name: "Sulfur", atomicNumber: 16, atomicMass: 32.07, category: "nonmetal", period: 3, group: 16, position: { row: 3, col: 16 }, electronConfiguration: "[Ne] 3s² 3p⁴", uses: ["Rubber vulcanization", "Gunpowder"], chemicalReactions: [], emoji: "💣" },
  { symbol: "Cl", name: "Chlorine", atomicNumber: 17, atomicMass: 35.45, category: "halogen", period: 3, group: 17, position: { row: 3, col: 17 }, electronConfiguration: "[Ne] 3s² 3p⁵", uses: ["Water purification", "Bleach", "PVC"], chemicalReactions: [], emoji: "🏊" },
  { symbol: "Ar", name: "Argon", atomicNumber: 18, atomicMass: 39.95, category: "noble-gas", period: 3, group: 18, position: { row: 3, col: 18 }, electronConfiguration: "[Ne] 3s² 3p⁶", uses: ["Welding", "Light bulbs"], chemicalReactions: [], emoji: "⚡" },
  
  // Period 4
  { symbol: "K", name: "Potassium", atomicNumber: 19, atomicMass: 39.10, category: "alkali-metal", period: 4, group: 1, position: { row: 4, col: 1 }, electronConfiguration: "[Ar] 4s¹", uses: ["Fertilizers", "Bananas"], chemicalReactions: [], emoji: "🍌" },
  { symbol: "Ca", name: "Calcium", atomicNumber: 20, atomicMass: 40.08, category: "alkaline-earth", period: 4, group: 2, position: { row: 4, col: 2 }, electronConfiguration: "[Ar] 4s²", uses: ["Bones", "Concrete", "Cheese"], chemicalReactions: [], emoji: "🦴" },
  { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.96, category: "transition-metal", period: 4, group: 3, position: { row: 4, col: 3 }, electronConfiguration: "[Ar] 3d¹ 4s²", uses: ["Aerospace", "Sports equipment"], chemicalReactions: [], emoji: "🏃" },
  { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.87, category: "transition-metal", period: 4, group: 4, position: { row: 4, col: 4 }, electronConfiguration: "[Ar] 3d² 4s²", uses: ["Aircraft", "Medical implants"], chemicalReactions: [], emoji: "✈️" },
  { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.94, category: "transition-metal", period: 4, group: 5, position: { row: 4, col: 5 }, electronConfiguration: "[Ar] 3d³ 4s²", uses: ["Steel alloys", "Tools"], chemicalReactions: [], emoji: "🔧" },
  { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 52.00, category: "transition-metal", period: 4, group: 6, position: { row: 4, col: 6 }, electronConfiguration: "[Ar] 3d⁵ 4s¹", uses: ["Stainless steel", "Chrome plating"], chemicalReactions: [], emoji: "✨" },
  { symbol: "Mn", name: "Manganese", atomicNumber: 25, atomicMass: 54.94, category: "transition-metal", period: 4, group: 7, position: { row: 4, col: 7 }, electronConfiguration: "[Ar] 3d⁵ 4s²", uses: ["Steel production", "Batteries"], chemicalReactions: [], emoji: "🔋" },
  { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.85, category: "transition-metal", period: 4, group: 8, position: { row: 4, col: 8 }, electronConfiguration: "[Ar] 3d⁶ 4s²", uses: ["Construction", "Blood", "Magnets"], chemicalReactions: [{ reaction: "4Fe + 3O₂ → 2Fe₂O₃", testProcedure: "Expose iron to oxygen and moisture", result: "Rust formation" }], emoji: "🏗️" },
  { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.93, category: "transition-metal", period: 4, group: 9, position: { row: 4, col: 9 }, electronConfiguration: "[Ar] 3d⁷ 4s²", uses: ["Magnets", "Blue pigments"], chemicalReactions: [], emoji: "🧲" },
  { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.69, category: "transition-metal", period: 4, group: 10, position: { row: 4, col: 10 }, electronConfiguration: "[Ar] 3d⁸ 4s²", uses: ["Coins", "Stainless steel"], chemicalReactions: [], emoji: "🪙" },
  { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.55, category: "transition-metal", period: 4, group: 11, position: { row: 4, col: 11 }, electronConfiguration: "[Ar] 3d¹⁰ 4s¹", uses: ["Electrical wiring", "Plumbing"], chemicalReactions: [], emoji: "⚡" },
  { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38, category: "transition-metal", period: 4, group: 12, position: { row: 4, col: 12 }, electronConfiguration: "[Ar] 3d¹⁰ 4s²", uses: ["Galvanization", "Supplements"], chemicalReactions: [], emoji: "💊" },
  { symbol: "Ga", name: "Gallium", atomicNumber: 31, atomicMass: 69.72, category: "post-transition", period: 4, group: 13, position: { row: 4, col: 13 }, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p¹", uses: ["Semiconductors", "LEDs"], chemicalReactions: [], emoji: "💡" },
  { symbol: "Ge", name: "Germanium", atomicNumber: 32, atomicMass: 72.63, category: "metalloid", period: 4, group: 14, position: { row: 4, col: 14 }, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p²", uses: ["Semiconductors", "Fiber optics"], chemicalReactions: [], emoji: "🔌" },
  { symbol: "As", name: "Arsenic", atomicNumber: 33, atomicMass: 74.92, category: "metalloid", period: 4, group: 15, position: { row: 4, col: 15 }, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p³", uses: ["Semiconductors", "Wood preservatives"], chemicalReactions: [], safetyInfo: "Highly toxic", emoji: "☠️" },
  { symbol: "Se", name: "Selenium", atomicNumber: 34, atomicMass: 78.97, category: "nonmetal", period: 4, group: 16, position: { row: 4, col: 16 }, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁴", uses: ["Glass coloring", "Supplements"], chemicalReactions: [], emoji: "🎨" },
  { symbol: "Br", name: "Bromine", atomicNumber: 35, atomicMass: 79.90, category: "halogen", period: 4, group: 17, position: { row: 4, col: 17 }, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁵", uses: ["Photography", "Fire retardants"], chemicalReactions: [], emoji: "📸" },
  { symbol: "Kr", name: "Krypton", atomicNumber: 36, atomicMass: 83.80, category: "noble-gas", period: 4, group: 18, position: { row: 4, col: 18 }, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁶", uses: ["Fluorescent lamps", "Lasers"], chemicalReactions: [], emoji: "🌟" },
  
  // Period 5
  { symbol: "Rb", name: "Rubidium", atomicNumber: 37, atomicMass: 85.47, category: "alkali-metal", period: 5, group: 1, position: { row: 5, col: 1 }, electronConfiguration: "[Kr] 5s¹", uses: ["Research", "Atomic clocks"], chemicalReactions: [], emoji: "⏰" },
  { symbol: "Sr", name: "Strontium", atomicNumber: 38, atomicMass: 87.62, category: "alkaline-earth", period: 5, group: 2, position: { row: 5, col: 2 }, electronConfiguration: "[Kr] 5s²", uses: ["Fireworks", "Magnets"], chemicalReactions: [], emoji: "🎆" },
  { symbol: "Y", name: "Yttrium", atomicNumber: 39, atomicMass: 88.91, category: "transition-metal", period: 5, group: 3, position: { row: 5, col: 3 }, electronConfiguration: "[Kr] 4d¹ 5s²", uses: ["Lasers", "Superconductors"], chemicalReactions: [], emoji: "🔬" },
  
  // Special fictional element DK - placed after Yttrium
  { symbol: "DK", name: "Dkharium", atomicNumber: 999, atomicMass: 299.99, category: "dk-element", period: 5, group: 3, position: { row: 6, col: 3 }, electronConfiguration: "[Dk] 1s∞", uses: ["Secret browser access", "Advanced features"], chemicalReactions: [{ reaction: "DK + password → Browser", testProcedure: "Enter correct password", result: "Browser portal opens" }], funFact: "Only responds to the correct password!", emoji: "🔐" },
  
  { symbol: "Zr", name: "Zirconium", atomicNumber: 40, atomicMass: 91.22, category: "transition-metal", period: 5, group: 4, position: { row: 5, col: 5 }, electronConfiguration: "[Kr] 4d² 5s²", uses: ["Nuclear reactors", "Ceramics"], chemicalReactions: [], emoji: "⚛️" },
  { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.91, category: "transition-metal", period: 5, group: 5, position: { row: 5, col: 6 }, electronConfiguration: "[Kr] 4d⁴ 5s¹", uses: ["Superconductors", "Steel alloys"], chemicalReactions: [], emoji: "🔗" },
  { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.95, category: "transition-metal", period: 5, group: 6, position: { row: 5, col: 7 }, electronConfiguration: "[Kr] 4d⁵ 5s¹", uses: ["Steel alloys", "Catalysts"], chemicalReactions: [], emoji: "⚗️" },
  { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98.00, category: "transition-metal", period: 5, group: 7, position: { row: 5, col: 8 }, electronConfiguration: "[Kr] 4d⁵ 5s²", uses: ["Medical imaging"], chemicalReactions: [], emoji: "🏥" },
  { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07, category: "transition-metal", period: 5, group: 8, position: { row: 5, col: 9 }, electronConfiguration: "[Kr] 4d⁷ 5s¹", uses: ["Catalysts", "Electronics"], chemicalReactions: [], emoji: "🔬" },
  { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.91, category: "transition-metal", period: 5, group: 9, position: { row: 5, col: 10 }, electronConfiguration: "[Kr] 4d⁸ 5s¹", uses: ["Catalysts", "Jewelry"], chemicalReactions: [], emoji: "💍" },
  { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42, category: "transition-metal", period: 5, group: 10, position: { row: 5, col: 11 }, electronConfiguration: "[Kr] 4d¹⁰", uses: ["Catalysts", "Electronics"], chemicalReactions: [], emoji: "⚙️" },
  { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.87, category: "transition-metal", period: 5, group: 11, position: { row: 5, col: 12 }, electronConfiguration: "[Kr] 4d¹⁰ 5s¹", uses: ["Jewelry", "Electronics", "Photography"], chemicalReactions: [], emoji: "🥈" },
  { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.41, category: "transition-metal", period: 5, group: 12, position: { row: 5, col: 13 }, electronConfiguration: "[Kr] 4d¹⁰ 5s²", uses: ["Batteries", "Pigments"], chemicalReactions: [], safetyInfo: "Toxic heavy metal", emoji: "⚠️" },
  { symbol: "In", name: "Indium", atomicNumber: 49, atomicMass: 114.82, category: "post-transition", period: 5, group: 13, position: { row: 5, col: 14 }, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p¹", uses: ["Touch screens", "Semiconductors"], chemicalReactions: [], emoji: "📱" },
  { symbol: "Sn", name: "Tin", atomicNumber: 50, atomicMass: 118.71, category: "post-transition", period: 5, group: 14, position: { row: 5, col: 15 }, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p²", uses: ["Cans", "Solder", "Bronze"], chemicalReactions: [], emoji: "🥫" },
  { symbol: "Sb", name: "Antimony", atomicNumber: 51, atomicMass: 121.76, category: "metalloid", period: 5, group: 15, position: { row: 5, col: 16 }, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p³", uses: ["Flame retardants", "Alloys"], chemicalReactions: [], emoji: "🛡️" },
  { symbol: "Te", name: "Tellurium", atomicNumber: 52, atomicMass: 127.60, category: "metalloid", period: 5, group: 16, position: { row: 5, col: 17 }, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁴", uses: ["Semiconductors", "Solar panels"], chemicalReactions: [], emoji: "☀️" },
  { symbol: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90, category: "halogen", period: 5, group: 17, position: { row: 5, col: 18 }, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁵", uses: ["Antiseptic", "Table salt additive"], chemicalReactions: [], emoji: "🧴" },
  { symbol: "Xe", name: "Xenon", atomicNumber: 54, atomicMass: 131.29, category: "noble-gas", period: 5, group: 18, position: { row: 5, col: 18 }, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁶", uses: ["Lighting", "Anesthesia"], chemicalReactions: [], emoji: "💡" },
];

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'hydrogen': 'hsl(var(--hydrogen))',
    'alkali-metal': 'hsl(var(--alkali-metal))',
    'alkaline-earth': 'hsl(var(--alkaline-earth))',
    'transition-metal': 'hsl(var(--transition-metal))',
    'post-transition': 'hsl(var(--post-transition))',
    'metalloid': 'hsl(var(--metalloid))',
    'nonmetal': 'hsl(var(--nonmetal))',
    'halogen': 'hsl(var(--halogen))',
    'noble-gas': 'hsl(var(--noble-gas))',
    'lanthanide': 'hsl(var(--lanthanide))',
    'actinide': 'hsl(var(--actinide))',
    'dk-element': 'hsl(var(--dk-element))',
    'unknown': 'hsl(var(--unknown))'
  };
  return colors[category] || colors['unknown'];
};