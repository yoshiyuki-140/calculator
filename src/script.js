let result = 0;
const max_digit = 8; // 8桁を計算の最大値とする
let tmp = Array(max_digit);
tmp.fill(0);
let output = document.getElementById('output');

function pushNumber(num) {
    tmp.push(String(num));
}

function showResult() {
    output.textContent = String(result);
}

class Operations {
    static shift() {
        tmp.pop();
    }
    static divide() {
        result /= parseFloat(tmp.join(''), 10);
    }
    static clear() {
        result = 0;
    }
    static mul() {
        result *= parseFloat(tmp.join(''), 10);
    }
    static AC() {
        result = 0;
        tmp.fill(0);
    }
    static minus() {
        result -= parseFloat(tmp.join(''), 10);
    }
}
function calc() {
    let button = document.getElementsByClassName('button')
    button.addEventListener('click',
        function () {
            switch (button.id) {
                case 'shift':
                    result /= 10;
                    break;
                case 'seven':
                    pushNumber(7);
                    break;
                case 'eight':
                    pushNumber(8);
                    break;
                case 'nine':
                    pushNumber(9);
                    break;
                case 'divide':
                    result = result / tmp;
                    break;

                case 'clear':
                    tmp.fill('0');
                    break;

                case 'four':
                    pushNumber(4);
                    break;

                case 'five':
                    pushNumber(5);
                    break;

                case 'six':
                    pushNumber(6);
                    break;

                case 'mul':
                    break;

                case 'AC':
                    result = 0;
                    tmp.fill('0');
                    break;

                case 'one':
                    pushNumber(1);
                    break;

                case 'two':
                    pushNumber(2);
                    break;

                case 'three':
                    pushNumber(3);
                    break;

                case 'minus':
                    result -= parseFloat(tmp.join(''), 10);
                    break;

                case 'zero':
                    pushNumber(0);
                    break;

                case 'double-zero':
                    pushNumber(0);
                    pushNumber(0);
                    break;

                case 'decimal-point':
                    tmp.push('.');
                    break;

                case 'equal':
                    result = parseFloat(tmp.join(''), 10);
                    break;

                case 'plus':
                    result += parseFloat(tmp.join(''), 10)
                    break;
            }
        }
    );
}