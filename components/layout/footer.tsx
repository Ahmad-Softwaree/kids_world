"use client";

import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import { Logo } from "./logo";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Android, Apple } from "iconsax-reactjs";
const Footer = () => {
  const t = useTranslations("footer");
  const tHero = useTranslations("hero");

  return (
    <footer className="mt-20 border-t">
      <div>
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo and Shop Name */}
          <div className="flex flex-row justify-center items-center gap-2 mb-6">
            <Logo />
            <h2 className="font-bold text-xl gradient-text">
              {t("shop_name")}
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-center max-w-md mb-6">
            {t("description")}
          </p>

          {/* Shop Link Button */}
          <Link target="_blank" href="https://shop.yarimndalan.com">
            <Button className="btn-primary gap-2 mb-8">
              <ExternalLink className="h-5 w-5" />
              {t("visit_shop")}
            </Button>
          </Link>

          {/* App Download Section */}
          <div className="mb-8 w-full max-w-md">
            <p className="text-sm text-muted-foreground font-medium text-center mb-4">
              {t("download_app")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#" className="group">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-card border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Apple className="h-6 w-6 text-foreground" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground ">
                      {tHero("download_on")}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {tHero("app_store")}
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-card border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Android className="h-6 w-6 text-foreground fill-foreground" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground ">
                      {tHero("download_on")}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {tHero("play_store")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.facebook.com/jihanynweymndalan"
              className="p-3 rounded-full border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Facebook className="h-6 w-6 text-primary" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/jihany_nwey_mndalan"
              className="p-3 rounded-full border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Instagram className="h-6 w-6 text-primary" />
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
            <span>
              {t("email")}:{" "}
              <span className="english_font">dr.ahmad.salah.54@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
