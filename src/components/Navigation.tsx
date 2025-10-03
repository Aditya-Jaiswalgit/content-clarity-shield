import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/detection", label: "Detection" },
    { path: "/attribution", label: "Attribution" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/compliance", label: "Compliance" },
  ];

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-xl font-semibold">Pluto</span>
        </Link>

        <div className="flex gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
