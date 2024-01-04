import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import Layout from '@/components/layouts/Layout';
import { CHAPTER } from '@/constants';

const Home = () => {
  return (
    <Layout>
      <Container>
        {CHAPTER.map(({ id, title }) => (
          <Link className="w-fit" key={id} href={`/chapter/${id}`}>
            <Flex gap={12}>
              <Text lg blue400>{`제 ${id}장 `}</Text>
              <Text lg blue400>
                {title}
              </Text>
            </Flex>
          </Link>
        ))}
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  ${tw`flex flex-col gap-4`};
`;
const LinkText = styled.div`
  ${tw`text-lg`};
`;
