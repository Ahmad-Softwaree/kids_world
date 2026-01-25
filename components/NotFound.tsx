"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const NotFoundComponent = () => {
  const t = useTranslations("not_found");
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      {/* Elegant Glow Effects */}
      <div className="blob bg-primary w-96 h-96 top-1/4 left-1/4 animate-pulse" />
      <div
        className="blob bg-accent w-80 h-80 bottom-1/4 right-1/4 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <div className="english_font z-50 text-9xl md:text-[12rem] font-bold gradient-text select-none">
            404
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center items-center pt-4">
          <Button size="lg" className="btn-primary gap-2" asChild>
            <Link href={`/${locale}`}>
              <Home className="h-5 w-5" />
              {t("home_button")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
