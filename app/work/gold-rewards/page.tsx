import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function GoldRewardsPage() {
  const caseStudy = getCaseStudyBySlug("gold-rewards")!;
  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
