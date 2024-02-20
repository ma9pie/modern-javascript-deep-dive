export const chapter24 = {
  ex_24_01: () => {
    const x = 1;
    const outerFn = () => {
      const x = 10;
      const innerFn = () => {
        console.log(x); // 10
      };
      innerFn();
    };
    outerFn();
  },
  ex_24_02: () => {
    const x = 1;
    const outerFn = () => {
      const x = 10;
      innerFn();
    };
    const innerFn = () => {
      console.log(x); // 1
    };
    outerFn();
  },
  ex_24_03: () => {
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
  },
  ex_24_04: () => {
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
  },
  ex_24_05: () => {
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
  },
  ex_24_06: () => {
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
  },
  ex_24_07: () => {
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
  },
  ex_24_08: () => {
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
  },
  ex_24_09: () => {
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
  },
  ex_24_10: () => {
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
  },
  ex_24_11: () => {
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
  },
  ex_24_12: () => {
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
  },
  ex_24_13: () => {
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
  },
  ex_24_14: () => {
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
  },
  ex_24_15: () => {
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
  },
  ex_24_16: () => {
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
  },
  ex_24_17: () => {
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
  },
  ex_24_18: () => {
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
  },
  ex_24_19: () => {
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
  },
};
