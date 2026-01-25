"use client";

import { useLocale, useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  MoveRight,
  MoveLeft,
} from "lucide-react";

const Steps = () => {
  const t = useTranslations("steps");
  const locale = useLocale();

  const steps = [
    {
      icon: ShoppingCart,
      number: 1,
      titleKey: "step1_title",
      descKey: "step1_desc",
    },
    {
      icon: CreditCard,
      number: 2,
      titleKey: "step2_title",
      descKey: "step2_desc",
    },
    {
      icon: Truck,
      number: 3,
      titleKey: "step3_title",
      descKey: "step3_desc",
    },
  ];

  return (
    <section className="section-container bg-muted/30">
      <FadeInMotion>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-subtitle">{t("description")}</p>
      </FadeInMotion>

      <div className="relative mt-16 max-w-6xl mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <SlideInMotion
                key={index}
                direction="up"
                delay={0.2 * (index + 1)}>
                <div className="relative group">
                  {/* Step Number Badge */}
                  <div className="flex flex-col items-center">
                    {/* Animated Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                        <step.icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shadow-md z-20">
                        {step.number}
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">
                      {t(step.titleKey as any)}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {t(step.descKey as any)}
                    </p>
                  </div>

                  {/* Arrow Connector - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-8 -end-12 items-center justify-center z-0">
                      {locale == "en" ? (
                        <MoveRight className="w-8 h-8 text-primary animate-pulse" />
                      ) : (
                        <MoveLeft className="w-8 h-8 text-primary animate-pulse" />
                      )}
                    </div>
                  )}
                </div>
              </SlideInMotion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
