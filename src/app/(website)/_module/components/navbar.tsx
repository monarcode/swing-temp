import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[100px] flex items-center">
      <div className="flex items-center justify-between container">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full size-[50px] shadow-2xl shadow-neutral-200"
          />
        </Link>

        <div className="space-x-10 hidden lg:flex">
          <Link href="/docs" className="uppercase font-semibold">
            our work
          </Link>
          <Link href="/docs" className="uppercase font-semibold">
            what we do
          </Link>
          <Link href="/docs" className="uppercase font-semibold">
            book a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
