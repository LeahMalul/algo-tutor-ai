from fastapi import FastAPI
from app.api.study import router as study_router

app = FastAPI(title="AlgoTutor AI")
app.include_router(study_router)

@app.get("/")
def root():
    return {"message": "AlgoTutor AI is running 🚀"}