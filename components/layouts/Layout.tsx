import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Header from '@/components/layouts/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header></Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  ${tw``};
`;
const Content = styled.div`
  ${tw`min-h-[calc(100vh-80px)] px-6 pt-6 pb-40`};
`;
