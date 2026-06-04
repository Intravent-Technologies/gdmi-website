import Link from "next/link";
import { Event } from "@/data/events";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

interface EventCardProps {
  event: Event;
}

function parseCalendarDate(dateStr: string): {
  month: string;
  day: string;
  isRange: boolean;
} {
  const match = dateStr.match(/^([A-Za-z]+)\s+(\d+)(?:–(\d+))?/);
  if (match) {
    const month = match[1].slice(0, 3).toUpperCase();
    const day = match[3] ? `${match[2]}–${match[3]}` : match[2];
    return { month, day, isRange: !!match[3] };
  }
  const monthMatch = dateStr.match(/^([A-Za-z]+)\s+\d{4}$/);
  if (monthMatch) {
    return { month: monthMatch[1].slice(0, 3).toUpperCase(), day: "", isRange: false };
  }
  const justMonth = dateStr.match(/^([A-Za-z]+)$/);
  if (justMonth) {
    return { month: justMonth[1].slice(0, 3).toUpperCase(), day: "", isRange: false };
  }
  return { month: "", day: "", isRange: false };
}

export function parseEventMonth(dateStr: string): string {
  const match = dateStr.match(/^([A-Za-z]+)/);
  return match ? match[1].toUpperCase() : "";
}

export function EventCard({ event }: EventCardProps) {
  const { month, day, isRange } = parseCalendarDate(event.date);
  const hasTime = !!event.time;

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-gold/20 hover:shadow-[0_4px_20px_-8px_rgba(201,168,76,0.1)] transition-all duration-300"
    >
      <div className="relative flex flex-col items-center w-16 shrink-0 pt-0.5">
        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-primary text-white shadow-[0_2px_8px_-4px_rgba(15,29,53,0.2)]">
          {month ? (
            <>
              <span className="text-[10px] font-semibold leading-none tracking-[0.12em] uppercase text-gold">
                {month}
              </span>
              <span className="text-xl font-bold leading-none mt-0.5">
                {day || "—"}
              </span>
            </>
          ) : (
            <span className="text-[9px] font-semibold leading-tight text-center px-0.5 uppercase tracking-tight text-white/80">
              {event.date}
            </span>
          )}
        </div>
        {isRange && (
          <span className="mt-1 text-[10px] text-muted-foreground font-medium">
            Multi-day
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0 pt-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-bold text-primary text-base leading-snug group-hover:text-gold transition-colors">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0" />
                {event.location}
              </span>
              {hasTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 shrink-0" />
                  {event.time}
                </span>
              )}
            </div>
          </div>
          <span className="shrink-0 px-2.5 py-1 rounded-lg bg-muted text-[11px] font-semibold text-muted-foreground">
            {event.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground/70 mt-2 line-clamp-1 leading-relaxed">
          {event.description}
        </p>
        <div className="mt-2.5 flex items-center gap-1 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
          View details
          <ArrowUpRight className="size-3" />
        </div>
      </div>
    </Link>
  );
}
