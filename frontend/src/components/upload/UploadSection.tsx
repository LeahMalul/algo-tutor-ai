function UploadSection() {
  return (
    <section className="mt-12 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center shadow-sm transition hover:border-blue-500 hover:shadow-md">
      <div className="text-6xl">📄</div>

      <h2 className="mt-4 text-2xl font-semibold text-slate-900">
        Upload your PDF
      </h2>

      <p className="mt-2 text-slate-500">
        Drag & drop your file here or browse from your computer.
      </p>

      <button
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Browse Files
      </button>
    </section>
  );
}

export default UploadSection;