import styled from 'styled-components';
export default function ErrorMessageTwo({ message }) {
  return <StyledAside>{message}</StyledAside>;
}

const StyledAside = styled.aside({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '30vh',
  padding: '100px 1.5rem 0',
  fontSize: '20px',
  color: '#c60505',
  backgroundColor: '#fff',
});
