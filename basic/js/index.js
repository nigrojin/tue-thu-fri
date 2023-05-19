// console.log("Hello JavaScript");


/*
  JavaScript 튜토리얼

  1 데이터 타입과 기본 메서드
  2 연산자
  3 조건문
  4 반복문
  5 변수
  6 함수
  7 배열
  8 객체
  9 클래스
  10 에러와 에러처리
  11 비동기 작업
  12 JSON
*/


/*
  데이터 타입

  1 String
  2 Number
  3 Boolean
  4 null
  5 undefined
  6 BigInt
*/


/* 
  1 String (문자열)
  연속된 문자를 나타낸다
*/

// var foo = "bar"; // 따옴표 안에 문자를 입력한다

// console.log(foo); // bar

// console.log(typeof foo) // string

// console.log(foo[0]) // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r

// // 문자의 갯수
// console.log(foo.length) // 3


/*
  2 Number
  -(2^1024 - 1)에서 2^1024 -1 사이의 숫자를 나타낼 수 있다

  값의 종류:
    정수, 소수, NaN(Not a Number), +Infinity, -Infinity

*/


// 정수
// var year = 2023;

// console.log(year) // 2023
// console.log(typeof year) // number

// // 소수
// var pi = 3.14

// console.log(pi); // 3.14


// // NaN
// var nan = 2 - "foo";

// console.log(nan); // NaN


// // Number 이 표현할 수 있는 가장 큰수
// var max_value = Number.MAX_VALUE;

// console.log(max_value)

// // Number가 표현할 수 있는 가장 작은 수
// var min_value = -Number.MAX_VALUE;

// console.log(min_value);

// // +Infinity

// var infinity = Number.MAX_VALUE * 1.1;

// console.log(infinity); // Infinity

// // -Infinity

// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity) // -Infinity


/*
  3 Boolean
  참 또는 거짓의 값을 갖는다
*/

// var bool = true;

// console.log(bool); // true

// console.log(typeof bool) // boolean

// // 비교연산은 boolean을 리턴한다
// console.log(1 > 0) // true
// console.log(1 > 2) // false



/*
  4 null
  값이 없음을 나타낸다
*/


// var foo = null;

// console.log(foo); // null

// console.log(typeof foo) // object


/*
  5 undefined
  정의되지 않은 변수
*/

// var foo;

// console.log(foo); // undefined
// console.log(typeof foo) // undefined


/*
  6 BigInt
  safe integer 밖의 정수를 나타낸다
  숫자뒤에 n을 붙여서 BigInt 값을 만들 수 있다

  safe integer(안전한 정수)의 범위: -(2^53 - 1) ~ 2^53 - 1

  안전한 정수: Number타입이 정확하게 표현할 수 있는 정수
*/


// // 안전한 정수의 최대값
// var max_safe_value = Number.MAX_SAFE_INTEGER;
// console.log(max_safe_value);


// // 안전한 정수의 최소값
// var min_safe_value = Number.MIN_SAFE_INTEGER;
// console.log(min_safe_value)

// 9가 16개
// var not_safe_integer = 9999999999999999;

// console.log(not_safe_integer) // 10000000000000000

// var bigint = 9999999999999999n;

// console.log(bigint);

// console.log(typeof bigint); // bigint


/*
  1 Number 타입이 표현할 수있는 숫자의 범위
  -(2^1024 - 1) ~ 2^1024 - 1

  2 안전한 정수의 범위
  -(2^53 - 1) ~ 2^53 - 1

  3 없음을 나타내는 데이터 타입
  null

  4 정의되지 않은 변수를 나타내는 용어는?
  undefined
*/


/*
  기본 데이터타입의 메서드

  데이터에 특정한 작업을 수행한다

  1 string 메서드
  2 number 메서드
*/


/*
  1 String 메서드

  toUpperCase()
  trim()
  concat()
  split()
*/


// toUpperCase()

// var foo = "bar";

// console.log(foo.toUpperCase()); // 문자열의 모든 문자를 대문자로 변환한다


// var foo = "  foo  ";
// console.log(foo.trim()); // 문자열의 앞,뒤 공백을 제거한다


// concat(): concatenate 연결
// var foo = "Hello"
// var bar = "JavaScript"

// var result = foo.concat(" ", bar); // Hello JavaScript

// console.log(result);


// split()

// var foo = "Hello JavaScript";

// console.log(foo.split(" ")); // 문자열을 나누는 메서드. 배열을 리턴한다


/*
  2 Number 메서드

  toPrecision()
  isInteger()
  isNaN()
*/


// toPrecision()

// var pi = Math.PI;

// console.log(pi);
// console.log(pi.toPrecision(50)); // 정밀도



/*
  연산자

  1 수리연산자
  2 대입연산자
  3 비교 연산자
  4 논리 연산자
  5 타입 연산자
*/


/*
  1 수리연산자

  사칙연산
  + - * /

  증가연산자
  ++

  감소연산자
  --

  제곱연산자
  **

  계수연산자
  %
*/


// 사칙연산
// var add = 1 + 1
// var subtract = 2 - 1
// var divide = 1 / 2
// var multiply = 1 * 1

// console.log(add)


// 증가, 감소 연산자
// var i = 1;
// i++; // 1을 증가시킨다

// console.log(i);



// 제곱연산자
// var exp = 2 ** 7

// console.log(exp) // 128


// 계수연산자(나머지)

// var mod = 5 % 2;

// console.log(mod) // 1


/*
  2 대입 연산자

  변수 대입 연산자
  =
  덧셈 대입 연산자
  +=
  뺄셈 대입 연산자
  -=
  곱셈 대입 연산자
  *=
  나눗셈 대입 연산자
  /=
  제곱 대입 연산자
  **=
  계수 대입 연산자
  %=
*/


// 변수 대입 연산자
// var foo = "bar";

// console.log(foo);


// 덧셈 대입 연산자
// var longVariablesName = 1;

// // longVariablesName = longVariablesName + 1
// longVariablesName += 1;

// console.log(longVariablesName);


/*
  3 비교 연산자

  동등연산자
  ==
  비동등연산자
  !=

  엄격동등연산자
  ===
  엄격비동등연산자
  !==

  크다
  >
  크거나 같다
  >=

  작다
  <
  작거나 같다
  <=
*/


// 동등연산자

// console.log(1 == 2);
// // false
// console.log("foo" == "bar");
// // false
// console.log(2023 == "2023");
// // true
// console.log(null == undefined);
// // true

// 엄격동등연산자 (권장)
// console.log(1 === 2)
// // false
// console.log("foo" === "bar")
// // false
// console.log(2023 === "2023");
// // false
// console.log(null === undefined)
// // false


// // 비동등연산자
// console.log(1 != 2)
// // true
// console.log("foo" != "bar")
// // true
// console.log(2023 != "2023")
// // false
// console.log(null != undefined)
// // false


// 엄격비동등연산자

// console.log(1 !== 2)
// // true
// console.log("foo" !== "bar");
// // true
// console.log(2023 !== "2023");
// // true
// console.log(null !== undefined);
// // true


/*
  4 논리연산자

  && (AND)
  expr 1 && expr 2

  || (OR)
  expr 1 || expr 2

  ! (NOT)
  !expr

  expr(expression): 코드 (표현식)
*/


// && (AND)
// console.log(1 > 0 && 1 < 2) // 두 조건이 모두 참일 때 true를 리턴한다


// || (OR)
// console.log(1 > 0 || 1 > 2) // 두 조건 중 하나가 참이면 true를 리턴한다

// ! (NOT)

// console.log(!(1 > 0)) // false


// boolean 타입이 아닌 데이터를 부정할 경우 (중요)

// console.log(!null) // true

// console.log(!undefined) // true

// console.log(!0) // true

// console.log(!2023); // false

// console.log(!""); // true

// console.log(!"foo") // false


/*
  5 typeof 연산자
  인자의 타입을 문자열로 리턴한다
*/

// var foo = "bar";

// console.log(typeof foo); // string

// var bar = 2;

// console.log(typeof bar); // number


/*
  조건문

  1 if 조건문
  2 switch 조건문
  3 ?(삼항연산자) 조건문
*/


/*
  1 if 조건문

  if (조건) {
    조건이 참이면 실행되는 코드
  }
*/


// var year = 2023

// if (year === 2023) {
//   console.log("이번 년도")
// }


// if else

// var year = 2023

// if (year === 2023) {
//   console.log("이번 년도")
// } else {
//   console.log("이번 년도가 아닙니다")
// }


// if elseif else

// var year = 2023;

// if (year === 2022) {
//   console.log("작년")
// } else if (year === 2023) {
//   console.log("이번 년도")
// } else if (year === 2024) {
//   console.log("내년")
// } else {
//   console.log("가까운 년도가 아닙니다")
// }


/*
  2 switch 조건문
  엄격동등연산을 수행한다
*/

// var year = 2023;

// switch (year) {
//   case 2022:
//     console.log("작년");
//     break;
  
//   case 2023:
//     console.log("이번 년도");
//     break;

//   case 2024:
//     console.log("내년")
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다")
// }


/*
  3 ?(삼항연산자)

  조건 ? 값1: 값2

  조건이 참이면 값1을 리턴한다
  조건이 거짓이면 값2를 리턴한다
*/

// var year = 2023;

// var result = year === 2023 ? "이번 년도" : "이번 년도가 아닙니다";

// console.log(result);


// 나이가 성인이면 "성인입니다" 그렇지 않으면 "성인이 아닙니다"를 수행하는 조건문을 만들어 보세요

// if 조건문, 삼항연산자 조건문 두가지 방법

// var age = 20;

// if (age >= 18) {
//   console.log("성인입니다")
// } else {
//   console.log("성인이 아닙니다")
// }

// var result = age >= 18 ? "성인입니다" : "성인이 아닙니다"

// console.log(result);