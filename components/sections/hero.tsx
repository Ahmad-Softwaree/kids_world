"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="section-container relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="blob-primary w-96 h-96 -top-20 -left-20 animate-pulse" />
      <div className="blob-secondary w-80 h-80 top-40 -right-40 animate-pulse delay-500" />
      <div className="blob-accent w-72 h-72 -bottom-20 left-1/2 animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
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
          <Link target="_blank" href="https://shop.yarimndallan.com">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 gap-3">
              <ExternalLink className="h-6 w-6" />
              {t("cta_button")}
            </Button>
          </Link>
        </SlideInMotion>
      </div>
    </section>
  );
};

export default Hero;