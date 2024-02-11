import React, { useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import {
  CodeBlock,
  Divider,
  Flex,
  List,
  Spacing,
  Text,
} from '@/components/common';

const Chapter = () => {
  useEffect(() => {
    // code
  }, []);

  const 예제_00_00 = () => {};

  return (
    <Wrapper>
      <Text.Title2>제목</Text.Title2>
      <Text>내용1</Text>

      <br />

      <CodeBlock fn={예제_00_00}></CodeBlock>
      <Text>내용2</Text>
    </Wrapper>
  );
};

export default Chapter;

const Wrapper = styled.div`
  ${tw``};
`;
