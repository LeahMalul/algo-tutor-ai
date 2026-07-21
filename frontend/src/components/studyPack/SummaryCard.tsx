import type { StudyPack } from "../../types/study";

interface SummaryCardProps {
  summary: StudyPack["summary"];
}

function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Summary
      </h2>

      <p className="leading-8 text-slate-700">
        {summary}
      </p>
    </section>
  );
}

export default SummaryCard;