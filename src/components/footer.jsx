import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white py-12 text-sm text-gray-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="#services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="#contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-blue-600">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-blue-600">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
