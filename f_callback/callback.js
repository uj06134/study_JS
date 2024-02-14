// arrow expression(function)
// function printName(name) {
//     console.log(name);
// }

// const printName = (name) => {
//     console.log("name");
// };

// printName();

// 두 정수의 덧셈 결과 출력
const add = (number1, number2, callback) => {
    if (callback) {
        callback(number1 + number2);
    }
    return number1 + number2;
};

add(1, 4, (result) => {
    console.log(result);
});

// // 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
const multply = (number1, number2, callback) => {
    if (callback) {
        callback(number1 * number2);
    }

    return number1 * number2;
};

const total = multply(3, 5, (result) => {
    console.log(result * 2);
});

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
const fullName = (firstName, lastName, callback) => {
    if (callback) {
        callback(firstName + lastName);
    }
    return firstName + lastName;
};

const result = fullName("김", "훈종", (result) => {
    console.log(result + "님");
});

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤 개수가 5개 이하라면 true 아니면 false
const count = (productPrice, total, callback) => {
    if (callback) {
        callback(total / productPrice);
    }
    return total / productPrice;
};

const boolean = count(1000, 5000, (boolean) => {
    console.log(boolean <= 5);
});

// 결제 상품 가격과 결제 상태를 전달받아서 결제 상태가 true일 때 결제완료, false일 경우 결제 취소 출력
function setStatus(price, status, callback) {
    if (callback) {
        callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }
}

setStatus(3000, false, (message) => {
    console.log(message);
});

// 두 수를 나눠 몫을 구하고 나머지를 구해라
const quotientAndRemainder = (number1, number2, callback) => {
    const result = {
        quotient: Math.floor(number1 / number2),
        remainder: number1 % number2,
    };

    if (callback) {
        callback(result.quotient, result.remainder);
    }

    return result;
};

console.log("Quotient:", result.quotient); // Output: 2
console.log("Remainder:", result.remainder); // Output: 1
