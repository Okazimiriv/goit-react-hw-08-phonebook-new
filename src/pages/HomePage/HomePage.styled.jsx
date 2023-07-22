import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 'calc(100vh - 50px)',
  display: 'flex',
  align-items: 'center',
  justify-content: 'center',
  color: #2a363b,

`;


export const Title = styled.h1`
  font-weight: 500,  
  justify-content: 'center',
  font-size: '35px',
  // text-align: 'center',

  @media screen and (max-width: 480px) {
  .Title {
    width: 480px;
  }
 
`;

export const Text = styled.h3`
  fontWeight: 500,  
  justify-content: 'center',
  color: teal,
`;



