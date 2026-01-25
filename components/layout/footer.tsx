"use client";

import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import { Logo } from "./logo";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="mt-20 border-t">
      <div>
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo and Shop Name */}
          <div className="flex flex-row justify-center items-center gap-2 mb-6">
            <Logo />
            <h2 className="font-bold text-xl gradient-text">{t("shop_name")}</h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-center max-w-md mb-6">
            {t("description")}
          </p>

          {/* Shop Link Button */}
          <Link target="_blank" href="https://shop.yarimndallan.com">
            <Button className="btn-primary gap-2 mb-8">
              <ExternalLink className="h-5 w-5" />
              {t("visit_shop")}
            </Button>
          </Link>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.facebook.com/yarimndallan"
              className="group">
              <div className="p-3 rounded-full border hover:border-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <Facebook className="h-6 w-6 text-primary" />
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/yarimndallan"
              className="group">
              <div className="p-3 rounded-full border hover:border-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
            </Link>
          </div>
        </div>

        <Separator />

        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm">
            {t("copyright", {
              year: new Date().getFullYear(),
            })}
          </span>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{t("email")}: info@yarimndallan.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
