import Link from "next/link";
import {urls} from "@/lib/constants";

export default function Header() {
  return (
    <header className="flex h-16 items-center px-4 shadow-md">
      <h1 className="text-2xl font-bold hover:underline">
        <Link href={urls.home}>News</Link>
      </h1>
    </header>
  );
}
