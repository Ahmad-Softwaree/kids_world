"use client";

import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
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

      <div className="mt-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

          {highlights.map((item, index) => (
            <SlideInMotion key={index} direction="up" delay={0.2 * (index + 1)}>
              <div className="relative text-center group">
                {/* Icon Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(item.titleKey as any)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(item.descKey as any)}
                </p>
              </div>
            </SlideInMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
