
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.study import router as study_router
from app.core import logger
from app.config import FRONTEND_URL

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


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
       FRONTEND_URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(study_router)

@app.get("/")
def root():
    return {"message": "AlgoTutor AI is running 🚀"}