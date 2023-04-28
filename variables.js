// var num = 10;
// num = 20;
// console.log(num);

// var greeting = "안녕하세요" // 문자열 선언

// var a = 5;
// var b = 3;
// console.log(a+b);

// 배열
// var mbti = ["Infp", "istp", "istj"];
// console.log(mbti[0]);

// mbti[3] = "esfp"; //추가
// mbti.push("esfp", "isfj"); // 마지막에 추가

//스프레드 문법
//var newMbti = [...mbti, "esfp", "istj"];
//console.log(newMbti);

//console.log(mbti.pop()); //마지막에 있는 요소가 제거되며 튀어나옴

//console, log(mbti.shift()); //맨 앞 요소가 제거되며 튀어나옴

//slice 는 시작점 끝점 있음, 끝점은 포함하지 않음 (0,2)일 경우 0, 1 출력
//console.log(mbti.slice(-1)); // 끝에서부터 반환(이 경우 마지막 출력)

//join은 합치다, 데이터들을 모아 문자열로 만드는.
//console.log(mbti.join("-"));

//sort()  정렬

//reverse() 뒤집어서 출력

//console.log(mbti.sort().reverse()); // 오름차순 정렬 후 뒤집어서 출력-> 내림차순 출력

//switch

var mbti = "infp";
var val;

switch (mbti) {
  case "infp":
    val = "infp"; // break 써야함
  case "enfp":
    val = "enfp";
  default:
    val = "값 없음"; // 만족이 되어도 제어를 멈추지 않아서 이게 출력
}
console.log(val);

//에러 처리

try {
  //에러 발생 가능성o 코드
  //myfunc(); //정의한 적 없는 함수 사용 (가정)
  throw new Error("에러"); //에러 던지기
} catch (error) {
  //에러 발생 시 실행되는 코드
  console.log("에러 발생");
} finally {
  //에러 발생 여부 상관없이 무조건 실행
  console.log("무조건 실행");
}

//함수 선언문
function multifly(a, b) {
  return a * b;
}
console.log(multifly(10, 5));
var result = multifly(10, 5);
console.log(result);

// 함수 표현식
var multifly = function calc(a, b) {
  return a * b;
}; // 함수를 변수에 할당할 수도 있음

console.log(multifly(10, 5));
console.log(calc(10, 5)); // 에러

//변수 선언 키워드는 자바스크립트 엔진이 먼저 끌어올려 인지됨
// let
let word; // 변수 선언이 순차적으로 인식되도록

const b = 2; // 값을 할당해야만 에러가 나지 않음& 값을 덮어쓸 수 없음
b = 3; // xxx!!
// ex. const PI = 3.14;

// const로 선언된 변수에 할당된 객체
const student = {
  grade: 1,
  class: 3,
};
student.grade = 2; //이건 가능. 객체 안에 있는 속성값이니까
student = {
  num: 20123, // 새로운 객체 대입. 이건 오류
};

//화살표 함수
let plus = (a, b) => {
  return a + b;
};
let plus2 = (a, b) => a + b; // 간략히 나타내는 버전

console.log(plus(2, 3));

let print = (word) => {
  console.log(word);
};
print("Hello!"); // 위 함수를 실행한 것

let myfunc = () => {
  // 파라미터가 없는 함수. 괄호는 써줘야 함
  return 1;
};
console.log(myfunc());
