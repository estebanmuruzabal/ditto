import styled from 'styled-components';
import { background } from 'styled-system';
import css from '@styled-system/css';
export const Box = styled.div(
  css({
    height: [300, '100vh'],
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  }
);
export const Image = styled.div<any>(
  css({
    backgroundSize: ['cover'],
  }),
  {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    '@media (max-width: 990px) ': {
      // backgroundPosition: 'unset',
    },
  },
  background
);

export const Content = styled.div(
  css({
    px: ['15px'],
    pt: [40, 0],
  }),
  {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px'
  }
);
export const Title = styled.h2(
  css({
    fontSize: [17, '2xl', 38],
    color: 'text.bold',
    fontWeight: 'bold',
    // backgroundColor: '#89b4f787',
    '@media (max-width: 768px) ': {
      fontSize: [12, '2xl', 38],
      maxWidth: '250px'
    },
  }),
  {
    marginBottom: 15,
    textAlign: 'center',
  }
);
export const Description = styled.p(
  css({

    fontWeight: 'bold',
    // backgroundColor: '#89b4f787',

    fontSize: ['base', 'md'],
    color: 'text.bold',
    marginBottom: [null, 60],
    display: ['none', 'block'],

    lineHeight: 'body',
  }),
  {
    textAlign: 'center',
  }
);
