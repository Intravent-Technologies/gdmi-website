"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Send, ExternalLink, CirclePlay, Headphones, Clock } from "lucide-react";
import { sermons as staticSermons } from "@/data/sermons";
import { useSermons } from "@/lib/use-data";

export default function MediaPage() {
  const { data: wpSermons } = useSermons();
  const sermons = wpSermons.length > 0 ? wpSermons : staticSermons;

  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Media</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Watch & Listen</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Access our library of prophetic sermons and audio messages.
          </p>
        </div>
      </section>

      <section className="pt-4 pb-14 sm:pb-20 bg-background">
        <Tabs defaultValue="watch" className="flex flex-col items-center">
          <div className="mb-6 sm:mb-8 px-4 sm:px-6">
            <TabsList className="bg-muted p-0.5 rounded-lg border border-border inline-flex gap-0.5">
              <TabsTrigger value="watch" className="text-xs rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground px-3 py-1.5 shrink-0">
                <Play className="size-3.5 mr-1" />
                Watch
              </TabsTrigger>
              <TabsTrigger value="listen" className="text-xs rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground px-3 py-1.5 shrink-0">
                <Headphones className="size-3.5 mr-1" />
                Listen
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="watch" className="w-full space-y-10 sm:space-y-12 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-card rounded-2xl p-6 sm:p-12 overflow-hidden border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[80px]" />
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 sm:mb-5 border border-border">
                    <CirclePlay className="size-6 sm:size-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold text-primary text-center">Join Us Live</h2>
                  <p className="text-muted-foreground mt-2 text-xs sm:text-sm max-w-md text-center leading-relaxed">
                    Watch our services live and access the full library of prophetic messages on our YouTube channel.
                  </p>
                  <Link
                    href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://youtube.com/@TheSetApartChurch"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 sm:mt-6 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
                  >
                    <Play className="size-4 sm:size-5" />
                    Visit Our YouTube Channel
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Recent Sermons</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              {sermons.length === 0 ? (
                <div className="flex flex-col items-center py-16">
                  <CirclePlay className="size-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">No sermons available yet. Check back soon.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {sermons.map((sermon) => (
                    <a
                      key={sermon.id}
                      href={sermon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden bg-muted relative">
                        {sermon.thumbnail ? (
                          <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-border">
                            <CirclePlay className="size-10 text-muted-foreground/30" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold flex items-center justify-center shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]">
                            <Play className="size-5 sm:size-6 text-primary ml-0.5" />
                          </div>
                        </div>
                        {sermon.duration && (
                          <span className="absolute bottom-2 right-2 bg-primary/80 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                            <Clock className="size-3" />
                            {sermon.duration}
                          </span>
                        )}
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="font-semibold text-primary text-xs sm:text-sm leading-relaxed line-clamp-2">{sermon.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1.5">{sermon.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="listen" className="w-full space-y-10 sm:space-y-12 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-card rounded-2xl p-6 sm:p-12 overflow-hidden border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[80px]" />
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 sm:mb-5 border border-border">
                    <Headphones className="size-6 sm:size-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold text-primary text-center">Audio Messages on Telegram</h2>
                  <p className="text-muted-foreground mt-2 text-xs sm:text-sm max-w-md text-center leading-relaxed">
                    Access our full library of audio messages, teachings, and prophetic declarations on Telegram.
                  </p>
                  <Link
                    href={process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL || "https://t.me/gdmichannel"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 sm:mt-6 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
                  >
                    <Send className="size-4 sm:size-5" />
                    Join Our Telegram Channel
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              {sermons.length === 0 ? (
                <div className="flex flex-col items-center py-16">
                  <Headphones className="size-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">No audio messages available yet. Check back soon.</p>
                </div>
              ) : (
                sermons.map((sermon) => (
                  <a
                    key={sermon.id}
                    href={process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL || "https://t.me/gdmichannel"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border hover:shadow-[0_4px_20px_-8px_rgba(15,29,53,0.06)] hover:border-gold/20 transition-all group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border group-hover:bg-gold/10 group-hover:border-gold/20 transition-colors">
                      <Headphones className="size-3.5 sm:size-4 text-muted-foreground group-hover:text-gold transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-primary text-xs sm:text-sm truncate">{sermon.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{sermon.date}</p>
                    </div>
                    {sermon.duration && (
                      <span className="text-[10px] sm:text-xs text-muted-foreground shrink-0 hidden sm:inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {sermon.duration}
                      </span>
                    )}
                    <ExternalLink className="size-3.5 sm:size-4 text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
                  </a>
                ))
              )}
            </div>
            </TabsContent>
          </Tabs>
      </section>
    </>
  );
}
