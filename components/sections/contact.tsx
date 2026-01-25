"use client";

import { useTranslations } from "next-intl";
import { FadeInMotion, SlideInMotion } from "../shared/animate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const t = useTranslations("contact");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(t("success_title"), {
          description: t("success_message"),
        });
        setFormData({ email: "", message: "" });
      } else {
        toast.error(t("error_title"), {
          description: data.error || t("error_message"),
        });
      }
    } catch (error) {
      toast.error(t("error_title"), {
        description: t("error_message"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-container">
      <FadeInMotion>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-subtitle">{t("description")}</p>
      </FadeInMotion>

      <SlideInMotion direction="up" delay={0.2}>
        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="form-label">
                {t("email_label")}
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t("email_placeholder")}
                className="form-input"
              />
            </div>

            <div>
              <Label htmlFor="message" className="form-label">
                {t("message_label")}
              </Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={t("message_placeholder")}
                rows={6}
                className="form-input"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="btn-primary w-full gap-2">
              {loading ? (
                <>{t("sending")}</>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  {t("send_button")}
                </>
              )}
            </Button>
          </form>
        </Card>
      </SlideInMotion>
    </section>
  );
};

export default Contact;
