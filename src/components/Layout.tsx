import { Link, useLocation } from "react-router-dom";
import { Leaf, Wind, Droplets } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Leaf },
    { path: "/activity1", label: "Activity 1", icon: Wind },
    { path: "/activity2", label: "Activity 2", icon: Droplets },
    { path: "/activity3", label: "Activity 3", icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Leaf className="h-6 w-6" />
            <span className="hidden sm:inline">Clean & Green Energy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 md:px-8 py-8">{children}</main>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 mt-16">
        <div className="container px-4 md:px-8 py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <Wind className="h-5 w-5 text-secondary" />
              <Droplets className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">Clean and Green Energy Portfolio © 2025</p>
              <p className="text-sm text-muted-foreground">SRM KTR | Department of DSBS</p>
            </div>
            <p className="text-xs text-muted-foreground">Powering the future with renewable energy</p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
