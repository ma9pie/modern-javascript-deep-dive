import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Chapter01 from '@/components/chapter/Chapter01';
import Flex from '@/components/common/Flex';
import NotFound from '@/components/common/NotFound';
import Text from '@/components/common/Text';
import Layout from '@/components/layouts/Layout';
import { CHAPTER } from '@/constants';
import { ChapterItem } from '@/types';

const Chapter = () => {
  const router = useRouter();

  const [chapter, setChapter] = useState<ChapterItem | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    const _chapter = CHAPTER.find((item) => item.id === Number(id));
    if (_chapter) {
      setChapter(_chapter);
    } else {
      setChapter({
        id: -1,
        title: '',
        done: false,
      });
    }
  }, [router.isReady]);

  return (
    <Layout>
      {(() => {
        if (!chapter) {
          return null;
        }
        const { id, title } = chapter;
        if (chapter.id === -1) {
          return <NotFound></NotFound>;
        }
        return (
          <Flex className="h-full" col flex={1} gap={16}>
            <Text xl3>{`[제 ${id}장] ${title}`}</Text>
            <Content>{id === 1 && <Chapter01></Chapter01>}</Content>
          </Flex>
        );
      })()}
    </Layout>
  );
};

export default Chapter;

const Content = styled.div`
  ${tw`flex-1`};
`;
