export function ZeroAddBeginningOfNumber(num: number) {
  return num === 0
    ? num
    : num > 9
    ? num
    : num < 0 && num >= -9
    ? `-0${Math.abs(num)}`
    : num > 0
    ? `0${num}`
    : num;
}
