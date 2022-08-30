import { styled } from 'baseui';
import { Grid as Grids, Row as Rows, Col as Cols } from 'react-flexbox-grid';

// export const Grid = styled(Grids, ({ $theme }) => ({
//   &.container,
//   &.container-fluid {
//     padding: 0 15px;
//   }
// }));

export const Grid = styled(Grids, () => ({}));

export const Row = styled(Rows, () => ({
  margin: '0 -15px 30px',

  ':last-child': {
    marginBottom: '0px',
  },
}));

export const Container = styled('div', ({ props }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3px',
  borderWidth: '2px',
  borderRadius: '2px',
  borderColor: '#E6E6E6',
  borderStyle: 'dashed',
  backgroundColor: '#ffffff',
  color: '#00c58d',
  outline: 'none',
  transition: 'border 0.24s ease-in-out',
}));

export const Col = styled(Cols, () => ({
  padding: '0 15px',
}));
