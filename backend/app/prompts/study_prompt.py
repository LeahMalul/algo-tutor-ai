

def build_study_prompt(text: str) -> str:
    return f"""
You are an expert learning assistant.

Analyze the following study material and create a structured study pack.

Your task:
1. Create a clear summary of the material.
2. Extract the most important key concepts and explain each one.
3. Create practice questions with answers and explanations.

Study material:
{text}
"""