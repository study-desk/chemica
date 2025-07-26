import { getRandomQuestions, QuizQuestion } from '@/data/quizDatabase';
import type { QuizMode } from '@/components/QuizModeSelector';

export const generateQuizQuestion = (mode: QuizMode): QuizQuestion | null => {
  const questions = getRandomQuestions(mode, 1);
  return questions.length > 0 ? questions[0] : null;
};

export const generateQuizSet = (mode: QuizMode, count: number = 10): QuizQuestion[] => {
  return getRandomQuestions(mode, count);
};