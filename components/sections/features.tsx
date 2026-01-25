"use client";

import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
import { Card } from "@/components/ui/card";
import {
  Grid3x3,
  CreditCard,
  Truck,
  Languages,
  RefreshCw,
  Share2,
} from "lucide-react";

const Features = () => {
  const t = useTranslations("features");

  const features = [
    {
      icon: Grid3x3,
      titleKey: "categories_title",
      descKey: "categories_desc",
    },
    {
      icon: CreditCard,
      titleKey: "payment_title",
      descKey: "payment_desc",
    },
    {
      icon: Truck,
      titleKey: "shipping_title",
      descKey: "shipping_desc",
    },
    {
      icon: Languages,
      titleKey: "languages_title",
      descKey: "languages_desc",
    },
    {
      icon: RefreshCw,
      titleKey: "refund_title",
      descKey: "refund_desc",
    },
    {
      icon: Share2,
      titleKey: "social_title",
      descKey: "social_desc",
    },
  ];

  return (
    <section className="section-container">
      <FadeInMotion>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-subtitle">{t("description")}</p>
      </FadeInMotion>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <SlideInMotion key={index} direction="up" delay={0.1 * (index + 1)}>
            <Card className="feature-card">
              <feature.icon className="feature-icon" />
              <h3 className="feature-title">{t(feature.titleKey as any)}</h3>
              <p className="feature-description">{t(feature.descKey as any)}</p>
            </Card>
          </SlideInMotion>
        ))}
      </div>
    </section>
  );
};

export default Features;