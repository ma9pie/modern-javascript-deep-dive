import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Flex, ResponsiveView, Text } from '@/components/common';

const Header = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <ResponsiveView
          mobile={
            <Flex items="center" gap={8}>
              <Image
                src="/images/logo/logo.svg"
                width={24}
                height={24}
                alt="logo"
              ></Image>
              <Text lg bold>
                모던 자바스크립트 Deep Dive
              </Text>
            </Flex>
          }
          desktop={
            <Flex items="center" gap={8}>
              <Image
                src="/images/logo/logo.svg"
                width={32}
                height={32}
                alt="logo"
              ></Image>
              <Flex items="end" gap={8}>
                <Text _2xl bold>
                  모던
                </Text>
                <Text _2xl bold>
                  자바스크립트
                </Text>
                <Text xl semibold>
                  Deep Dive
                </Text>
              </Flex>
            </Flex>
          }
        ></ResponsiveView>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`flex items-center h-20 border-b border-solid border-b-neutral-700 px-6`};
`;
