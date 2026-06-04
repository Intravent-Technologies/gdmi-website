"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Building2, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";

const presetAmounts = [1000, 5000, 10000, 50000];

const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

export function DonationForm() {
  const [mode, setMode] = useState<"once" | "recurring">("once");
  const [amount, setAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("general");
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  function handlePresetClick(value: number) {
    setAmount(value);
    setCustomAmount("");
  }

  function handleCustomChange(value: string) {
    const num = parseInt(value.replace(/,/g, ""), 10);
    if (!isNaN(num)) {
      setAmount(num);
    } else {
      setAmount(0);
    }
    setCustomAmount(value);
  }

  const handlePaystackPayment = useCallback(async () => {
    if (!paystackKey) {
      alert("Payment system not configured. Please use bank transfer below.");
      setShowBankDetails(true);
      return;
    }

    setProcessing(true);

    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const popup = new PaystackPop();
      popup.newTransaction({
        key: paystackKey,
        email,
        amount: amount * 100,
        currency: "NGN",
        firstname: name.split(" ")[0],
        lastname: name.split(" ").slice(1).join(" "),
        phone,
        channels: ["card", "bank", "ussd", "qr", "mobile_money"],
        label: `${name} — ${project === "general" ? "General Ministry" : project}`,
        metadata: {
          project,
          mode,
          phone,
        },
        onSuccess: () => {
          setProcessing(false);
          setSuccess(true);
        },
        onCancel: () => {
          setProcessing(false);
        },
        onError: () => {
          setProcessing(false);
          alert("Payment failed. Please try again or use bank transfer.");
          setShowBankDetails(true);
        },
      });
    } catch {
      setProcessing(false);
      alert("Payment system error. Please use bank transfer below.");
      setShowBankDetails(true);
    }
  }, [amount, email, name, phone, project, mode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (amount < 100) {
      alert("Minimum donation is ₦100");
      return;
    }
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    await handlePaystackPayment();
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-10 sm:p-14 text-center space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto border border-green-200">
            <CheckCircle2 className="size-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Payment Successful!</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            Thank you for your gift of <span className="font-semibold text-primary">₦{amount.toLocaleString()}</span>. Your seed is sown into prophetic soil. You will receive a confirmation via email.
          </p>
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-muted rounded-xl mt-4"
            onClick={() => {
              setSuccess(false);
              setAmount(0);
              setCustomAmount("");
              setName("");
              setEmail("");
              setPhone("");
              setProject("general");
            }}
          >
            Make Another Gift
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {showBankDetails ? (
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 space-y-6 animate-fade-in shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 border border-border">
              <Building2 className="size-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              Bank Transfer Details
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Complete your donation via bank transfer. Send proof of payment to our WhatsApp or email.
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
                {process.env.NEXT_PUBLIC_BANK_NAME || "First Bank PLC"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground text-sm">Account No</span>
              <span className="font-semibold text-gold text-lg tracking-wider">
                {process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER || "1234567890"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground text-sm">Amount</span>
              <span className="font-semibold text-gold text-xl">
                ₦{amount.toLocaleString()}
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-border text-muted-foreground hover:bg-muted rounded-xl"
            onClick={() => setShowBankDetails(false)}
          >
            Try Card Payment
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="flex gap-2 bg-muted rounded-xl p-1">
            <button
              type="button"
              onClick={() => setMode("once")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                mode === "once"
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setMode("recurring")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                mode === "recurring"
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Recurring Gift
            </button>
          </div>

          <div>
            <label className="text-sm font-medium text-primary/60 mb-3 block">
              Select Amount
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
                  ₦{preset.toLocaleString()}
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
            disabled={processing}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-navy-light text-base font-bold flex items-center justify-center gap-2 rounded-xl shadow-[0_1px_3px_rgba(15,29,53,0.15)] disabled:opacity-50"
          >
            {processing ? (
              <span className="flex items-center gap-2">
                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              <>
                <CreditCard className="size-5" />
                Pay ₦{amount.toLocaleString() || "—"}
              </>
            )}
          </Button>

          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground/50">
              Secured by Paystack &middot; Cards, Bank Transfer, USSD, QR
            </p>
            <button
              type="button"
              onClick={() => setShowBankDetails(true)}
              className="text-xs text-muted-foreground/40 hover:text-gold transition-colors"
            >
              Prefer bank transfer? Click here
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
