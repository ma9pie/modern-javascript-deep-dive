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

  const 예제_24_13 = () => {
    const Counter: any = (() => {
      // [1] 카운터 상태 변수
      let num = 0;

      const Counter = () => {
        // this.num = 0; // [2] 프로퍼티는 public하므로 은닉되지 않는다.
      };

      Counter.prototype.increase = () => {
        return ++num;
      };

      Counter.prototype.decrease = () => {
        return num > 0 ? --num : 0;
      };

      return Counter;
    })();

    const counter = new Counter();

    console.log(counter.increase()); // 1
    console.log(counter.increase()); // 2

    console.log(counter.decrease()); // 1
    console.log(counter.decrease()); // 0
  };

  const 예제_24_14 = () => {
    // 함수를 인수로 전달받고 함수를 반환하는 고차 함수
    // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
    const makeCounter = (aux: (n: number) => void) => {
      // 카운트 상태를 유지하기 위한 자유 변수
      let counter: any = 0;

      // 클로저를 반환
      return () => {
        // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
        counter = aux(counter);
        return counter;
      };
    };

    // 보조 함수
    const increase = (n: number) => {
      return ++n;
    };

    // 보조 함수
    const decrease = (n: number) => {
      return --n;
    };

    // 함수로 함수를 생성한다.
    // makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
    const increaser = makeCounter(increase);
    console.log(increaser()); // 1
    console.log(increaser()); // 2

    const decreaser = makeCounter(decrease);
    console.log(decreaser()); // -1
    console.log(decreaser()); // -2
  };

  const 예제_24_15 = () => {
    // 함수를 반환하는 고차 함수
    // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
    const counter = (() => {
      // 카운트 상태를 유지하기 위한 자유 변수
      let counter: any = 0;

      // 함수를 인수로 전달받는 클로저를 반환
      return (aux: (n: number) => void) => {
        // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
        counter = aux(counter);
        return counter;
      };
    })();

    // 보조 함수
    const increase = (n: number) => {
      return ++n;
    };

    // 보조 함수
    const decrease = (n: number) => {
      return --n;
    };

    // 보조함수를 전달하여 호출
    console.log(counter(increase)); // 1
    console.log(counter(increase)); // 2

    // 자유 변수를 공유한다.
    console.log(counter(decrease)); // 1
    console.log(counter(decrease)); // 0
  };

  const 예제_24_16 = () => {
    function Person(
      this: {
        name: string;
        sayHi: () => void;
      },
      name: string,
      age: number
    ) {
      this.name = name;
      let _age = age;

      // 인스턴스 메서드
      this.sayHi = () => {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
      };
    }

    const me = new (Person as any)('Lee', 20);
    me.sayHi(); // Hi! My name is Lee. I am 20.
    console.log(me.name); // Lee
    console.log(me._age); // undefined

    const you = new (Person as any)('Kim', 30);
    you.sayHi(); // Hi! My name is Kim. I am 30.
    console.log(you.name); // Kim
    console.log(you._age); // undefined
  };

  const 예제_24_17 = () => {
    function Person(
      this: {
        name: string;
      },
      name: string,
      age: number
    ) {
      this.name = name;
      let _age = age;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function () {
      // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
      // console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };
  };

  const 예제_24_18 = () => {
    const Person = (function () {
      let _age = 0; // private

      // 생성자 함수
      function Person(
        this: {
          name: string;
        },
        name: string,
        age: number
      ) {
        this.name = name;
        _age = age;
      }

      // 프로토타입 메서드
      Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
      };

      // 생성자 함수를 반환
      return Person;
    })();

    const me = new (Person as any)('Lee', 20);
    me.sayHi(); // Hi! My name is Lee. I am 20.
    console.log(me.name); // Lee
    console.log(me._age); // undefined

    const you = new (Person as any)('Kim', 30);
    you.sayHi(); // Hi! My name is Kim. I am 30.
    console.log(you.name); // Kim
    console.log(you._age); // undefined
  };

  const 예제_24_19 = () => {
    const Person = (function () {
      let _age = 0; // private

      // 생성자 함수
      function Person(
        this: {
          name: string;
        },
        name: string,
        age: number
      ) {
        this.name = name;
        _age = age;
      }

      // 프로토타입 메서드
      Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
      };

      // 생성자 함수를 반환
      return Person;
    })();

    const me = new (Person as any)('Lee', 20);
    me.sayHi(); // Hi! My name is Lee. I am 20.

    const you = new (Person as any)('Kim', 30);
    you.sayHi(); // Hi! My name is Kim. I am 30.

    // _age 변수 값이 변경된다!
    me.sayHi(); // Hi! My name is Lee. I am 30.
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
        {`"함수의 상위 스코프를 결정한다." === "렉시컬 환경의 외부 렉시컬 환경에 대한
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
        상위 스코프의 어떤 식별자도 참조하지 않는 함수는 클로저가 아니다.
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

      <br />

      <Text>
        이처럼 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고
        특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기
        위해 사용된다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_12}></CodeBlock>
      <Text>
        위의 예제에서 increase, decrease 함수의 상위 스코프는 두 함수가 평가되는
        시점에 실행중인 실행 컨텍스트인 즉시 실행 함수 실행 컨텍스트의 렉시컬
        환경이다. 따라서 두 함수는 언제 어디에서 호출되든 상관없이 즉시 실행
        함수의 스코프의 식별자를 참조할 수 있다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_13}></CodeBlock>
      <Text>
        [1] num은 생성자 함수 Counter가 생성할 인스턴스의 프로퍼티가 아니라 즉시
        실행 함수 내에서 선언된 변수다.
      </Text>
      <Text>
        [2] num이 인스턴스의 프로퍼티라면 인스턴스를 통해 외부에서 접근이
        자유로운 public 프로퍼티가 됐겠지만, 즉시 실행 함수 내에서 선언되었기
        때문에 인스턴스를 통해 접근할 수 없으며, 외부에서도 접근할 수 없는
        은닉된 변수이다.
      </Text>
      <Text>
        이처럼 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에서 부수
        효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이기 위해서
        클로저를 사용한다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_14}></CodeBlock>
      <Text>
        makeCounter 함수를 호출해 함수를 반환할 때 반환된 함수는 자신만의 독립된
        렉시컬 환경을 갖는다.
      </Text>
      <Text>
        위의 예제에서 전역 변수 increaser와 decreaser에 할당된 함수는 각각
        자신만의 독립된 렉시컬 환경을 갖기 때문에 카운트를 유지하기 위한
        자유변수 counter를 공유하지 않아 카운터의 증감이 연동되지 않는다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_15}></CodeBlock>

      <br />
      <br />

      <Text.Title2>캡슐화와 정보 은닉</Text.Title2>
      <Text>
        캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수
        있는 동작인 메서드를 하나로 묶는 것을 말한다. 캡슐화는 객체의 특정
        프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라
        한다.
      </Text>

      <br />

      <List
        list={[
          '정보를 은닉하여 적절치 못한 접근으로 객체의 상태가 변경되는 것을 방지',
          '객체 간의 상호 의존성(결합도)을 낮춤',
        ]}
      ></List>

      <br />

      <CodeBlock fn={예제_24_16}></CodeBlock>
      <Text>
        위의 예제에서 name 프로퍼티(public)는 현재 외부로 공개되어 있어 자유롭게
        참조하거나 수정할 수 있으나, _age 변수(private)는 지역 변수이므로 함수
        외부에서 참조하거나 변경할 수 없다.
      </Text>
      <Text>
        하지만 위의 예제에서는 sayHi 메서드는 인스턴스 메서드이므로 Person
        객체가 생성될 때마다 중복 생성된다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_17}></CodeBlock>
      <Text>
        인스턴스 메서드 중복 생성을 방지하기 위해 prototype 메서드로
        변경하였지만, Person 생성자 함수의 지역 변수 _age를 참조할 수 없는
        문제가 발생한다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_18}></CodeBlock>
      <Text>
        즉시 실행 함수가 반환하는 Person 생성자 함수와 Person 생성자 함수의
        인스턴스가 상속받아 호출할 Person.prototype.sayHi 메서드는 즉시 실행
        함수가 종료된 이후 호출된다. 하지만 Person 생성자 함수와 sayHi 메서드는
        이미 종료되어 소멸한 즉시 실행 함수의 지역 변수 _age를 참조할 수 있는
        클로저이다.
      </Text>

      <br />

      <CodeBlock fn={예제_24_19}></CodeBlock>
      <Text>
        하지만 위의 코드의 경우 Person 생성자가 여러개의 인스턴스를 생성할 경우
        다음과 같이 _age 변수의 상태가 변경되는 문제점이 있다.
      </Text>

      <br />

      <Text>
        이는 Person.prototype.sayHi 메서드가 단 한 번 생성되는 클로저이기 때문에
        발생하는 현상이다. Person.prototype.sayHi 메서드는 자신의 상위 스코프인
        즉시 실행 함수의 실행 컨텍스트의 렉시컬 환경의 참조를 [[Enviroment]]에
        저장하여 기억한다. 따라서 Person 생성자 함수의 모든 인스턴스가 상속을
        통해 호출할 수 있는 Person.prototype.sayHi 메서드의 상위 스코프는 어떤
        인스턴스로 호출하더라도 하나의 동일한 상위 스코프를 사용하게 된다.
        이러한 이유로 Person 생성자 함수가 여러개의 인스턴스를 생성할 경우 위와
        같이 _age 변수의 상태가 유지되지 않는다.
      </Text>

      <br />

      <Text>
        이처럼 자바스크립트는 정보 은닉을 완전하게 지원하지는 않지만, 다행히도
        2021년 1월에 TC39 프로세스의 stage 3(candidate)에는 클래스에 private
        필드를 정의할 수 있는 새로운 표준 사양이 제안되었다.
      </Text>
    </Wrapper>
  );
};

export default Chapter;

const Wrapper = styled.div`
  ${tw``};
`;
