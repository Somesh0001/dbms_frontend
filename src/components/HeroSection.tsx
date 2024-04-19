import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Retailer &apos; s Data Dynamics
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Welcome to our DBMS project focused on modeling a retailer database!
          In this project, we embark on a journey to design and implement a
          comprehensive database system tailored to the unique needs of
          retailers.
        </p>
        <div className="mt-4">
          <Link href={"/queries"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Enter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
