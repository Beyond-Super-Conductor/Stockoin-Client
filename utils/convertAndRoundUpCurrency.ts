export const convertAndRoundUpCurrency = (currency: number): string => {

  return currency.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
}