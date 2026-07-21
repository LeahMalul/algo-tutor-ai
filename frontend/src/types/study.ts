export interface KeyConcept {
  title: string;
  explanation: string;
}

export interface PracticeQuestion {
  question: string;
  answer: string;
  explanation: string;
}

export interface StudyPack {
  summary: string;
  key_concepts: KeyConcept[];
  practice_questions: PracticeQuestion[];
}