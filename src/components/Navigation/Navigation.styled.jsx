import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkWrap = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;

   &:active {
    text-decoration: underline;    
    color: teal;
    }

    &:hover {     
    color: teal;
    }
  `;

// .link {
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #2a363b;
// }

// .link.active {
//   color: #e84a5f;
// }