import ProjectView from "@/components/portfolio/ProjectView";
import { projects } from "@/components/portfolio/content";

// /portfolio shows the first project, with the full index in the sidebar.
export default function PortfolioPage() {
  return <ProjectView project={projects[0]} />;
}
