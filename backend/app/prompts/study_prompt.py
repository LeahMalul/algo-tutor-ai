
def build_study_prompt(text: str) -> str:
    return f"""
You are an expert tutor.

Analyze the following study material.

Tasks:
1. Write a concise summary.
2. Extract the most important key concepts and explain each one.
3. Generate practice questions with answers and explanations.

Study Material:

{text}
"""