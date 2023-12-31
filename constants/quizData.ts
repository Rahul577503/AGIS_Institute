import { QuizData } from "@/interfaces/common";
export const quizData: QuizData[] = [
  {
    category: 'CCC',
    level: 'Medium',
    type: 'MCQ',
    questions: [
      {
        question: 'What is the Full form of SMTP?',
        options: ['Short mail transfer protocol', 'Secure mail transfer protocol', 'simple mail transfer protocol', 'short massage transfer protocol'],
        correctAnswer: 3,
      },
      {
        question: 'What is the Full form of  SATA ?',
        options: ['Serial advanced technology attachment', 'Social advanced technology attachment', 'system advanced technology attachment', 'serial auto technology attachment'],
        correctAnswer: 1,
      },
      {
        question: 'What is the Full form of SMTP?',
        options: ['Short mail transfer protocol', 'Secure mail transfer protocol', 'simple mail transfer protocol', 'short massage transfer protocol'],
        correctAnswer: 3,
      },
      {
        question: 'What is the Full form of SMTP?',
        options: ['Short mail transfer protocol', 'Secure mail transfer protocol', 'simple mail transfer protocol', 'short massage transfer protocol'],
        correctAnswer: 3,
      },
    ],
  },
  {
    category: 'ADCA',
    level: 'Hard',
    type: 'MCQ',
    questions: [
      {
        question: '',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctAnswer: 0,
      },
      // Add more questions similarly
    ],
  },
  {
    category: 'DCA',
    level: 'Medium',
    type: 'Boolean',
    questions: [
      {
        question: 'Is this true?',
        options: ['True', 'False'],
        correctAnswer: 0,
      },
      // Add more questions similarly
    ],
  },
  // Add more quiz data for other categories, levels, and types if needed
];