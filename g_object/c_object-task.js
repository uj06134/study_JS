// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
let market = new Object();

let user1 = {
    name: "홍길동",
    age: 30,
    point: 3500,
};
let user2 = {
    name: "이순신",
    age: 22,
    point: 0,
};
let user3 = {
    name: "장보고",
    age: 66,
    point: 9500,
};

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

// console.log(market.user1);
// console.log(market.user2);
// console.log(market.user3);

for (let i = 0; i < 3; i++) {
    console.log(market[`user${i + 1}`]);
}
