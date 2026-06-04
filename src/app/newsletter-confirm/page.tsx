import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscribed | GDMI Newsletter",
};

export default function NewsletterConfirmPage() {
  return (
    <section className="bg-primary min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
          <CheckCircle className="size-10 text-gold" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">You&apos;re Subscribed!</h1>
        <p className="text-white/40 mt-4 text-sm leading-relaxed">
          Thank you for joining the GDMI mailing list. You&apos;ll now receive prophetic articles, event updates, and ministry news directly in your inbox.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 bg-gold text-primary px-8 py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
