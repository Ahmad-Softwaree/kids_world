"use client";

import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
import { Card } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Truck, ArrowRight } from "lucide-react";

const Steps = () => {
  const t = useTranslations("steps");

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

      <div className="relative mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <SlideInMotion direction="up" delay={0.2 * (index + 1)}>
                <Card className="step-card text-center h-full">
                  <div className="step-number mx-auto">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(step.titleKey as any)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(step.descKey as any)}
                  </p>
                </Card>
              </SlideInMotion>

              {/* Arrow between steps - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
