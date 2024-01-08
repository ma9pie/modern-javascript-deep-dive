import Head from 'next/head';
import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Header from '@/components/layouts/Header';
import { TITLE } from '@/constants';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
      </Head>
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
  ${tw`max-w-7xl min-h-[calc(100vh-80px)] px-6 pt-6 pb-40 mx-auto`};
`;
