export const formatToNaira = (val: number) =>
  (val / 100).toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
