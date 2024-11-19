import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sky-800 text-white p-6 flex justify-between">
      <h1 className="text-lg font-bold">Sapphire Fragrances</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
