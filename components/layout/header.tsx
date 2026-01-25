"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import { LangToggle } from "../lang-toggle";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { HeaderSlideMotion } from "../shared/animate";
import { ThemeToggle } from "../theme-toggle";

const Header = () => {
  const t = useTranslations("header");

  return (
    <HeaderSlideMotion className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-6">
        <Link
          href={`/`}
          className="flex flex-row justify-center items-center gap-2">
          <Logo />
          <h2 className="font-bold text-lg md:text-xl gradient-text">
            {t("shop_name")}
          </h2>
        </Link>

        <div className="flex items-center gap-2 ms-auto">
          <Link
            target="_blank"
            href="https://www.facebook.com/jihanynweymndalan">
            <Button
              variant="ghost"
              className="rounded-full shadow-none"
              size="icon"
              aria-label="Facebook">
              <Facebook className="h-5 w-5 text-primary hover:text-primary/80 transition-colors" />
            </Button>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/jihany_nwey_mndalan">
            <Button
              variant="ghost"
              className="rounded-full shadow-none"
              size="icon"
              aria-label="Instagram">
              <Instagram className="h-5 w-5 text-primary hover:text-primary/80 transition-colors" />
            </Button>
          </Link>
          <Link target="_blank" href="https://shop.yarimndalan.com">
            <Button
              variant="default"
              className="rounded-full shadow-none gap-2"
              size="sm">
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">{t("shop_link")}</span>
            </Button>
          </Link>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </HeaderSlideMotion>
  );
};

export default Header;
