import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SecNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">
          MyLogo
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 absolute md:relative bg-blue-600 w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-transform transform ${
            isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          }`}
        >
          <li>
            <a href="#" className="text-white block py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white block py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white block py-2 px-4">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white block py-2 px-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
