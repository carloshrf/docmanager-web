import React from 'react';

import { Container, Spinner } from './styles';
const Loading: React.FC = () => {

  return (
    <Container>
      <Spinner />
      <strong>Loading...</strong>
    </Container>
  )

}

export default Loading;
