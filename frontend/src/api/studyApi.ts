import type { StudyPack } from "../types/study";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function uploadStudyMaterial(
  file: File
): Promise<StudyPack> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_BASE_URL}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate study pack");
  }

  const data: StudyPack = await response.json();

  return data;
}