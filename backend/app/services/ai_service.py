from google import genai
from google.genai import types

from app.config import GEMINI_API_KEY
from app.models.study_pack import StudyPack
from app.prompts.study_prompt import build_study_prompt


class AIService:

    def __init__(self):
        self.client = ""
        # genai.Client(api_key=GEMINI_API_KEY)
            
    async def generate_study_pack(self, text: str) -> StudyPack:

        return StudyPack(
            summary="This is a placeholder summary.",
            key_concepts=[
                {
                    "title": "Placeholder Concept 1",
                    "explanation": "This is a placeholder explanation for concept 1."
                },
                {
                    "title": "Placeholder Concept 2",
                    "explanation": "This is a placeholder explanation for concept 2."
                }
            ],
            practice_questions=[
                {
                    "question": "What is a placeholder question?",
                    "answer": "This is a placeholder answer.",
                    "explanation": "This is a placeholder explanation for the answer."
                }
            ]
        )   
    
        # print("1. Building prompt...")
        # prompt = build_study_prompt(text)

        # print("2. Sending request to Gemini...")

        # response = self.client.models.generate_content(
        #     model="models/gemini-flash-latest",
        #     contents=prompt,
        #     config=types.GenerateContentConfig(
        #         response_mime_type="application/json",
        #         response_schema=StudyPack,
        #     ),
        # )

        # print("3. Response received!")

        # print(response.text)

        # print("4. Validating...")

        # study_pack = StudyPack.model_validate_json(response.text)

        # print("5. Done!")


        # return study_pack
