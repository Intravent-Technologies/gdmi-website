"use client";

import Link from "next/link";
import { sermons as staticSermons } from "@/data/sermons";
import { Play, ArrowRight } from "lucide-react";
import { useSermons } from "@/lib/use-data";

export function SermonSection() {
  const { data: wpSermons } = useSermons();
  const sermons = wpSermons.length > 0 ? wpSermons : staticSermons;
  const latestSermon = sermons[0];
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <img
              src={latestSermon.thumbnail || "/gdmi-logo.png"}
              alt={latestSermon.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]">
                <Play className="size-6 text-primary ml-0.5" />
              </div>
            </div>
          </div>
          <div className="max-w-lg">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
              Latest Sermon
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2">
              {latestSermon.title}
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              {latestSermon.date}
            </p>
            <p className="text-muted-foreground/80 mt-4 leading-relaxed">
              {latestSermon.excerpt}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={latestSermon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
              >
                <Play className="size-4" />
                Watch Now
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://youtube.com/@TheSetApartChurch"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-muted-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-muted hover:text-primary transition-all"
              >
                Watch More
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
