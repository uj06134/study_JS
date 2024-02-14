// 함수는 무조건 값으로 본다.
// function add(number1: number, number2: number): number {
//     return number1 + number2;
// }

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 초기값을 설정할 수 있다.
function add(number1: number, number2: number, number3 = 0): number {
    return number1 + number2 + number3;
}

let result = add(1, 3);
console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받는다.
// 이 때 닉네임의 기본 값은 '없음'으로 설정한다.
function getInfo(id: string, password: string, nickname = "없음") {
    console.log(id, password, nickname);
}

getInfo("khj1234", "1234");