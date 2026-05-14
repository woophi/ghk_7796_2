import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  backgroundColor: '#FFFFFF',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  padding: '12px 1rem',
  borderRadius: '1rem',
  backgroundColor: '#F2F3F5',
  margin: '1rem 0',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const tag = recipe({
  base: {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3193FC',
    padding: '4px 12px',
    borderRadius: '8px',
  },
  variants: {
    variant: {
      secondary: {
        color: '#000000',
        backgroundColor: '#E4F0FF',
      },
    },
  },
});

const sliderCard = style({
  minWidth: '212px',
  maxWidth: '212px',
  backgroundColor: '#e4f0ff',
  padding: '1rem',
  borderRadius: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  marginTop: '30px',
  textAlign: 'center',
});

const boxCard = style({
  backgroundColor: '#F3F4F5',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
});

const cell = style({
  backgroundColor: '#F3F4F5',
  borderRadius: '24px',
  padding: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  tag,
  sliderCard,
  boxCard,
  cell,
};
