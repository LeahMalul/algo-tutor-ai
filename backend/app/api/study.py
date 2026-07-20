from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.study_service import StudyService

import logging
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/study", tags=["Study"])

study_service = StudyService()

@router.get("/health")
def health():
    return {"status": "ok"}


@router.post(
    "/upload",
    summary="Upload PDF study material",
    description="Upload a PDF file and generate a structured study pack"
)
async def upload_pdf(file: UploadFile = File(...)):
    logger.info(f"Uploading file: {file.filename}")
    if file.content_type != "application/pdf":
        raise HTTPException(400, "Only PDF files are allowed")

    return await study_service.generate_study_pack(file)

