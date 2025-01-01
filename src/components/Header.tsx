import Link from "next/link";
import {
    Sheet,
    SheetContent,
  
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import { RiMenu3Line } from "react-icons/ri";




export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Heading */}
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer"> Blog Website</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden sm:flex space-x-6">
            <Link href="./" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link
              href="/Blog"
              className="hover:text-blue-400 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/About"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu  */}
          <div className="sm:hidden">
           
             <Sheet>
  <SheetTrigger><RiMenu3Line className="text-white"/> </SheetTrigger>
  <SheetContent className="w-[200px] sm:w-[540px]">
  <ul className=" space-y-5">
              <li>
                <Link href="./" className="hover:text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-gray-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="hover:text-gray-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-gray-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
  </SheetContent>
</Sheet>
 
           
          </div>
        </div>
      </div>
    </header>
  );
}
