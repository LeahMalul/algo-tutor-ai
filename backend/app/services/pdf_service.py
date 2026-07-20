import fitz
from fastapi import UploadFile


class PDFService:

    async def extract_text(self, file: UploadFile) -> str:
        """
        Extract plain text from an uploaded PDF file.
        """
        try:
            content = await file.read()

            with fitz.open(stream=content, filetype="pdf") as pdf:
                return "\n".join(page.get_text() for page in pdf).strip()

        except Exception as e:
            raise RuntimeError(f"Failed to extract text from PDF: {e}")