export const ANIMATION = {

  fast: 0.2,

  normal: 0.3,

  slow: 0.5,

};

export const EASE = [
  0.22,
  1,
  0.36,
  1,
] as const;

export const drawerAnimation = {

  initial: {
    x: 600,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
  },

  exit: {
    x: 600,
    opacity: 0,
  },

};

export const fadeAnimation = {

  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },

};

export const slideUpAnimation = {

  initial: {
    y: 20,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },

};