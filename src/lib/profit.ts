import { siteConfig } from "../config/site";

export type ProfitBreakdown = {
  jarsSold: number;
  pricePerJar: number;
  revenue: number;
  estimatedCosts: number;
  profit: number;
  savings: number;
  reinvestment: number;
};

const roundMoney = (value: number) => Math.round(value * 100) / 100;

export function calculateProfitBreakdown(jarsSoldInput: number): ProfitBreakdown {
  const jarsSold = Math.max(0, Math.floor(Number.isFinite(jarsSoldInput) ? jarsSoldInput : 0));
  const pricePerJar = siteConfig.product.pricePerJar;
  const revenue = roundMoney(jarsSold * pricePerJar);
  const estimatedCosts = roundMoney(jarsSold * siteConfig.product.estimatedCostPerJar);
  const profit = roundMoney(Math.max(0, revenue - estimatedCosts));
  const savings = roundMoney(profit * siteConfig.product.savingsRate);
  const reinvestment = roundMoney(profit * siteConfig.product.reinvestmentRate);

  return {
    jarsSold,
    pricePerJar,
    revenue,
    estimatedCosts,
    profit,
    savings,
    reinvestment
  };
}

