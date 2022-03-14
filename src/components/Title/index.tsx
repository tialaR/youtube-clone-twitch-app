import React, { ReactNode } from 'react';

import { Container } from './styles';

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Title;
