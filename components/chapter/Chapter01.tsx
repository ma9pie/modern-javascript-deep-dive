import React from 'react';
import tw, { styled } from 'twin.macro';

import { List, Spacing, Text } from '@/components/common';

const Chapter = () => {
  return (
    <Wrapper>
      <Text.Title2>프로그래밍이란?</Text.Title2>
      <List
        list={[
          '사용자와 컴퓨터간의 커뮤니케이션',
          '문제 해결 능력은 곧 컴퓨팅적 사고와 직결',
        ]}
      ></List>

      <br />

      <Text.Title2>프로그래밍 언어</Text.Title2>
      <Text>
        사람과 컴퓨터는 기계어로 소통을 하며, 둘 사이의 번역기를 컴파일러 혹은
        인터프리터라고 한다.
      </Text>
    </Wrapper>
  );
};

export default Chapter;

const Wrapper = styled.div`
  ${tw``};
`;
