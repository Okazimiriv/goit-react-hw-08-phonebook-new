import React from 'react';
import {
  PageWrap,
  Wrap,
  Title,
  Text,
} from '../components/PageNotFound/PageNotFound.styled';

export default function NotFound() {
  return (
    <PageWrap>
      <Wrap>
        <Title>404</Title>
        <Text>Page not found...</Text>
      </Wrap>
    </PageWrap>
  );
}
