import { countries } from "./countries";
export type EsimPlan = {
  id: string;
  countryCode: string;
  data: string;
  validity: string;
  price: number;
  network: string;
  features: string[];
  popular?: boolean;
};
export const plans: EsimPlan[] = countries.flatMap((c, i) => [
  {
    id: `${c.code}-1`,
    countryCode: c.code,
    data: "1 GB",
    validity: "7 days",
    price: 250 + i * 20,
    network: "4G / LTE",
    features: ["Instant activation", "Local data", "24/7 support"],
  },
  {
    id: `${c.code}-5`,
    countryCode: c.code,
    data: "5 GB",
    validity: "30 days",
    price: 850 + i * 35,
    network: "4G / LTE",
    features: [
      "Instant activation",
      "Local data",
      "Hotspot supported",
      "24/7 support",
    ],
    popular: true,
  },
  {
    id: `${c.code}-10`,
    countryCode: c.code,
    data: "10 GB",
    validity: "30 days",
    price: 1450 + i * 45,
    network: "4G / LTE",
    features: [
      "Instant activation",
      "Local data",
      "Hotspot supported",
      "24/7 support",
    ],
  },
]);
export const findPlan = (id: string) => plans.find((p) => p.id === id);
export const countryByCode = (code: string) =>
  countries.find((c) => c.code === code);
