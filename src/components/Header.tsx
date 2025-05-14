
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-md dark:bg-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gradient">MyPortfolio</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm text-white/80 hover:text-green-500 transition-colors dark:text-black/80 dark:hover:text-green-600"
            >
              {item.name}
            </a>
          ))}
          
          <ThemeToggle />
          
          {user ? (
            <div className="flex items-center gap-3">
              <Link 
                to="/dashboard"
                className="text-sm text-white/80 hover:text-green-500 transition-colors dark:text-black/80 dark:hover:text-green-600"
              >
                Dashboard
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => signOut()}
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-sm py-1 h-auto"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link 
              to="/auth"
              className="text-sm text-white/80 hover:text-green-500 transition-colors dark:text-black/80 dark:hover:text-green-600"
            >
              Sign In
            </Link>
          )}
        </nav>
        
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            className="text-white dark:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800 p-4 dark:bg-white/90 dark:border-gray-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm text-white/80 hover:text-green-500 transition-colors py-2 dark:text-black/80 dark:hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {user ? (
              <>
                <Link 
                  to="/dashboard"
                  className="text-sm text-white/80 hover:text-green-500 transition-colors py-2 dark:text-black/80 dark:hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="border-green-500 text-green-500 hover:bg-green-500/10 text-sm py-1 h-auto"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link 
                to="/auth"
                className="text-sm text-white/80 hover:text-green-500 transition-colors py-2 dark:text-black/80 dark:hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
