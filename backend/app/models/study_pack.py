from pydantic import BaseModel


class KeyConcept(BaseModel):
    title: str
    explanation: str


class PracticeQuestion(BaseModel):
    question: str
    answer: str
    explanation: str
    

class StudyPack(BaseModel):
    summary: str
    key_concepts: list[KeyConcept]
    practice_questions: list[PracticeQuestion]