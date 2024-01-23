import Image from "next/image";
import logo from "@/assets/icontext.svg";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="m-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <Link href="" className="flex items-center gap-3">
              <Image src={logo} width={150} height={100} alt="NextJob logo" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Talented ... Get Oppertunities
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-gray-800">
              About Us
            </Link>
            <Link href="/" className="hover:text-gray-800">
              Contact
            </Link>
            <Link href="/" className="hover:text-gray-800">
              Terms and Services
            </Link>
            <Link href="/" className="hover:text-gray-800">
              Privacy Policy
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8"></hr>

        <div className="flex justify-between text-center text-xs text-muted-foreground">
          <Link href="#" className="flex items-center">
            {new Date().getFullYear()} NextJob, Inc ...
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hamza-EL07"
            className="flex hover:text-gray-800"
          >
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
}
