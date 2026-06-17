"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, CheckCircle2, Send } from "lucide-react";

const interestAreas = [
  { value: "conference", label: "Conference Team", desc: "Help organize prophetic conferences and events" },
  { value: "campus", label: "Campus Outreach", desc: "Join evangelism and outreach on campuses" },
  { value: "media", label: "Media & Photography", desc: "Photography, videography, and content creation" },
  { value: "prayer", label: "Prayer Team", desc: "Intercessory prayer and prophetic ministry support" },
  { value: "admin", label: "Administration", desc: "Office admin, data entry, and coordination" },
  { value: "technical", label: "Technical / Sound", desc: "Sound engineering, lighting, and stage setup" },
  { value: "ushering", label: "Ushering & Protocol", desc: "Guest reception, seating, and protocol" },
  { value: "kids", label: "Children's Ministry", desc: "Teaching and caring for children" },
  { value: "welfare", label: "Welfare & Outreach", desc: "Community outreach and charity programs" },
  { value: "transport", label: "Transport & Logistics", desc: "Transportation and logistics coordination" },
];

export function VolunteerForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    availability: "weekends",
    experience: "",
    motivation: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleArea(value: string) {
    setSelectedAreas((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    if (selectedAreas.length === 0) {
      toast.error("Please select at least one area of interest.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-10 sm:p-14 text-center space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto border border-green-200">
          <CheckCircle2 className="size-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary">Application Received!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-primary">{form.fullName}</span>! Your volunteer application has been submitted successfully.
        </p>
        <p className="text-muted-foreground text-xs max-w-sm mx-auto">
          Our team will review your application and reach out to you within 48 hours with details about the next steps.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-muted rounded-xl"
            onClick={() => {
              setSubmitted(false);
              setSelectedAreas([]);
              setForm({ fullName: "", email: "", phone: "", address: "", availability: "weekends", experience: "", motivation: "" });
            }}
          >
            Submit Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 mb-8">
        <span className="flex items-center justify-center size-12 rounded-2xl bg-gold/10 text-gold">
          <Users className="size-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-primary">Volunteer Application</h3>
          <p className="text-xs text-muted-foreground">Join the team and make a difference</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name *</label>
            <Input
              placeholder="John Doe"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              required
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email *</label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone *</label>
            <Input
              type="tel"
              placeholder="+234 800 000 0000"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Address</label>
            <Input
              placeholder="City, State"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Availability</label>
          <Select value={form.availability} onValueChange={(v) => v && update("availability", v)}>
            <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border text-foreground">
              <SelectItem value="weekdays">Weekdays</SelectItem>
              <SelectItem value="weekends">Weekends</SelectItem>
              <SelectItem value="both">Both Weekdays & Weekends</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
              <SelectItem value="events">During Events Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-3 block">
            Areas of Interest * (select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestAreas.map((area) => (
              <button
                key={area.value}
                type="button"
                onClick={() => toggleArea(area.value)}
                className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                  selectedAreas.includes(area.value)
                    ? "bg-primary/5 border-primary/30"
                    : "bg-transparent border-border hover:border-muted-foreground/30"
                }`}
              >
                <span className={`size-4 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                  selectedAreas.includes(area.value)
                    ? "bg-primary border-primary"
                    : "border-muted-foreground/40"
                }`}>
                  {selectedAreas.includes(area.value) && (
                    <CheckCircle2 className="size-3 text-white" />
                  )}
                </span>
                <div>
                  <p className={`text-sm font-medium ${selectedAreas.includes(area.value) ? "text-primary" : "text-foreground"}`}>
                    {area.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{area.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Relevant Skills & Experience
          </label>
          <Textarea
            placeholder="Tell us about any experience, training, or skills relevant to your selected areas..."
            value={form.experience}
            onChange={(e) => update("experience", e.target.value)}
            rows={3}
            className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Why do you want to volunteer with GDMI?
          </label>
          <Textarea
            placeholder="Share your heart and motivation for serving with us..."
            value={form.motivation}
            onChange={(e) => update("motivation", e.target.value)}
            rows={3}
            className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-navy-light h-12 rounded-xl font-bold"
        >
          {loading ? (
            "Submitting..."
          ) : (
            <>
              Submit Application <Send className="size-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
