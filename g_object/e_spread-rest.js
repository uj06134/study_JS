const user = {
    id: 1,
    name: "khj",
};

// // 비구조화 할당(구조 분해)
// const { id, name } = user;
// console.log(id, name);

// 추가: 새로운 값 추가
const userAdd = { ...user, age: 12 };
console.log(userAdd);

// 수정: 기존 값 변경
const userModify = { ...user, name: "kim" };
console.log(userModify);

// rest: 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣는다.
const userUpdated = { ...user, age: 20 };

const { age, ...rest } = userUpdated;
console.log(age, rest);
