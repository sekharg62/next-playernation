import Image from "next/image";
import Link from "next/link";

export default function BrandIcon() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image src="/BrandLogo.svg" alt="Player Nation" width={100} height={100} />
      
    </Link>
  );
}
