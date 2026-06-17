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
import { Heart, CheckCircle2, Send } from "lucide-react";

const nairaPresets = [1000, 5000, 10000, 50000];
const dollarPresets = [10, 50, 100, 500];

export function PartnerForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [amount, setAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    partnershipType: "monthly",
    heardFrom: "",
    prayerRequest: "",
  });

  const symbol = currency === "NGN" ? "₦" : "$";
  const presets = currency === "NGN" ? nairaPresets : dollarPresets;

  function update(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handlePresetClick(value: number) {
    setAmount(value);
    setCustomAmount("");
  }

  function handleCustomChange(value: string) {
    const num = parseInt(value.replace(/,/g, ""), 10);
    setAmount(isNaN(num) ? 0 : num);
    setCustomAmount(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    if (amount < (currency === "NGN" ? 100 : 1)) {
      toast.error(`Minimum partnership pledge is ${symbol}${currency === "NGN" ? "100" : "1"}`);
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      toast.success("Partnership submitted! We'll be in touch.");
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
        <h3 className="text-2xl font-bold text-primary">Welcome to the Family!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-primary">{form.fullName}</span>! Your partnership commitment of{" "}
          <span className="font-semibold text-gold">{symbol}{amount.toLocaleString()}</span> {form.partnershipType === "one-time" ? "one-time" : form.partnershipType} has been received.
        </p>
        <p className="text-muted-foreground text-xs max-w-sm mx-auto">
          A member of our team will reach out to you within 24 hours with your partner details and next steps.
        </p>
        <div className="flex items-center justify-center gap-3 pt-4">
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-muted rounded-xl"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setAmount(0);
              setCustomAmount("");
              setForm({ fullName: "", email: "", phone: "", address: "", partnershipType: "monthly", heardFrom: "", prayerRequest: "" });
            }}
          >
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 mb-8">
        <span className="flex items-center justify-center size-12 rounded-2xl bg-gold/10 text-gold">
          <Heart className="size-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-primary">Become a Partner</h3>
          <p className="text-xs text-muted-foreground">Step {step} of 2</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-primary/60 mb-3 block">
                Partnership Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { value: "monthly", label: "Monthly" },
                  { value: "quarterly", label: "Quarterly" },
                  { value: "annually", label: "Annually" },
                  { value: "one-time", label: "One Time" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("partnershipType", opt.value)}
                    className={`py-3 rounded-xl text-sm font-semibold border transition-all ${
                      form.partnershipType === opt.value
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
                        : "bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-primary/60 mb-3 block">Currency</label>
              <div className="flex rounded-xl bg-muted p-1 border border-border w-fit">
                <button
                  type="button"
                  onClick={() => setCurrency("NGN")}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    currency === "NGN" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  ₦ Naira
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    currency === "USD" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  $ Dollar
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-primary/60 mb-3 block">
                I Pledge to Give
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      amount === preset
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
                        : "bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {symbol}{preset.toLocaleString()}
                  </button>
                ))}
              </div>
              <Input
                type="text"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={() => amount > 0 && setStep(2)}
                disabled={amount <= 0}
                className="bg-primary text-primary-foreground hover:bg-navy-light px-8 py-2.5 rounded-xl font-semibold"
              >
                Next Step
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
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
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone</label>
                <Input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
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
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">How did you hear about GDMI?</label>
              <Select value={form.heardFrom} onValueChange={(v) => v && update("heardFrom", v)}>
                <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border text-foreground">
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="friend">Friend/Family</SelectItem>
                  <SelectItem value="conference">Prophetic Conference</SelectItem>
                  <SelectItem value="campus">Campus Outreach</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Prayer Requests (optional)</label>
              <Textarea
                placeholder="Share any prayer needs or special requests..."
                value={form.prayerRequest}
                onChange={(e) => update("prayerRequest", e.target.value)}
                rows={3}
                className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Summary:</span>{" "}
                {form.partnershipType === "one-time" ? "One-time" : form.partnershipType} partner —{" "}
                <span className="font-semibold text-gold">{symbol}{amount.toLocaleString()}</span>
                {form.partnershipType !== "one-time" && (
                  <span className="text-xs text-muted-foreground"> per {form.partnershipType}</span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="border-border text-muted-foreground hover:bg-muted rounded-xl h-12 px-6"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-primary text-primary-foreground hover:bg-navy-light h-12 rounded-xl font-bold"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Partnership <Send className="size-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
