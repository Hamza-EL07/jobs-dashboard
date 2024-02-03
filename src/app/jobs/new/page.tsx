import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Post a new job";

  return {
    title: title,
  };
}
export default function page() {
  return <NewJobForm />;
}
