from fastapi import FastAPI
from app.api.study import router as study_router
from app.core import logger

app = FastAPI(
    title="AlgoTutor AI API",
    description="""
    AI-powered study assistant.

    Upload study material and generate:
    - Summary
    - Key concepts
    - Practice questions
    """,
    version="1.0.0"
)
app.include_router(study_router)

@app.get("/")
def root():
    return {"message": "AlgoTutor AI is running 🚀"}