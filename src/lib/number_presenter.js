
const round = (value, { dp, trailingZeros, style, currency } = { dp: 0, trailingZeros: false, style: 'decimal' }) =>
  Intl.NumberFormat(['en-NZ', 'en'], {
    minimumFractionDigits: trailingZeros ? dp : 0,
    maximumFractionDigits: dp,
    style,
    currency,
  }).format(value);

const percent = (value, settings = { dp: 0, trailingZeros: false }) =>
  round(value, { ...settings, style: 'percent' });

const dollar = (value, cents) => {
  let presented = round(value, { dp: cents ? 2 : 0, trailingZeros: cents === 'all', style: 'currency', currency: 'NZD' });
  if (presented && presented[presented.length - 2] === '.') presented += '0';
  return presented;
};

export {
  percent,
  dollar,
};
