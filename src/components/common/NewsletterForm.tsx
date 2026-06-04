"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success("Subscribed! Check your email for confirmation.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 px-5 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-gold/50 focus:ring-gold/20"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 bg-gold text-primary hover:bg-gold-light font-semibold px-6 rounded-xl shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
      >
        {loading ? (
          "Subscribing..."
        ) : (
          <>
            Subscribe <Send className="size-4 ml-1" />
          </>
        )}
      </Button>
    </form>
  );
}
