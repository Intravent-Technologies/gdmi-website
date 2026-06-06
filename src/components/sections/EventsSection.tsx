"use client";

import Link from "next/link";
import { EventCard } from "@/components/common/EventCard";
import { events as staticEvents } from "@/data/events";
import { ArrowRight } from "lucide-react";
import { useEvents } from "@/lib/use-data";

export function EventsSection() {
  const { data: wpEvents } = useEvents();
  const upcoming = (wpEvents.length > 0 ? wpEvents : staticEvents).filter((e) => e.status === "upcoming");
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
              Gatherings
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2">
              Events Calendar
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm">
              Mark your calendar for upcoming prophetic conferences, crusades, and outreaches.
            </p>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors whitespace-nowrap"
          >
            View Full Calendar
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
