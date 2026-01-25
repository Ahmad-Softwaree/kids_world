"use client";

import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
import { Card } from "@/components/ui/card";
import { Heart, Target, Calendar } from "lucide-react";

const About = () => {
  const t = useTranslations("about");

  const highlights = [
    {
      icon: Calendar,
      titleKey: "founded_title",
      descKey: "founded_desc",
    },
    {
      icon: Target,
      titleKey: "mission_title",
      descKey: "mission_desc",
    },
    {
      icon: Heart,
      titleKey: "values_title",
      descKey: "values_desc",
    },
  ];

  return (
    <section className="section-container bg-muted/30">
      <FadeInMotion>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-subtitle">{t("description")}</p>
      </FadeInMotion>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {highlights.map((item, index) => (
          <SlideInMotion key={index} direction="up" delay={0.2 * (index + 1)}>
            <Card className="feature-card text-center">
              <item.icon className="feature-icon mx-auto" />
              <h3 className="feature-title">{t(item.titleKey as any)}</h3>
              <p className="feature-description">{t(item.descKey as any)}</p>
            </Card>
          </SlideInMotion>
        ))}
      </div>
    </section>
  );
};

export default About;
