import type { PracticeQuestion } from "../../types/study";

interface PracticeQuestionsListProps {
  questions: PracticeQuestion[];
}

function PracticeQuestionsList({
  questions,
}: PracticeQuestionsListProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Practice Questions
      </h2>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 p-6"
          >
            <h3 className="font-semibold text-slate-900">
              {question.question}
            </h3>

            <p className="mt-4 text-blue-600 font-medium">
              Answer
            </p>

            <p className="text-slate-700">
              {question.answer}
            </p>

            <p className="mt-4 text-blue-600 font-medium">
              Explanation
            </p>

            <p className="text-slate-700">
              {question.explanation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PracticeQuestionsList;