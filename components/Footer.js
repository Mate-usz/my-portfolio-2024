import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 space-x-4">
      <p>
        © 2024{" "}
        <a href="/" className="hover:underline">
          mateuszrodz.com
        </a>
      </p>
      <Socials />
    </footer>
  );
}