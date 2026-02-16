import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-card border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground items-center">
        &copy; {new Date().getFullYear()} Fasika.co All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
