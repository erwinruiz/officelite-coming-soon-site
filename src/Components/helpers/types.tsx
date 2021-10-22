export type Card = {
  planType: string;
  planPrice: string;
  planText: string;
  planListFeatures: {
    first: string;
    second: string;
    third: string;
  };
};

export type Button = {
  text: string;
  className?: string;
};

