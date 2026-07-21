import Header from "../components/layout/Header";
import UploadSection from "../components/upload/UploadSection";

function Home() {
  const handleGenerate = (file: File) => {
    console.log("Selected file:", file);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Header />

        <UploadSection onGenerate={handleGenerate} />
      </div>
    </main>
  );
}

export default Home;