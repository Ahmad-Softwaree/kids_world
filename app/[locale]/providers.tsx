import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      storageKey="portfolio-theme"
      enableSystem>
      {children}
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
};

export default Providers;
