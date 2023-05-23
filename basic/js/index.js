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


/*
  반복문
  반복적인 작업을 수행한다

  1 for 반복문
  2 while 반복문
*/


// for 반복문

// for (var i = 1; i <= 10; i++) { // 블록
//   console.log(i + "번 실행되었습니다")
// }

// 1부터 10까지의 합을 구하시오

// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += i; // 더하기 대입 연산자, sum = sum + i
// }

// console.log(sum);


// while 반복문

// var i = 1; // 변수 초기화

// while (i <= 10) { // while (조건)
//   console.log(i + "번 실행되었습니다");

//   // 변수값 증가
//   i++;
// }



// 1 + 1/2 + 1/3 + ... 1/10 까지의 합을 구하세요 lol
// for 반복문 이용 


// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += (1/i);
// }

// console.log(sum);


/*
  변수
  값을 저장하는 컨테이너

  1 기본 사용
  2 변수의 범위
*/


// 1 기본 사용

// var foo = "bar"; // 변수 초기화

// console.log(foo);


// var foo = "bar" // 변수초기화

// foo = "baz" // 값을 재할당 가능

// console.log(foo)


// var foo; // 변수 선언

// foo = "bar"; // 나중에 값 할당 가능

// console.log(foo)


// 2 변수의 범위


// 전역변수 (global)

// 함수 밖에서 선언된 변수. 소스코드 어디에서든지 접근 가능하다
// var varInGlobal = true;

// console.log(varInGlobal); // 접근 가능


// 지역 변수 (local)
// 함수 내에서 선언된 변수. 해당 함수 내에서만 접근 가능하다

// function f() {
//   var varInFunction = true;
// }

// console.log(varInFunction); // varInFunction is not defined


/*
  함수
  호출할 때만 실행되는 코드

  1 함수 선언
  2 Hoisting
  3 매개변수와 인자
  4 return
  5 callback
*/


/*
  함수 선언 방법

  1 함수 선언식
  2 함수 표현식
*/


// 1 함수 선언식
// function 함수이름() {함수정의}

// function f() {
//   console.log("foo")
// }

// f(); // 함수 호출


// 2 함수 표현식
// 변수에 익명함수를 할당한다

// var f = function () {
//   console.log("foo")
// }

// f(); // 호출


/*
  2 Hoisting (게양)

*/


// f()

// // 함수 선언이 호출 시점보다 위로 올라간다
// // 함수 선언식에만 해당된다
// function f() {
//   console.log("foo")
// }


// f() // f is not defined

// var f = function () {
//   console.log("foo")
// }


// 3 매개변수와 인자


// function add(x, y) { // x, y: 매개변수 (인자를 치환한 변수)
//   console.log("결과:", x + y);
// }

// add(1, 2); // 1,2: 인자 (함수에 실제로 전달되는 값)



// 4 return

// function add(x, y) {
//   return x + y; // 함수가 결과를 반환한다
// }

// var r = add(1, 2);

// console.log(r)


// 5 callback
// 함수 인자

// function f(callback) {
//   let r = callback(); // callback 호출
//   console.log(r);
// }

// function cb() {
//   return "foo"
// }

// f(cb); // cb: callback


// 콜백의 예시

// function getTime() {

//   // 현재 시간을 리턴하는 함수
//   var time = new Date().toLocaleTimeString();

//   console.log(time);
// }

// // setInterval(callback, ms)
// // ms마다 callback을 실행한다
// // 1000ms = 1s
// setInterval(getTime, 1000);



// Q. 나이가 18세 이상이면 "성인입니다" 그렇지 않으면 "성인이 아닙니다"를 출력하는
// 함수를 선언해보세요
// (나이를 인자로 전달하세요)


// function isAdult(age) {

//   if (typeof age !== "number") {
//     console.log("인자는 숫자만 가능합니다");
//     return; // 함수의 실행을 중단한다
//   }

//   if (age >= 18) {
//     console.log("성인입니다")
//   } else {
//     console.log("성인이 아닙니다")
//   }
// }

// isAdult(20);



/*
  배열 (Array)
  한개 이상의 값을 갖는 데이터 타입

  1 배열의 아이템에 접근하기
  2 배열 메소드
  3 배열 순회하기
*/


// 1 아이템에 접근하기

// var arr = ["foo", "bar", "baz"]; // 배열


// console.log(arr[0]); // foo

// console.log(arr[1]) // bar

// console.log(arr[2]) // baz


// console.log(arr.length) // 3


// 아이템 수정
// arr[2] = "BAZ"

// console.log(arr)


// arr[3] = "lol" // 아이템 추가

// console.log(arr);



/*
  배열의 메서드
  배열에 특정한 작업을 수행한다

  Array.push()
  Array.pop()
  Array.concat()
  Array.sort()
*/


// push()

// var arr = ["foo", "bar"];

// arr.push("baz"); // push(newItem1, newItem2, ..): 새로운 아이템을 추가한다

// console.log(arr); // foo, bar, baz


// pop()

// var arr = ["foo", "bar", "baz"];

// arr.pop(); // 가장 마지막의 아이템 1개를 제거한다

// console.log(arr); // foo, bar


// concat()

// var arr1 = ["foo", "bar"];
// var arr2 = ["baz", "lol"];

// // Array1.concat(Array2): Array2를 Array1뒤에 연결한다
// // concat: concatenate
// var r = arr1.concat(arr2); 

// console.log(r) // foo, bar, baz, lol


// sort()

// var arr = ["foo", "bar", "baz"];

// arr.sort(); // 값이 문자열일 경우, 알파벳순으로 정렬한다

// console.log(arr); // bar, baz, foo


/*
  객체 (Object)

  데이터와 함수의 집합
*/


// var cat = {
//   // 속성 (property)
//   name: "치즈",
//   home: null,
//   // 속성 값이 함수인 것을 메서드(Method)라고 한다
//   sound: function () {
//     return "야옹"
//   }
// }


// // cat에 접근하기

// console.log(cat.name) // 치즈
// console.log(cat["name"]) // 치즈

// console.log(cat.home) // null

// console.log(cat.color) // undefined

// console.log(cat.sound()) // 야옹


// // 속성 추가

// cat.age = 2;

// console.log(cat.age); // 2


// // 속성 변경

// cat.home = "삼산동" // (입양됨)

// console.log(cat.home); // 삼산동


// // 속성 삭제
// delete cat.age;

// console.log(cat.age); // undefined;


var beers = [
  { name: "기네스", origin: "아일랜드"},
  { name: "하이네켄", origin: "네덜란드"},
  { name: "버드와이저", origin: "미국"},
]

// 하이네켄의 원산지에 접근해보세요

console.log(beers[1].origin); // 네덜란드

