import { useState } from "react";
// import { Home, User, FolderKanban, Mail, Menu, X } from "lucide-react";

// const links = [
//   { label: "Home", icon: Home, href: "#" },
//   { label: "About", icon: User, href: "#" },
//   { label: "Projects", icon: FolderKanban, href: "#" },
//   { label: "Contact", icon: Mail, href: "#" },
// ];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);   

  return (
    <div
      className={`flex h-screen w-full max-w-90 bg-gray-500 flex-col absolute z-100 transition-all duration-300 ${
        isOpen ? "" : ""
      }`}
    >
      
    </div>
  );
};

export default Sidebar;