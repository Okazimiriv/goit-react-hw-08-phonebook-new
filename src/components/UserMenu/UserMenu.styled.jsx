import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
    font-weight: 700;
    font-size: 18px;
`;

export const Button = styled.button` 
  margin: 0;  
  padding: 10px;
  border: none;   
  background-color: transparent;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.2);
  `;



// .wrapper {
//   display: flex;
//   align-items: center;
//   gap: 12px;
// }

// .username {
//   font-weight: 700;
// }
