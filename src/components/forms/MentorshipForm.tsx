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
import { GraduationCap, CheckCircle2, Send } from "lucide-react";

export function MentorshipForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    ageRange: "",
    maritalStatus: "",
    churchName: "",
    churchLocation: "",
    churchRole: "",
    bornAgain: "",
    willingness: "",
    previousMentorship: "",
    motivation: "",
    heardFrom: "",
    prayerRequest: "",
    scholarship: "no",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      toast.error("Please fill in your name and email.");
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
          Thank you, <span className="font-semibold text-primary">{form.fullName}</span>! Your application for the{" "}
          <span className="font-semibold text-gold">Prophetic Mentorship Program</span>{" "}
          has been received successfully.
        </p>
        <p className="text-muted-foreground text-xs max-w-sm mx-auto">
          Our team will review your application and contact you within 3–5 business days with the next steps.
        </p>
        <div className="flex items-center justify-center gap-3 pt-4">
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-muted rounded-xl"
            onClick={() => {
              setSubmitted(false);
              setForm({
                fullName: "", email: "", phone: "", ageRange: "", maritalStatus: "",
                churchName: "", churchLocation: "", churchRole: "", bornAgain: "",
                willingness: "", previousMentorship: "", motivation: "",
                heardFrom: "", prayerRequest: "", scholarship: "no",
              });
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
          <GraduationCap className="size-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-primary">Mentorship Application</h3>
          <p className="text-xs text-muted-foreground">Prophetic Mentorship Program</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-border pb-2">
          Personal Information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name *</label>
            <Input
              placeholder="Your full name"
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
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
            <Input
              type="tel"
              placeholder="+234 800 000 0000"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Age Range</label>
            <Select value={form.ageRange} onValueChange={(v) => v && update("ageRange", v)}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border text-foreground">
                <SelectItem value="18-25">18 – 25</SelectItem>
                <SelectItem value="26-35">26 – 35</SelectItem>
                <SelectItem value="36-45">36 – 45</SelectItem>
                <SelectItem value="46+">46+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Marital Status</label>
            <Select value={form.maritalStatus} onValueChange={(v) => v && update("maritalStatus", v)}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border text-foreground">
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="engaged">Engaged</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-border pb-2 pt-2">
          Church Background
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Church Name</label>
            <Input
              placeholder="e.g. RCCG, Winners Chapel, etc."
              value={form.churchName}
              onChange={(e) => update("churchName", e.target.value)}
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Church Location (City, State)</label>
            <Input
              placeholder="e.g. Ibadan, Oyo State"
              value={form.churchLocation}
              onChange={(e) => update("churchLocation", e.target.value)}
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Role in Church</label>
            <Select value={form.churchRole} onValueChange={(v) => v && update("churchRole", v)}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border text-foreground">
                <SelectItem value="pastor">Pastor / Minister</SelectItem>
                <SelectItem value="worker">Church Worker</SelectItem>
                <SelectItem value="leader">Zonal / Unit Leader</SelectItem>
                <SelectItem value="member">Regular Member</SelectItem>
                <SelectItem value="new-convert">New Convert</SelectItem>
                <SelectItem value="none">Not currently attending</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Are you Born Again? *</label>
            <Select value={form.bornAgain} onValueChange={(v) => v && update("bornAgain", v)}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border text-foreground">
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-border pb-2 pt-2">
          Mentorship Readiness
        </p>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Are you willing to submit as a daughter (mentee) under prophetic mentorship? *
          </label>
          <Select value={form.willingness} onValueChange={(v) => v && update("willingness", v)}>
            <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border text-foreground">
              <SelectItem value="yes">Yes, I am willing to submit as a daughter</SelectItem>
              <SelectItem value="yes-somewhat">Yes, but I have questions</SelectItem>
              <SelectItem value="not-sure">I need more understanding</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Have you ever been under any form of spiritual mentorship before?
          </label>
          <Select value={form.previousMentorship} onValueChange={(v) => v && update("previousMentorship", v)}>
            <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border text-foreground">
              <SelectItem value="no">No, this would be my first time</SelectItem>
              <SelectItem value="yes-formal">Yes, I was in a formal mentorship program</SelectItem>
              <SelectItem value="yes-informal">Yes, informally under a pastor/leader</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Why do you want to join the Mentoring School?
          </label>
          <Textarea
            placeholder="Share what the Lord is speaking to you about this season and what you hope to gain..."
            value={form.motivation}
            onChange={(e) => update("motivation", e.target.value)}
            rows={3}
            className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        <p className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-border pb-2 pt-2">
          Additional
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">How did you hear about us?</label>
            <Select value={form.heardFrom} onValueChange={(v) => v && update("heardFrom", v)}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border text-foreground">
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="friend">Friend/Family</SelectItem>
                <SelectItem value="church">Church</SelectItem>
                <SelectItem value="conference">Prophetic Conference</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Do you need a scholarship?</label>
            <Select value={form.scholarship} onValueChange={(v) => v && update("scholarship", v)}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border text-foreground">
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes, I need a scholarship</SelectItem>
                <SelectItem value="partial">Partial assistance would help</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Prayer Requests (optional)</label>
          <Textarea
            placeholder="Share any prayer needs..."
            value={form.prayerRequest}
            onChange={(e) => update("prayerRequest", e.target.value)}
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
