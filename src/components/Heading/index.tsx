import React, { ReactNode } from 'react';

import { Container, HeadingText } from './styles';

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <Container>
      <HeadingText>
        {children}
      </HeadingText>
    </Container>
  );
};

export default Heading;
