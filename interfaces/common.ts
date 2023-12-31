export interface HomeContent {
  description: Array<{
    image: string;
    title: string;
    content: string;
  }>;
}

interface IDescription {
  content: string;
  title?: string;
  image?: string;
  slug?: string;
}

export interface ILearn {
  id: string;
  image: string;
  title: string;
  slug: string;
  description: IDescription[];
}

export interface Iwords {
  id: string;
  word: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  category: string;
  level: string;
  type: string;
  questions: QuizQuestion[];
}

interface AboutDescription {
  image: string;
  title: string;
  content: string;
}

export interface IAbout {
  description: AboutDescription[];
}

export interface IGallery {
  imageUrl: string;
}