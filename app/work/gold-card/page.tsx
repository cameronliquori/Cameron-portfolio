import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function GoldCardPage() {
  const caseStudy = getCaseStudyBySlug("gold-card")!;
  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
