// Import snake paths from your existing utils/masks file
export { SNAKE_DESKTOP, SNAKE_TABLET, SNAKE_MOBILE } from '@/utils/masks';

// Figma design constants (do not change these values)
export const FIGMA_CONSTANTS = {
  desktop: {
    artW: 1266,
    artH: 1613,
    cardW: 603,
    cardH: 135,
    gifW: 213,
    gifH: 180,
    gutter: 19,
  },
  tablet: {
    artW: 668,
    artH: 1739,
    cardW: 523,
    cardH: 231,
  },
  mobile: {
    artW: 331,
    artH: 1669,
    cardW: 316,
    cardH: 216,
  },
};

// Card top positions as percentage of container height
// These align the cards with the snake path
export const CARD_TOPS = {
  desktop: [4.5, 18.5, 33.0, 47.5, 62.0, 76.5],
  tablet: [6.0, 22.0, 38.0, 54.0, 70.0, 86.0],
  mobile: [5.5, 21.0, 36.5, 52.0, 67.5, 83.0],
};

// Utility function for alternating sides on desktop
export const sideFor = (index: number) => (index % 2 === 0 ? 'left' : 'right');
