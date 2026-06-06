"use client";

import { useState, useMemo } from "react";
import { EventCard } from "@/components/common/EventCard";
import { events as staticEvents } from "@/data/events";
import { useEvents } from "@/lib/use-data";

const filters = ["All", "Upcoming", "Past"] as const;

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const { data: wpEvents } = useEvents();
  const items = wpEvents.length > 0 ? wpEvents : staticEvents;

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? items
        : items.filter((e) => e.status === activeFilter.toLowerCase()),
    [activeFilter, items]
  );

  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Gatherings
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Events Calendar
          </h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Gathering the set apart ones for prophetic encounters, kingdom advancement, and transformative experiences.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-12 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
                    : "bg-card text-muted-foreground hover:text-primary border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No events found.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
