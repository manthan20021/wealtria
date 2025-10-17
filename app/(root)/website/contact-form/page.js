"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function InputGroupDemo() {
  // ✅ Use frontend env vars
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateIDOwner = process.env.NEXT_PUBLIC_TEMPLATE_OWNER;
  const templateIDUser = process.env.NEXT_PUBLIC_TEMPLATE_USER;
  const publicKey = process.env.NEXT_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Send email to Owner
      await emailjs.send(serviceID, templateIDOwner, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      // 2️⃣ Auto reply to User
      await emailjs.send(serviceID, templateIDUser, {
        to_name: formData.name,
        to_email: formData.email,
      }, publicKey);

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Email send failed:", error);
      alert("❌ Something went wrong. Try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="w-full min-h-screen flex items-center justify-center dark:bg-none bg-gradient-to-br from-[#e6d5ff] to-[#aa69f4] px-4 py-16"
    >
      <Card className="w-full max-w-[1200px] rounded-2xl border border-border/40 shadow-xl bg-white/90 dark:bg-white/10 backdrop-blur-md transition-colors duration-300">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Fill out the form and we&apos;ll get back to you soon.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={loading}
                  className={`py-2 rounded font-semibold text-white transition-colors ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#330778] hover:bg-[#220555]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
