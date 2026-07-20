from fastapi import UploadFile

from app.services.pdf_service import PDFService
from app.models.study_pack import StudyPack
from app.services.ai_service import AIService

class StudyService:

    def __init__(self):
        self.pdf_service = PDFService()
        self.ai_service = AIService()

    async def generate_study_pack(self, file: UploadFile):
        """
        Generate a study pack from an uploaded PDF.
        """

        text = await self.pdf_service.extract_text(file)

        study_pack = await self.ai_service.generate_study_pack(text)

        return study_pack