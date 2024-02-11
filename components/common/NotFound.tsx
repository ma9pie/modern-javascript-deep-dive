import React from 'react';
import tw, { styled } from 'twin.macro';

import { Text } from '@/components/common';

const NotFound = () => {
  return (
    <Wrapper>
      <Text bold center _9xl>
        404
      </Text>
      <Text bold center _6xl>
        Not found
      </Text>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  ${tw`flex flex-col justify-center items-center h-full`};
`;
