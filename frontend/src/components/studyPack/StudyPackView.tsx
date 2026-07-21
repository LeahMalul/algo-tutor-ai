import type { StudyPack } from "../../types/study";

import SummaryCard from "./SummaryCard";
import KeyConceptsList from "./KeyConceptsList";
import PracticeQuestionsList from "./PracticeQuestionsList";

interface StudyPackViewProps {
  studyPack: StudyPack;
}

function StudyPackView({
  studyPack,
}: StudyPackViewProps) {
  return (
    <div className="mt-12 space-y-8">
      <SummaryCard
        summary={studyPack.summary}
      />

      <KeyConceptsList
        concepts={studyPack.key_concepts}
      />

      <PracticeQuestionsList
        questions={studyPack.practice_questions}
      />
    </div>
  );
}

export default StudyPackView;