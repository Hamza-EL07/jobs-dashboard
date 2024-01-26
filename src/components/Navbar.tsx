import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icontext.svg";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm ">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5 ">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={150} height={100} alt="NextJob logo" />
        </Link>

        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
