"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Send, ExternalLink, CirclePlay, Headphones, ImagePlay } from "lucide-react";
import { sermons } from "@/data/sermons";

export default function MediaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=600&q=80", title: "Crusade Outreach" },
    { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80", title: "Prophetic Conference" },
    { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80", title: "Conference Gathering" },
    { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80", title: "Community Outreach" },
    { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04890?auto=format&fit=crop&w=600&q=80", title: "Ladies Conference" },
    { src: "https://images.unsplash.com/photo-1559027615-c1dab2f6c9c7?auto=format&fit=crop&w=600&q=80", title: "Campus Ministry" },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80", title: "Summit Session" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80", title: "Conference Stage" },
    { src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80", title: "Worship Session" },
    { src: "https://images.unsplash.com/photo-1504257432389-52343af06ae5?auto=format&fit=crop&w=600&q=80", title: "Ministry Work" },
    { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80", title: "Food Outreach" },
    { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80", title: "Community Impact" },
  ];

  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Media</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Watch, Listen & See</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Access our library of prophetic sermons, audio messages, and ministry photo gallery.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="watch" className="w-full">
            <div className="flex justify-center mb-10 sm:mb-12">
              <TabsList className="bg-muted p-1 rounded-xl border border-border w-full sm:w-auto">
                <TabsTrigger value="watch" className="text-xs sm:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground flex-1 sm:flex-none px-2 sm:px-4">
                  <Play className="size-3.5 sm:size-4 mr-1 sm:mr-2" />
                  Watch
                </TabsTrigger>
                <TabsTrigger value="listen" className="text-xs sm:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground flex-1 sm:flex-none px-2 sm:px-4">
                  <Headphones className="size-3.5 sm:size-4 mr-1 sm:mr-2" />
                  Listen
                </TabsTrigger>
                <TabsTrigger value="gallery" className="text-xs sm:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground flex-1 sm:flex-none px-2 sm:px-4">
                  <ImagePlay className="size-3.5 sm:size-4 mr-1 sm:mr-2" />
                  Gallery
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="watch" className="space-y-10 sm:space-y-12">
              <div className="bg-card rounded-2xl p-6 sm:p-12 text-center relative overflow-hidden border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-5 border border-border">
                    <CirclePlay className="size-6 sm:size-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold text-primary">Join Us Live</h2>
                  <p className="text-muted-foreground mt-2 text-xs sm:text-sm max-w-md mx-auto">Watch our services live and access the full library of prophetic messages on our YouTube channel.</p>
                  <Link
                    href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://youtube.com/@gdmichannel"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 sm:mt-6 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
                  >
                    <Play className="size-4 sm:size-5" />
                    Visit Our YouTube Channel
                  </Link>
                </div>
              </div>

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
                      <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold flex items-center justify-center shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]">
                          <Play className="size-5 sm:size-6 text-primary ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-semibold text-primary text-xs sm:text-sm leading-relaxed">{sermon.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1.5">{sermon.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="listen" className="space-y-10 sm:space-y-12">
              <div className="bg-card rounded-2xl p-6 sm:p-12 text-center relative overflow-hidden border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-5 border border-border">
                    <Headphones className="size-6 sm:size-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold text-primary">Audio Messages on Telegram</h2>
                  <p className="text-muted-foreground mt-2 text-xs sm:text-sm max-w-md mx-auto">Access our full library of audio messages, teachings, and prophetic declarations on Telegram.</p>
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

              <div className="space-y-3 max-w-2xl mx-auto">
                {sermons.map((sermon) => (
                  <a
                    key={sermon.id}
                    href={process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL || "https://t.me/gdmichannel"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border hover:shadow-[0_4px_20px_-8px_rgba(15,29,53,0.06)] transition-all group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border">
                      <Headphones className="size-3.5 sm:size-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-primary text-xs sm:text-sm truncate">{sermon.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{sermon.date}</p>
                    </div>
                    <ExternalLink className="size-3.5 sm:size-4 text-muted-foreground shrink-0" />
                  </a>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-8 sm:space-y-10">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">Ministry Photo Gallery</h2>
                <p className="text-muted-foreground text-xs sm:text-sm mt-2">Moments captured from our conferences, crusades, and outreaches</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                    className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-muted border border-border hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.08)] transition-all"
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-3 sm:p-4" onClick={() => setLightboxOpen(false)}>
          <button className="fixed top-4 sm:top-5 right-4 sm:right-5 min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all text-lg" onClick={() => setLightboxOpen(false)}>✕</button>
          <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].title} className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-xl sm:rounded-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
