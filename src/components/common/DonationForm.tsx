"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, CheckCircle2, Copy } from "lucide-react";
import { projects as staticProjects } from "@/data/projects";
import { useProjects } from "@/lib/use-data";

const nairaPresets = [1000, 5000, 10000, 50000];
const dollarPresets = [10, 50, 100, 500];

export function DonationForm() {
  const { data: wpProjects } = useProjects();
  const projects = wpProjects.length > 0
    ? wpProjects.map((wp) => {
        const st = staticProjects.find((s) => s.slug === wp.slug);
        return {
          ...wp,
          image: wp.image || st?.image || "/gdmi-logo.png",
          gallery: wp.gallery.length > 0 ? wp.gallery : st?.gallery || [],
        };
      })
    : staticProjects;
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [amount, setAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const symbol = currency === "NGN" ? "₦" : "$";
  const presetAmounts = currency === "NGN" ? nairaPresets : dollarPresets;

  function handlePresetClick(value: number) {
    setAmount(value);
    setCustomAmount("");
  }

  function handleCustomChange(value: string) {
    const num = parseInt(value.replace(/,/g, ""), 10);
    if (!isNaN(num)) setAmount(num);
    else setAmount(0);
    setCustomAmount(value);
  }

  async function handleCopy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {}
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const min = currency === "NGN" ? 100 : 1;
    if (amount < min) {
      alert(`Minimum donation is ${symbol}${min}`);
      return;
    }
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-10 sm:p-14 text-center space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto border border-green-200">
            <CheckCircle2 className="size-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            Your pledge of <span className="font-semibold text-primary">{symbol}{amount.toLocaleString()}</span> for <span className="font-semibold">{project === "general" ? "General Ministry" : project}</span> has been noted.
          </p>
          <p className="text-muted-foreground text-xs max-w-sm mx-auto">
            Kindly transfer the amount to the account below and send your proof of payment to us via WhatsApp or email.
          </p>
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-muted rounded-xl mt-4"
            onClick={() => {
              setSubmitted(false);
              setAmount(0);
              setCustomAmount("");
              setName("");
              setEmail("");
              setPhone("");
              setProject("general");
            }}
          >
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="flex rounded-xl bg-muted p-1 border border-border">
          <button
            type="button"
            onClick={() => setCurrency("NGN")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              currency === "NGN"
                ? "bg-background text-primary shadow-sm"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            ₦ Naira
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              currency === "USD"
                ? "bg-background text-primary shadow-sm"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            $ Dollar
          </button>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 border border-border">
            <Building2 className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Bank Transfer</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Make a direct bank transfer to the ministry {currency === "NGN" ? "Naira" : "Dollar"} account below.
          </p>
        </div>

        <div className="bg-muted/50 rounded-xl p-6 space-y-4 border border-border">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground text-sm">Account Name</span>
            <span className="font-semibold text-primary text-sm text-right max-w-[60%]">
              GBENGA DAHUNSI MINISTRY INTERNATIONAL
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground text-sm">Bank</span>
            <span className="font-semibold text-primary/60 text-sm">
              {currency === "NGN"
                ? process.env.NEXT_PUBLIC_BANK_NAME
                : process.env.NEXT_PUBLIC_DOLLAR_BANK_NAME}
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground text-sm">Account No</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gold text-lg tracking-wider">
                {currency === "NGN"
                  ? process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER
                  : process.env.NEXT_PUBLIC_DOLLAR_ACCOUNT_NUMBER}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(
                  currency === "NGN"
                    ? process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER || ""
                    : process.env.NEXT_PUBLIC_DOLLAR_ACCOUNT_NUMBER || "",
                  currency
                )}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                title="Copy account number"
              >
                <Copy className="size-4 text-muted-foreground" />
              </button>
            </div>
          </div>
          {copied === currency && (
            <p className="text-xs text-green-600 text-center">Account number copied!</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-primary/60 mb-3 block">
              I'm Giving
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {presetAmounts.map((preset) => (
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
              <input
                type="text"
                placeholder="Custom"
                value={customAmount}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="py-2.5 px-2 rounded-xl text-sm border border-border bg-transparent text-center text-muted-foreground placeholder:text-muted-foreground/40 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-primary/60 mb-1.5 block">
                Project
              </label>
              <Select value={project} onValueChange={(v) => v && setProject(v)}>
                <SelectTrigger className="h-12 rounded-xl border-border bg-background text-foreground">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border text-foreground">
                  <SelectItem value="general">General Ministry</SelectItem>
                  {projects.map((p) => (
                    <SelectItem key={p.id} value={p.slug}>
                      {p.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Input
              type="tel"
              placeholder="Phone Number (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-navy-light text-base font-bold rounded-xl shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
          >
            I'll Transfer This Amount
          </Button>
        </form>
      </div>
    </div>
  );
}
