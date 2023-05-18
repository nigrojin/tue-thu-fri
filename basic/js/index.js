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


// 안전한 정수의 최대값
var max_safe_value = Number.MAX_SAFE_INTEGER;

console.log(max_safe_value);