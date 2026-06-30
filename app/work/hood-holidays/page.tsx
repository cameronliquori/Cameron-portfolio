import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HoodHolidaysPage() {
  const caseStudy = getCaseStudyBySlug("hood-holidays")!;
  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
