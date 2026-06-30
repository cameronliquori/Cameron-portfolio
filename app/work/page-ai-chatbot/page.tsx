import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function PageAiChatbotPage() {
  const caseStudy = getCaseStudyBySlug("page-ai-chatbot")!;
  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
