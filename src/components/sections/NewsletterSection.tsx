import { NewsletterForm } from "@/components/common/NewsletterForm";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-20 sm:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
          <Mail className="size-6 text-gold" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Stay Connected
        </h2>
        <p className="text-white/40 mt-3 text-sm max-w-md mx-auto leading-relaxed">
          Receive prophetic articles, event updates, and ministry news directly in your inbox. No spam, just the word.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
