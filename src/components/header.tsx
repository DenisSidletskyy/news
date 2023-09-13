import Link from "next/link";
import {urls} from "@/lib/constants";

export default function Header() {
  return (
    <header className="h-16 flex items-center px-4 shadow-md">
      <h1 className="font-bold text-2xl hover:underline">
        <Link href={urls.home}>News</Link>
      </h1>
    </header>
  );
}
