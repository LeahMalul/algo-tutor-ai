import { useState } from "react";

import { uploadStudyMaterial } from "../../api/studyApi";
import type { StudyPack } from "../../types/study";


export function useStudyGeneration() {
  const [studyPack, setStudyPack] = useState<StudyPack | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);


  const generate = async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await uploadStudyMaterial(file);

      setStudyPack(result);

      return result;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );

      throw error;
    } finally {
      setIsLoading(false);
    }
  };


  return {
    studyPack,
    isLoading,
    error,
    generate,
  };
}