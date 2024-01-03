import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Chapter01 from '@/components/chapter/Chapter01';
import Flex from '@/components/common/Flex';
import NotFound from '@/components/common/NotFound';
import Text from '@/components/common/Text';
import Layout from '@/components/layouts/Layout';

interface Chapter {
  id: number;
  title: string;
  component: () => JSX.Element;
}

const CHAPTER: Chapter[] = [
  { id: 1, title: '프로그래밍', component: () => <Chapter01></Chapter01> },
  { id: 2, title: '자바스크립트란?', component: () => <></> },
  {
    id: 3,
    title: '자바스크립트 개발 환경과 실행 방법',
    component: () => <></>,
  },
  { id: 4, title: '변수', component: () => <></> },
  { id: 5, title: '표현식과 문', component: () => <></> },
  { id: 6, title: '데이터 타입', component: () => <></> },
  { id: 7, title: '연산자', component: () => <></> },
  { id: 8, title: '제어문', component: () => <></> },
  { id: 9, title: '타입 변환과 단축 평가', component: () => <></> },
  { id: 10, title: '객체 리터럴', component: () => <></> },
  { id: 11, title: '원시 값과 객체의 비교', component: () => <></> },
  { id: 12, title: '함수', component: () => <></> },
  { id: 13, title: '스코프', component: () => <></> },
  { id: 14, title: '전역 변수의 문제점', component: () => <></> },
  {
    id: 15,
    title: 'let, const 키워드와 블록 레벨 스코프',
    component: () => <></>,
  },
  { id: 16, title: '프로퍼티 어트리뷰트', component: () => <></> },
  { id: 17, title: '생성자 함수에 의한 객체 생성', component: () => <></> },
  { id: 18, title: '함수와 일급 객체', component: () => <></> },
  { id: 19, title: '프로토타입', component: () => <></> },
  { id: 20, title: 'strict mode', component: () => <></> },
  { id: 21, title: '빌트인 객체', component: () => <></> },
  { id: 22, title: 'this', component: () => <></> },
  { id: 23, title: '실행 컨텍스트', component: () => <></> },
  { id: 24, title: '클로저', component: () => <></> },
  { id: 25, title: '클래스', component: () => <></> },
  { id: 26, title: 'ES6 함수의 추가 기능', component: () => <></> },
  { id: 27, title: '배열', component: () => <></> },
  { id: 28, title: 'Number', component: () => <></> },
  { id: 29, title: 'Math', component: () => <></> },
  { id: 30, title: 'Date', component: () => <></> },
  { id: 31, title: 'RegExp', component: () => <></> },
  { id: 32, title: 'String', component: () => <></> },
  { id: 33, title: '7번째 데이터 타입 Symbol', component: () => <></> },
  { id: 34, title: '이터러블', component: () => <></> },
  { id: 35, title: '스프레드 문법', component: () => <></> },
  { id: 36, title: '디스트럭처링 할당', component: () => <></> },
  { id: 37, title: 'Set과 Map', component: () => <></> },
  { id: 38, title: '브라우저의 렌더링 과정', component: () => <></> },
  { id: 39, title: 'DOM', component: () => <></> },
  { id: 40, title: '이벤트', component: () => <></> },
  { id: 41, title: '타이머', component: () => <></> },
  { id: 42, title: '비동기 프로그래밍', component: () => <></> },
  { id: 43, title: 'Ajax', component: () => <></> },
  { id: 44, title: 'REST API', component: () => <></> },
  { id: 45, title: '프로미스', component: () => <></> },
  { id: 46, title: '제너레이터와 async/await', component: () => <></> },
  { id: 47, title: '에러 처리', component: () => <></> },
  { id: 48, title: '모듈', component: () => <></> },
  {
    id: 49,
    title: 'Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축',
    component: () => <></>,
  },
];

const Chapter = () => {
  const router = useRouter();

  const [chapter, setChapter] = useState<Chapter | null>(null);

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
        component: () => <></>,
      });
    }

    if (!_chapter) return;
    setChapter(_chapter);
  }, [router.isReady]);

  return (
    <Layout>
      {(() => {
        if (!chapter) {
          return null;
        }
        if (chapter.id === -1) {
          return <NotFound></NotFound>;
        }
        return (
          <Flex className="h-full" col flex={1} gap={16}>
            <Text xl3>{`[제 ${chapter.id}장] ${chapter.title}`}</Text>
            <Content>{chapter.component()}</Content>
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
