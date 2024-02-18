import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="grow space-y-4 ">
      <div className="relative mx-auto w-full max-w-7xl items-center py-12 ">
        <div className="mx-auto flex w-full justify-between text-left">
          <div className="relative mx-auto inline-flex items-center align-middle">
            <div className="text-start">
              <h1 className="max-w-5xl text-4xl font-bold leading-none tracking-tighter text-neutral-900 md:text-5xl lg:max-w-7xl lg:text-6xl">
                Short way to find
                <br className="hidden lg:block" />
                {" "}your dream
                <br className="lg:block" />
                job, Team &amp; Senior.
                <div className="-mt-3 h-3  max-w-[300px] bg-cyan-400 lg:max-w-full" />
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-500">
                Backend , Frontend, Fullstack and Mobile developers. Find you
                next journy with NextJob, HTML &amp; Next.js.
              </p>
              <div className=" mt-6 flex w-full max-w-2xl gap-2">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <Button>
                    <Link href="/jobs/new" target="_blank">
                      Post a job
                    </Link>
                  </Button>
                  {/* <button className="transform rounded-xl bg-blue-600 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:px-10">
                    Get bundle
                  </button> */}
                </div>
                <div className="mt-3 rounded-lg sm:ml-3 sm:mt-0">
                  <Button className="bg-white text-gray-900 shadow-md hover:bg-slate-50">
                    <Link href="#jobs">Find a job</Link>
                  </Button>
                  {/* <button className="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10">
                    See features
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="group  ml-12 hidden w-full max-w-md overflow-hidden rounded-2xl lg:flex">
            <Image
              src={"/hero1.jpg"}
              width={0}
              height={0}
              className="h-full w-full transform rounded-2xl object-cover transition duration-300 ease-in-out  hover:scale-105"
              sizes="100vw"
              quality={100}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
