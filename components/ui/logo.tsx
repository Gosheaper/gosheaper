import Link from "next/link";
import Image from "next/image";
import GosheaperLogo from "@/public/images/Gosheaper-Logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Gosheaper">
      <Image
        src={GosheaperLogo}
        alt="Gosheaper Logo"
        width={120}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
