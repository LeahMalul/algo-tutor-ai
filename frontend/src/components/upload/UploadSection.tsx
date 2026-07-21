import { useRef, useState } from "react";
import { FileText, Upload } from "lucide-react";

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="mt-12 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-10 text-center shadow-sm transition hover:border-blue-400 hover:shadow-lg">
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Upload className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-slate-900">
        Upload your study material
      </h2>

      <p className="mt-3 text-slate-500">
        Upload a PDF file and let AI generate your personalized study pack.
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={handleFileChange}
      />

      <button
        onClick={handleBrowseClick}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <FileText className="h-5 w-5" />
        Browse PDF
      </button>

      {selectedFile && (
        <div className="mx-auto mt-8 max-w-md rounded-xl bg-slate-50 p-4 text-left">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-blue-600" />

            <div>
              <p className="font-medium text-slate-900">
                {selectedFile.name}
              </p>

              <p className="text-sm text-slate-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default UploadSection;