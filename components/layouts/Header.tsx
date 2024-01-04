import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Flex, Text } from '@/components/common';

const Header = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <Flex items="end" gap={8}>
          <Text xl2 bold>
            모던
          </Text>
          <Text xl2 bold>
            자바스크립트
          </Text>
          <Text xl semibold>
            Deep Dive
          </Text>
        </Flex>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`flex items-center h-20 border-b border-solid border-b-neutral-700 px-6`};
`;
