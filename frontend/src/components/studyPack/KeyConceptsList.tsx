import type { KeyConcept } from "../../types/study";

interface KeyConceptsListProps {
  concepts: KeyConcept[];
}

function KeyConceptsList({
  concepts,
}: KeyConceptsListProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Key Concepts
      </h2>

      <div className="space-y-5">
        {concepts.map((concept) => (
          <div
            key={concept.title}
            className="rounded-xl border border-slate-200 p-5"
          >
            <h3 className="font-semibold text-slate-900">
              {concept.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {concept.explanation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyConceptsList;