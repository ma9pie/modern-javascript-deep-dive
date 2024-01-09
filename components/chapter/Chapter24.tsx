import React from 'react';
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
  const 예제_24_01 = () => {
    const x = 1;
    const outerFn = () => {
      const x = 10;
      const innerFn = () => {
        console.log(x); // 10
      };
      innerFn();
    };
    outerFn();
  };

  const 예제_24_02 = () => {
    const x = 1;
    const outerFn = () => {
      const x = 10;
      innerFn();
    };
    const innerFn = () => {
      console.log(x); // 1
    };
    outerFn();
  };

  const 예제_24_03 = () => {
    const x = 1;
    const foo = () => {
      const x = 10;
      bar();
    };
    const bar = () => {
      console.log(x);
    };
    foo(); // 1
    bar(); // 1
  };

  const 예제_24_04 = () => {
    const x = 1;
    const foo = () => {
      const x = 10;
      // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
      // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
      bar();
    };
    // 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 함수 객체의 내부 슬롯인 [[Environment]]에 저장하여 기억한다.
    const bar = () => {
      console.log(x);
    };
    foo(); // 1
    bar(); // 1
  };

  const 예제_24_05 = () => {
    const x = 1;
    // (1)
    const outer = () => {
      const x = 10;
      // (2)
      const inner = () => {
        console.log(x);
      };
      return inner;
    };
    // (3)
    // outer 함수를 호출하면 중첩 함수 inner을 반환한다.
    // 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 pop되어 제거된다.
    const innerFn = outer();
    // (4)
    innerFn(); // 10
  };

  const 예제_24_06 = () => {
    const foo = () => {
      const x = 1;
      const y = 2;
      // 일반적으로 아래의 함수를 클로저라고 하지 않는다.
      const bar = () => {
        // debugger;
        const z = 3;
        console.log(z);
      };
      return bar;
    };
    const bar = foo();
    bar(); // 3
  };

  const 예제_24_07 = () => {
    const foo = () => {
      const x = 1;
      // bar 함수는 클로저였지만 곧바로 소멸한다.
      // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
      const bar = () => {
        // debugger;
        // 상위 스코프의 식별자를 참조한다.
        console.log(x);
      };
      bar();
    };
    foo(); // 1
  };

  const 예제_24_08 = () => {
    const foo = () => {
      const x = 1;
      const y = 2;
      // 클로저
      // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
      const bar = () => {
        // debugger;
        console.log(x);
      };
      return bar;
    };
    const bar = foo(); // 1
    bar();
  };

  const 예제_24_09 = () => {
    // 카운트 상태 변수
    let num = 0;
    // 카운트 상태 변경 함수
    // 카운트 상태를 1만큼 증가시킨다.
    const increase = () => {
      return ++num;
    };
    console.log(increase()); // 1
    console.log(increase()); // 2
    console.log(increase()); // 3
  };

  const 예제_24_10 = () => {
    // 카운트 상태 변경 함수
    const increase = () => {
      // 카운트 상태 변수
      let num = 0;
      // 카운트 상태를 1만큼 증가시킨다.
      return ++num;
    };
    console.log(increase()); // 1
    console.log(increase()); // 1
    console.log(increase()); // 1
  };

  const 예제_24_11 = () => {
    // 카운트 상태 변경 함수
    const increase = (() => {
      // 카운트 상태 변수
      let num = 0;
      // 클로저
      return () => {
        // 카운트 상태를 1만큼 증가시킨다.
        return ++num;
      };
    })();
    console.log(increase()); // 1
    console.log(increase()); // 2
    console.log(increase()); // 3
  };

  const 예제_24_12 = () => {
    const counter = (() => {
      // 카운트 상태 변수
      let num = 0;

      // 클로저인 메서드를 갖는 객체를 반환한다.
      // 객체 리터럴은 스코프를 만들지 않는다.
      // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
      return {
        // num: 0, 프로퍼티는 public하므로 은닉되지 않는다.
        increase() {
          return ++num;
        },
        decrease() {
          return num > 0 ? --num : 0;
        },
      };
    })();

    console.log(counter.increase()); // 1
    console.log(counter.increase()); // 2

    console.log(counter.decrease()); // 1
    console.log(counter.decrease()); // 0
  };

  return (
    <Wrapper>
      <Text.Title2>MDN 정의</Text.Title2>
      <Text>클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.</Text>

      <br />

      <CodeBlock fn={예제_24_01}></CodeBlock>
      <Text>
        innerFn의 상위 스코프는 outerFn이다. 따라서 중첩 함수 innerFn 내부에서
        자신을 포함하고 있는 외부 함수 outerFn의 변수 x에 접근 가능하다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_02}></CodeBlock>
      <Text>
        innerFn은 outerFn 내부에 선언된 함수가 아니므로 outerFn 내부에서
        innerFn을 호출한다 하더라도 outerFn의 변수에 접근할 수 없다.
      </Text>

      <br />
      <br />

      <Text.Title2>렉시컬 스코프</Text.Title2>
      <Text>
        자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에
        정의했는지에 따라 상위 스코프를 결정하는데, 이를 렉시컬 스코프(정적
        스코프)라 한다.
      </Text>
      <Text>
        {`"함수의 상위 스코프를 결정한다." <-> "렉시컬 환경의 외부 렉시컬 환경에 대한
        참조에 저장할 참조값을 결정한다."`}
      </Text>

      <br />

      <CodeBlock fn={예제_24_03}></CodeBlock>
      <Text>
        함수의 스코프는 함수를 어디서 정의를 했느냐에 따라 결정되므로 foo,bar 두
        함수의 상위 스코프는 전역이다.
      </Text>

      <br />
      <br />

      <Text.Title2>함수 객체의 내부 슬롯 [[Enviroment]]</Text.Title2>

      <br />

      <CodeBlock fn={예제_24_04}></CodeBlock>
      <Text>
        함수는 자신의 내부 슬롯 [[Enviroment]]에 자신이 정의된 환경, 즉 상위
        스코프의 참조를 저장한다.
      </Text>

      <br />
      <br />

      <Text.Title2>클로저와 렉시컬 환경</Text.Title2>

      <br />

      <CodeBlock fn={예제_24_05}></CodeBlock>
      <Text>
        outer 함수 호출 시 중첩 함수 inner를 반환하고 함수와 함수의 지역 변수
        x의 생명 주기는 마감된다. 즉, outer 함수 종료 시 outer 함수의 실행
        컨텍스트는 실행 컨텍스트 스택에서 제거된다.
      </Text>
      <Text>
        그러나 (4) 코드 실행 결과 이미 생명 주기가 마감된 outer 함수의 지역 변수
        x값을 출력할 수 있는데, 외부 함수보다 중첩 함수가 더 오래 유지되는 경우
        중첩 함수는 이미 생명주기가 끝난 외부 함수의 변수를 참조할 수 있다.
        이러한 중첩 함수를 클로저(closure)라고 부른다.
      </Text>

      <br />

      <Text>
        outer 함수 종료 시 inner 함수를 반환하면서 outer 함수의 실행 컨텍스트가
        실행 컨텍스트 스택에서 제외되어 생명 주기가 마감되지만, outer 함수의
        렉시컬 환경까지 소멸되지는 않는다. 왜냐하면 outer 함수의 렉시컬 환경은
        inner 함수의 [[Enviroment]] 내부 슬롯에 의해 참조되고 inner 함수는 전역
        변수 innerFn에 의해 참조되고 있으므로 가비지 컬렉션 대상에 해당되지 않기
        때문이다. 가비지 컬렉터는 누군가가 참조하고 있는 메모리 공간을 함부로
        해제하지 않는다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_06}></CodeBlock>
      <Text>
        상위 스코프의 어떤식별자도 참조하지 않는 함수는 클로저가 아니다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_07}></CodeBlock>
      <Text>
        중첩 함수 bar는 상위 스코프의 식별자를 참조하고 있지만, 외부 함수
        foo보다 생명 주기가 짧으므로 클로저라고 보기 어렵다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_08}></CodeBlock>
      <Text>
        클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가
        외부 함수보다 더 오래 유지되는 경우로 한정하는 것이 일반적이다.
      </Text>

      <br />
      <br />

      <Text.Title2>클로저의 활용</Text.Title2>
      <Text>
        클로저는 상태를 안전하게 변경하고 유지하기 위해서 사용한다. 즉, 상태를
        안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해서 사용한다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_09}></CodeBlock>
      <Text>
        위의 코드의 경우 num이 전역 변수로 선언되었기 때문에 다른 부분에서 해당
        변수에 접근해 값이 변경될 여지가 있다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_10}></CodeBlock>
      <Text>
        카운트 상태를 안전하게 변경하고 유지하기 위해 전역 변수 num을 increase
        함수의 지역 변수로 선언하였지만, increase 함수가 호출될 때마다 지역 변수
        num값은 0으로 초기화된다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_11}></CodeBlock>
      <Text>
        위 코드 실행 시 즉시 실행 함수가 호출되고 거기서 반환된 함수가 increase
        변수에 할당된다. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해
        결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저이다.
      </Text>
      <Text>
        이처럼 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고
        특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기
        위해 사용된다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_12}></CodeBlock>
      <Text></Text>
    </Wrapper>
  );
};

export default Chapter;

const Wrapper = styled.div`
  ${tw``};
`;
