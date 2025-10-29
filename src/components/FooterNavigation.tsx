import { NavLink } from "react-router-dom";
import { Search, Heart, ChefHat, BookOpen, Calendar, ShoppingCart } from "lucide-react";

const FooterNavigation = () => {
  const navItems = [
    { name: "Explorar", icon: Search, path: "/explorar" },
    { name: "Favoritos", icon: Heart, path: "/favoritos" },
    { name: "Meal Prep", icon: ChefHat, path: "/meal-prep" },
    { name: "Guia", icon: BookOpen, path: "/guia" },
    { name: "Plano Semanal", icon: Calendar, path: "/plano-semanal" },
    { name: "Compras", icon: ShoppingCart, path: "/lista-compras" }, // Adicionada a nova aba
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-eatclean-white shadow-lg flex justify-around items-center h-16 border-t border-eatclean-light-gray px-2"> {/* Adicionado px-2 para um pouco mais de padding horizontal */}
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
          <item.icon size={18} fill="currentColor" /> {/* Ícone ligeiramente menor para caber 6 abas */}
          <span className="text-[0.65rem] leading-none">{item.name}</span> {/* Texto ainda menor e sem altura de linha para otimizar espaço */}
        </NavLink>
      ))}
    </footer>
  );
};

export default FooterNavigation;