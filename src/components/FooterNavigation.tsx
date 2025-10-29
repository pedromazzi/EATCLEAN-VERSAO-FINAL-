import { NavLink } from "react-router-dom";
import { Search, Heart, ChefHat, BookOpen, Calendar } from "lucide-react";

const FooterNavigation = () => {
  const navItems = [
    { name: "Explorar", icon: Search, path: "/explorar" },
    { name: "Favoritos", icon: Heart, path: "/favoritos" },
    { name: "Meal Prep", icon: ChefHat, path: "/meal-prep" },
    { name: "Guia", icon: BookOpen, path: "/guia" },
    { name: "Plano Semanal", icon: Calendar, path: "/plano-semanal" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-eatclean-white shadow-lg flex justify-around items-center h-16 border-t border-eatclean-light-gray">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center text-sm gap-1 transition-colors duration-200 ${
              isActive ? "text-eatclean-orange-highlight" : "text-eatclean-gray-inactive"
            }`
          }
        >
          <item.icon size={20} fill="currentColor" />
          <span className="text-xs">{item.name}</span>
        </NavLink>
      ))}
    </footer>
  );
};

export default FooterNavigation;