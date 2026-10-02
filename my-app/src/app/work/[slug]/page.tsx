import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, DESIGNER_INFO } from "@/data/data";
import CaseStudyClient from "./CaseStudyClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${DESIGNER_INFO.fullName} - UI/UX Designer`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyClient project={project} />;
}
