import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events as staticEvents } from "@/data/events";
import { getGoogleCalendarEvents } from "@/lib/google-calendar";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

async function getEvent(slug: string) {
  const gcalEvents = await getGoogleCalendarEvents();
  const items = gcalEvents.length > 0 ? gcalEvents : staticEvents;
  return items.find((e) => e.slug === slug) ?? null;
}

export async function generateStaticParams() {
  const gcalEvents = await getGoogleCalendarEvents();
  const items = gcalEvents.length > 0 ? gcalEvents : staticEvents;
  return items.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return {};
  return {
    title: `${event.title} | GDMI Events`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-gold text-sm transition-colors"
          >
            <ArrowLeft className="size-4" />
            All Events
          </Link>
          <div className="mt-6">
            <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-gold text-xs font-semibold mb-3 border border-white/20">
              {event.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {event.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-5 mt-6 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="size-4 text-gold" /> {event.date}
            </span>
            {event.time && (
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-gold" /> {event.time}
              </span>
            )}
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" /> {event.location}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {event.image && (
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border mb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="max-w-none">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {event.fullDescription || event.description}
            </p>
          </div>

          {event.schedule && event.schedule.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-primary mb-5">Event Schedule</h2>
              <div className="space-y-2">
                {event.schedule.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                  >
                    <span className="text-gold font-semibold text-sm w-24 shrink-0">
                      {item.time}
                    </span>
                    <span className="h-4 w-px bg-border" />
                    <span className="text-sm text-muted-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 text-center p-8 sm:p-10 bg-muted border border-border rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />
            <div className="relative">
              <p className="text-primary font-semibold text-sm mb-2">Want to attend this event?</p>
              <p className="text-muted-foreground text-xs mb-6">Register your interest and we&apos;ll keep you updated.</p>
              <Link
                href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://youtube.com/@gdmichannel"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
              >
                Register Your Interest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
