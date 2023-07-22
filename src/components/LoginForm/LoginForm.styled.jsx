import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkWrap = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  // font-weight: 700;
  // color: #2a363b;
  color: teal;

   &:hover {
    text-decoration: underline;    
    color: teal;
    }
  `;

export const Form = styled.form` 
  width: 320px;
  `;

  export const Label = styled.label` 
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  `;

