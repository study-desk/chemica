export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const quizDatabase: Record<string, QuizQuestion[]> = {
  'general-chemistry': [
    {
      id: 'gc-001',
      question: 'What is Avogadro\'s number?',
      options: ['6.022 × 10²³', '6.022 × 10²²', '6.022 × 10²¹', '6.022 × 10²⁴'],
      correctAnswer: '6.022 × 10²³',
      explanation: 'Avogadro\'s number is the number of atoms or molecules in one mole of a substance.',
      difficulty: 'easy',
      category: 'general-chemistry'
    },
    {
      id: 'gc-002',
      question: 'Which element has the highest electronegativity?',
      options: ['Fluorine', 'Oxygen', 'Nitrogen', 'Chlorine'],
      correctAnswer: 'Fluorine',
      explanation: 'Fluorine is the most electronegative element with a value of 4.0 on the Pauling scale.',
      difficulty: 'medium',
      category: 'general-chemistry'
    },
    {
      id: 'gc-003',
      question: 'What is the pH of pure water at 25°C?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '7',
      explanation: 'Pure water is neutral with a pH of 7 at 25°C.',
      difficulty: 'easy',
      category: 'general-chemistry'
    },
    {
      id: 'gc-004',
      question: 'Which quantum number describes the orientation of an orbital?',
      options: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (ml)', 'Spin (ms)'],
      correctAnswer: 'Magnetic (ml)',
      explanation: 'The magnetic quantum number (ml) describes the orientation of an orbital in space.',
      difficulty: 'hard',
      category: 'general-chemistry'
    }
  ],
  
  'organic-chemistry': [
    {
      id: 'oc-001',
      question: 'What is the hybridization of carbon in methane (CH4)?',
      options: ['sp', 'sp²', 'sp³', 'sp³d'],
      correctAnswer: 'sp³',
      explanation: 'In methane, carbon forms four equivalent bonds, requiring sp³ hybridization.',
      difficulty: 'medium',
      category: 'organic-chemistry'
    },
    {
      id: 'oc-002',
      question: 'Which functional group is present in aldehydes?',
      options: ['-CHO', '-COOH', '-OH', '-NH2'],
      correctAnswer: '-CHO',
      explanation: 'Aldehydes contain the carbonyl group (-CHO) at the end of a carbon chain.',
      difficulty: 'easy',
      category: 'organic-chemistry'
    },
    {
      id: 'oc-003',
      question: 'What type of reaction is the conversion of an alkene to an alkane?',
      options: ['Substitution', 'Addition', 'Elimination', 'Rearrangement'],
      correctAnswer: 'Addition',
      explanation: 'Converting an alkene to an alkane involves adding hydrogen across the double bond.',
      difficulty: 'medium',
      category: 'organic-chemistry'
    },
    {
      id: 'oc-004',
      question: 'Which mechanism involves carbocation intermediates?',
      options: ['SN1', 'SN2', 'E2', 'Both SN1 and E1'],
      correctAnswer: 'Both SN1 and E1',
      explanation: 'Both SN1 and E1 mechanisms proceed through carbocation intermediates.',
      difficulty: 'hard',
      category: 'organic-chemistry'
    }
  ],
  
  'inorganic-chemistry': [
    {
      id: 'ic-001',
      question: 'What is the coordination number of central metal in [Co(NH3)6]³⁺?',
      options: ['4', '5', '6', '8'],
      correctAnswer: '6',
      explanation: 'Cobalt is surrounded by six ammonia ligands, giving a coordination number of 6.',
      difficulty: 'medium',
      category: 'inorganic-chemistry'
    },
    {
      id: 'ic-002',
      question: 'Which crystal field geometry has the highest crystal field splitting?',
      options: ['Tetrahedral', 'Square planar', 'Octahedral', 'Trigonal bipyramidal'],
      correctAnswer: 'Square planar',
      explanation: 'Square planar complexes have the highest crystal field splitting energy.',
      difficulty: 'hard',
      category: 'inorganic-chemistry'
    },
    {
      id: 'ic-003',
      question: 'What is the oxidation state of chromium in K2Cr2O7?',
      options: ['+3', '+4', '+5', '+6'],
      correctAnswer: '+6',
      explanation: 'In potassium dichromate, each chromium atom has an oxidation state of +6.',
      difficulty: 'medium',
      category: 'inorganic-chemistry'
    }
  ],
  
  'physical-chemistry': [
    {
      id: 'pc-001',
      question: 'What does the Gibbs free energy change (ΔG) determine?',
      options: ['Reaction rate', 'Spontaneity', 'Activation energy', 'Heat capacity'],
      correctAnswer: 'Spontaneity',
      explanation: 'ΔG < 0 indicates a spontaneous process, while ΔG > 0 indicates non-spontaneous.',
      difficulty: 'medium',
      category: 'physical-chemistry'
    },
    {
      id: 'pc-002',
      question: 'According to the Arrhenius equation, what increases reaction rate?',
      options: ['Higher activation energy', 'Lower temperature', 'Higher temperature', 'Lower concentration'],
      correctAnswer: 'Higher temperature',
      explanation: 'Higher temperature increases the fraction of molecules with sufficient energy to react.',
      difficulty: 'easy',
      category: 'physical-chemistry'
    },
    {
      id: 'pc-003',
      question: 'What is the relationship between enthalpy, entropy, and Gibbs free energy?',
      options: ['ΔG = ΔH + TΔS', 'ΔG = ΔH - TΔS', 'ΔG = TΔS - ΔH', 'ΔG = ΔH × TΔS'],
      correctAnswer: 'ΔG = ΔH - TΔS',
      explanation: 'The Gibbs-Helmholtz equation relates free energy to enthalpy and entropy.',
      difficulty: 'medium',
      category: 'physical-chemistry'
    }
  ],
  
  'analytical-chemistry': [
    {
      id: 'ac-001',
      question: 'What is the principle behind UV-Vis spectroscopy?',
      options: ['Molecular vibrations', 'Electronic transitions', 'Nuclear spin', 'Mass separation'],
      correctAnswer: 'Electronic transitions',
      explanation: 'UV-Vis spectroscopy measures electronic transitions between molecular orbitals.',
      difficulty: 'medium',
      category: 'analytical-chemistry'
    },
    {
      id: 'ac-002',
      question: 'Which technique is best for determining molecular structure?',
      options: ['UV-Vis', 'IR', 'NMR', 'AAS'],
      correctAnswer: 'NMR',
      explanation: 'NMR provides detailed structural information about molecular connectivity.',
      difficulty: 'easy',
      category: 'analytical-chemistry'
    },
    {
      id: 'ac-003',
      question: 'What does Beer\'s Law relate?',
      options: ['Absorbance to concentration', 'Frequency to energy', 'pH to concentration', 'Pressure to volume'],
      correctAnswer: 'Absorbance to concentration',
      explanation: 'Beer\'s Law states that absorbance is directly proportional to concentration.',
      difficulty: 'easy',
      category: 'analytical-chemistry'
    }
  ],
  
  'biochemical-chemistry': [
    {
      id: 'bc-001',
      question: 'What is the primary structure of a protein?',
      options: ['α-helix formation', 'Amino acid sequence', 'Disulfide bonds', 'Quaternary assembly'],
      correctAnswer: 'Amino acid sequence',
      explanation: 'Primary structure refers to the linear sequence of amino acids in a polypeptide chain.',
      difficulty: 'easy',
      category: 'biochemical-chemistry'
    },
    {
      id: 'bc-002',
      question: 'Which enzyme catalyzes the formation of peptide bonds?',
      options: ['Pepsin', 'Trypsin', 'Peptidyl transferase', 'Aminoacyl-tRNA synthetase'],
      correctAnswer: 'Peptidyl transferase',
      explanation: 'Peptidyl transferase in the ribosome catalyzes peptide bond formation during translation.',
      difficulty: 'hard',
      category: 'biochemical-chemistry'
    },
    {
      id: 'bc-003',
      question: 'What is the main energy currency of cells?',
      options: ['ADP', 'ATP', 'NAD+', 'FAD'],
      correctAnswer: 'ATP',
      explanation: 'Adenosine triphosphate (ATP) is the primary energy carrier in cellular metabolism.',
      difficulty: 'easy',
      category: 'biochemical-chemistry'
    },
    {
      id: 'bc-004',
      question: 'Which pathway converts glucose to pyruvate?',
      options: ['Glycolysis', 'Gluconeogenesis', 'Pentose phosphate', 'Citric acid cycle'],
      correctAnswer: 'Glycolysis',
      explanation: 'Glycolysis is the metabolic pathway that breaks down glucose to pyruvate.',
      difficulty: 'medium',
      category: 'biochemical-chemistry'
    }
  ],
  
  'thermodynamics': [
    {
      id: 'td-001',
      question: 'What does the First Law of Thermodynamics state?',
      options: ['Energy cannot be created or destroyed', 'Entropy always increases', 'Temperature is absolute', 'Pressure equals force per area'],
      correctAnswer: 'Energy cannot be created or destroyed',
      explanation: 'The First Law states that energy is conserved in any process.',
      difficulty: 'easy',
      category: 'thermodynamics'
    },
    {
      id: 'td-002',
      question: 'At what temperature does the entropy of a perfect crystal become zero?',
      options: ['0°C', '0 K', '100 K', '273 K'],
      correctAnswer: '0 K',
      explanation: 'The Third Law of Thermodynamics states that entropy approaches zero at absolute zero.',
      difficulty: 'medium',
      category: 'thermodynamics'
    },
    {
      id: 'td-003',
      question: 'What is the efficiency of a Carnot engine operating between 400K and 300K?',
      options: ['20%', '25%', '30%', '75%'],
      correctAnswer: '25%',
      explanation: 'Carnot efficiency = 1 - (Tc/Th) = 1 - (300/400) = 0.25 or 25%',
      difficulty: 'hard',
      category: 'thermodynamics'
    }
  ],
  
  'chemical-engineering': [
    {
      id: 'ce-001',
      question: 'What is the Reynolds number used to determine?',
      options: ['Heat transfer', 'Mass transfer', 'Flow regime', 'Reaction rate'],
      correctAnswer: 'Flow regime',
      explanation: 'Reynolds number distinguishes between laminar and turbulent flow regimes.',
      difficulty: 'medium',
      category: 'chemical-engineering'
    },
    {
      id: 'ce-002',
      question: 'Which unit operation separates components based on boiling points?',
      options: ['Absorption', 'Distillation', 'Extraction', 'Crystallization'],
      correctAnswer: 'Distillation',
      explanation: 'Distillation separates liquid mixtures based on differences in volatility.',
      difficulty: 'easy',
      category: 'chemical-engineering'
    }
  ],
  
  'mass-transfer': [
    {
      id: 'mt-001',
      question: 'What driving force governs mass transfer?',
      options: ['Temperature gradient', 'Pressure gradient', 'Concentration gradient', 'Velocity gradient'],
      correctAnswer: 'Concentration gradient',
      explanation: 'Mass transfer occurs due to concentration differences between phases or regions.',
      difficulty: 'easy',
      category: 'mass-transfer'
    },
    {
      id: 'mt-002',
      question: 'Which law describes molecular diffusion?',
      options: ['Fourier\'s Law', 'Fick\'s Law', 'Newton\'s Law', 'Henry\'s Law'],
      correctAnswer: 'Fick\'s Law',
      explanation: 'Fick\'s First Law relates the diffusive flux to the concentration gradient.',
      difficulty: 'medium',
      category: 'mass-transfer'
    }
  ],
  
  'heat-transfer': [
    {
      id: 'ht-001',
      question: 'Which heat transfer mechanism requires no medium?',
      options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
      correctAnswer: 'Radiation',
      explanation: 'Radiation can transfer heat through vacuum without requiring a medium.',
      difficulty: 'easy',
      category: 'heat-transfer'
    },
    {
      id: 'ht-002',
      question: 'What does the Nusselt number represent?',
      options: ['Ratio of convective to conductive heat transfer', 'Thermal conductivity', 'Heat capacity', 'Temperature difference'],
      correctAnswer: 'Ratio of convective to conductive heat transfer',
      explanation: 'Nusselt number is the ratio of convective to conductive heat transfer across a boundary.',
      difficulty: 'medium',
      category: 'heat-transfer'
    }
  ],
  
  'fluid-mechanics': [
    {
      id: 'fm-001',
      question: 'What does Bernoulli\'s equation relate?',
      options: ['Pressure and density', 'Velocity and acceleration', 'Pressure, velocity, and elevation', 'Temperature and pressure'],
      correctAnswer: 'Pressure, velocity, and elevation',
      explanation: 'Bernoulli\'s equation relates pressure, kinetic energy, and potential energy in fluid flow.',
      difficulty: 'medium',
      category: 'fluid-mechanics'
    },
    {
      id: 'fm-002',
      question: 'What characterizes an incompressible fluid?',
      options: ['Constant temperature', 'Constant density', 'Constant pressure', 'Constant velocity'],
      correctAnswer: 'Constant density',
      explanation: 'Incompressible fluids have constant density regardless of pressure changes.',
      difficulty: 'easy',
      category: 'fluid-mechanics'
    }
  ],
  
  'reaction-engineering': [
    {
      id: 're-001',
      question: 'What is the residence time in a CSTR?',
      options: ['V/Q', 'Q/V', 'V×Q', 'Q-V'],
      correctAnswer: 'V/Q',
      explanation: 'Residence time equals reactor volume divided by volumetric flow rate.',
      difficulty: 'medium',
      category: 'reaction-engineering'
    },
    {
      id: 're-002',
      question: 'Which reactor type has the highest conversion for first-order reactions?',
      options: ['CSTR', 'PFR', 'Batch', 'Semi-batch'],
      correctAnswer: 'PFR',
      explanation: 'Plug flow reactors achieve higher conversion than CSTRs for positive-order reactions.',
      difficulty: 'hard',
      category: 'reaction-engineering'
    }
  ],
  
  'separation-processes': [
    {
      id: 'sp-001',
      question: 'What principle underlies chromatographic separation?',
      options: ['Boiling point differences', 'Density differences', 'Affinity differences', 'Solubility differences'],
      correctAnswer: 'Affinity differences',
      explanation: 'Chromatography separates based on different affinities for stationary and mobile phases.',
      difficulty: 'medium',
      category: 'separation-processes'
    },
    {
      id: 'sp-002',
      question: 'Which factor increases distillation efficiency?',
      options: ['Lower reflux ratio', 'Fewer trays', 'Higher reflux ratio', 'Higher pressure'],
      correctAnswer: 'Higher reflux ratio',
      explanation: 'Higher reflux ratio provides better separation but requires more energy.',
      difficulty: 'medium',
      category: 'separation-processes'
    }
  ],
  
  'process-control': [
    {
      id: 'pc-001',
      question: 'What does PID stand for in process control?',
      options: ['Pressure, Integration, Derivative', 'Proportional, Integral, Derivative', 'Process, Input, Design', 'Primary, Initial, Direct'],
      correctAnswer: 'Proportional, Integral, Derivative',
      explanation: 'PID controllers use proportional, integral, and derivative control actions.',
      difficulty: 'easy',
      category: 'process-control'
    },
    {
      id: 'pc-002',
      question: 'What does the integral term in a PID controller eliminate?',
      options: ['Overshoot', 'Oscillations', 'Steady-state error', 'Response time'],
      correctAnswer: 'Steady-state error',
      explanation: 'The integral term eliminates steady-state offset in the controlled variable.',
      difficulty: 'medium',
      category: 'process-control'
    }
  ]
};

export const getRandomQuestions = (category: string, count: number = 10): QuizQuestion[] => {
  const questions = quizDatabase[category] || [];
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getAllCategories = (): string[] => {
  return Object.keys(quizDatabase);
};

export const getQuestionsByDifficulty = (category: string, difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  const questions = quizDatabase[category] || [];
  return questions.filter(q => q.difficulty === difficulty);
};