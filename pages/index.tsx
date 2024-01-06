import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Flex, Text } from '@/components/common';
import Layout from '@/components/layouts/Layout';
import { CHAPTER } from '@/constants';

const Home = () => {
  return (
    <Layout>
      <Container>
        {CHAPTER.map(({ id, title, done }) =>
          done ? (
            <Link
              className="w-fit text-lg text-blue-400"
              key={id}
              href={`/chapter/${id}`}
            >
              <Flex gap={12}>
                <Text nowrap>{`제 ${id}장`}</Text>
                <Text>{title}</Text>
              </Flex>
            </Link>
          ) : (
            <InActiveBox key={id}>
              <Flex gap={12}>
                <Text nowrap>{`제 ${id}장 `}</Text>
                <Text>{title}</Text>
              </Flex>
            </InActiveBox>
          )
        )}
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  ${tw`flex flex-col gap-4`};
`;
const InActiveBox = styled.div`
  ${tw`w-fit text-lg text-neutral-600`};
`;
