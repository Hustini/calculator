document.addEventListener('DOMContentLoaded', function () {
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let four = document.getElementById('four')
    let five = document.getElementById('five')
    let six = document.getElementById('six')
    let seven = document.getElementById('seven')
    let eight = document.getElementById('eight')
    let nine = document.getElementById('nine')
    let zero = document.getElementById('zero')
    let plus = document.getElementById('plus')
    let minus = document.getElementById('minus')
    let multiply = document.getElementById('multiply')
    let divide = document.getElementById('divide')
    let equal = document.getElementById('equal')
    let point = document.getElementById('point')
    let text = document.getElementById('text')
    let clear = document.getElementById('clear')
    let calc = ''

    function add_to_calculation(symbol) {
        calc = calc + symbol
        text.value = calc
    }

    function evaluate_to_calculation() {
        text.value = eval(calc)
        calc = ''
    }

    function clear_field() {
        text.value = ''
        text.value = ''
        calc = ''
    }

    one.addEventListener('click', function() {add_to_calculation('1');});
    two.addEventListener('click', function() {add_to_calculation('2');});
    three.addEventListener('click', function() {add_to_calculation('3');});
    four.addEventListener('click', function() {add_to_calculation('4');});
    five.addEventListener('click', function() {add_to_calculation('5');});
    six.addEventListener('click', function() {add_to_calculation('6');});
    seven.addEventListener('click', function() {add_to_calculation('7');});
    eight.addEventListener('click', function() {add_to_calculation('8');});
    nine.addEventListener('click', function() {add_to_calculation('9');});
    zero.addEventListener('click', function() {add_to_calculation('0');});
    plus.addEventListener('click', function() {add_to_calculation('+');});
    minus.addEventListener('click', function() {add_to_calculation('-');});
    multiply.addEventListener('click', function() {add_to_calculation('*');});
    divide.addEventListener('click', function() {add_to_calculation('/');});
    point.addEventListener('click', function() {add_to_calculation('.');});
    equal.addEventListener('click', function (){evaluate_to_calculation()})
    clear.addEventListener('click', function () {clear_field()})
})
