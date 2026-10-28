/**
 * Savings calculator logic comparing conventional physical wedding invitations
 * with Inka Digital's flat-fee digital invitation.
 */

export interface SavingsResult {
  guestCount: number;
  totalPhysical: number;
  digitalCost: number;
  savings: number;
  savingsPercentage: number;
  physicalBreakdown: {
    printCost: number;
    shippingFee: number;
  };
}

export const DEFAULT_PHYSICAL_PRICE_PER_CARD = 12000;
export const DEFAULT_SHIPPING_FEE = 350000;
export const DEFAULT_INKA_DIGITAL_FEE = 149000;

export function calculateSavings(
  guestCount: number,
  pricePerCard: number = DEFAULT_PHYSICAL_PRICE_PER_CARD,
  shippingFee: number = DEFAULT_SHIPPING_FEE,
  digitalCost: number = DEFAULT_INKA_DIGITAL_FEE
): SavingsResult {
  const safeGuests = Math.max(1, Math.round(guestCount));
  const printCost = safeGuests * pricePerCard;
  const totalPhysical = printCost + shippingFee;
  const savings = Math.max(0, totalPhysical - digitalCost);
  const savingsPercentage = totalPhysical > 0 ? Math.round((savings / totalPhysical) * 100) : 0;

  return {
    guestCount: safeGuests,
    totalPhysical,
    digitalCost,
    savings,
    savingsPercentage,
    physicalBreakdown: {
      printCost,
      shippingFee,
    },
  };
}

export function formatRupiah(amount: number): string {
  const safeAmount = Math.round(amount);
  return 'Rp ' + safeAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
