import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';

const Header = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`flex items-center h-20 border-b border-solid border-b-neutral-700 px-6`};
`;
