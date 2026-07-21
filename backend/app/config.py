from dotenv import load_dotenv
import os

load_dotenv()

#OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

FRONTEND_URL=os.getenv("FRONTEND_URL", "http://localhost:5173")