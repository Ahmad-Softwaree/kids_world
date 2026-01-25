"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Apple, Play } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="section-container relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="blob bg-primary w-96 h-96 -top-20 -left-20 animate-pulse" />
      <div className="blob bg-secondary w-80 h-80 top-40 -right-40 animate-pulse delay-500" />
      <div className="blob bg-accent w-72 h-72 -bottom-20 left-1/2 animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Shopify Badge */}
        <SlideInMotion direction="down" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border mb-6 hover:shadow-lg transition-all duration-300">
            <div className="relative w-6 h-6 animate-pulse">
              <Image
                src="/shopify.png"
                alt="Shopify Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {t("shopify_badge")} <span className="english_font">Shopify</span>
            </span>
          </div>
        </SlideInMotion>

        <FadeInMotion>
          <h1 className="section-title text-4xl md:text-6xl lg:text-7xl">
            {t("title")}
            <span className="block gradient-text mt-2">{t("subtitle")}</span>
          </h1>
        </FadeInMotion>

        <SlideInMotion direction="up" delay={0.2}>
          <p className="section-subtitle text-xl md:text-2xl max-w-3xl">
            {t("description")}
          </p>
        </SlideInMotion>

        <SlideInMotion direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link target="_blank" href="https://shop.yarimndalan.com">
              <Button size="lg" className="btn-primary text-lg px-8 py-6 gap-3">
                <ExternalLink className="h-6 w-6" />
                {t("cta_button")}
              </Button>
            </Link>
          </div>
        </SlideInMotion>

        {/* App Download Buttons */}
        <SlideInMotion direction="up" delay={0.6}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              {t("download_app")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#" className="group">
                <div className="flex items-center gap-3 px-6 py-3 bg-card border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Apple className="h-7 w-7 text-foreground" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">
                      {t("download_on")}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {t("app_store")}
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex items-center gap-3 px-6 py-3 bg-card border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Play className="h-7 w-7 text-foreground fill-foreground" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">
                      {t("download_on")}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {t("play_store")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </SlideInMotion>
      </div>
    </section>
  );
};

export default Hero;
