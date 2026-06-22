import Image from "next/image";
import Link from "next/link";

export default function BrandIcon() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5">
      <Image
        src="/BrandLogo.svg"
        alt="PlayerNation"
        width={120}
        height={120}
        className="h-11 w-auto sm:h-12"
        priority
      />
    </Link>
  );
}
