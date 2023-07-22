import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 100px auto;
  padding-top: 30px;
  padding-bottom: 30px;  
  width: 100%; 

  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 480px) {   
    max-width: 480px;    
  }

  @media (min-width: 768px) {   
    max-width: 700px;
     padding: 30px;
  }
}
`;

// @media screen and (min-width: 480px) {
//   .Container {
//     width: 480px;
//   }
// }

// @media screen and (min-width: 768px) {
//   .Container {
//     width: 768px;
//   }
// }

// @media screen and (min-width: 1200px) {
//   .Container {
//     width: 1200px;
//   }
// }
