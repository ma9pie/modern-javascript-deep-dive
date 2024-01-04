import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Flex } from '@/components/common';
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
                <p>{`제 ${id}장`}</p>
                <p>{title}</p>
              </Flex>
            </Link>
          ) : (
            <div className="w-fit text-lg text-neutral-600" key={id}>
              <Flex gap={12}>
                <p>{`제 ${id}장 `}</p>
                <p>{title}</p>
              </Flex>
            </div>
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
const LinkText = styled.div`
  ${tw`text-lg`};
`;
