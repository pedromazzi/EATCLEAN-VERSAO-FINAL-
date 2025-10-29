import { Leaf, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eatclean-white shadow-sm p-4 flex justify-between items-center h-16">
      <Link to="/explorar" className="flex items-center gap-2">
        <Leaf className="text-eatclean-primary-green" size={24} />
        <h1 className="text-2xl font-bold text-eatclean-primary-green">EatClean</h1>
      </Link>
      <User className="text-eatclean-gray-text" size={24} />
    </header>
  );
};

export default Header;