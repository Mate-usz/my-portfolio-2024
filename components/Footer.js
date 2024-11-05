import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 space-x-4">
      <p>
        © 2024{" "}
        <Link href="/" className="hover:underline">
          mateuszrodz.com
        </Link>
      </p>
      <Socials />
    </footer>
  );
}
