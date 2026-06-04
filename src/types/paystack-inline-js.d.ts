declare module "@paystack/inline-js" {
  interface PaystackTransactionParams {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    channels?: string[];
    label?: string;
    metadata?: Record<string, unknown>;
    onSuccess?: (response: unknown) => void;
    onCancel?: () => void;
    onError?: (error: unknown) => void;
  }

  class PaystackPop {
    newTransaction(params: PaystackTransactionParams): void;
    resumeTransaction(params: { key: string }): void;
  }

  const PaystackPopStatic: new () => PaystackPop;
  export default PaystackPopStatic;
}
