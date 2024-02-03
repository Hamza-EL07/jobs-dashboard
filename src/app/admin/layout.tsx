import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Admin";

  return {
    title: title,
  };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
