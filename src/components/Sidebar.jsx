import { useState } from "react";
import { Link } from "react-router-dom";
// import { Home, User, FolderKanban, Mail, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);   

  return (
    <div
      className={`fixed top-0 left-0 flex h-screen w-full max-w-90 bg-gray-500 flex-col absolute z-[100] transition-all duration-300 ${
        isOpen ? "" : ""
      }`}
    >
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="text-white underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;