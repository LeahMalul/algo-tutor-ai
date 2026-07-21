import Header from "../components/layout/Header";
import StudyPackView from "../components/studyPack/StudyPackView";
import UploadSection from "../components/upload/UploadSection";

import { useStudyGeneration } from "../hooks/study/useStudyGeneration";


function Home() {
  const {
    generate,
    studyPack,
    isLoading,
    error,
  } = useStudyGeneration();


  const handleGenerate = async (file: File) => {
    await generate(file);
  };


  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <Header />

        <UploadSection
          onGenerate={handleGenerate}
        />


        {isLoading && (
          <div className="mt-8 text-center text-slate-600">
            Generating your study pack... ✨
          </div>
        )}


        {error && (
          <div className="mt-8 rounded-xl bg-red-50 p-4 text-center text-red-600">
            {error}
          </div>
        )}


        {studyPack && (
          <StudyPackView studyPack={studyPack} />
        )}

      </div>
    </main>
  );
}


export default Home;