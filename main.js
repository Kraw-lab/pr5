// ЗАВДАННЯ 1: Візитки 12х3
function task1() {
    var name = prompt('Input name', 'Ваше Ім’я');
    var position = prompt('Input position', 'Студент');
    var phone = prompt('Input phone', '00-00-00');

    // Формуємо вміст однієї візитки (комірки)
    var visitcard = '<img src="images/visit_card.gif" alt="лого"><br>' +
                    '<b>' + name + '</b><br>' +
                    '<i>' + position + '</i><br>' +
                    phone;

    var res = '<table border="1">';
    for (var y = 0; y < 12; y++) {
        res += '<tr>';
        for (var x = 0; x < 3; x++) {
            res += '<td>' + visitcard + '</td>';
        }
        res += '</tr>';
    }
    res += '</table>';

    document.getElementById('output').innerHTML = res;
}

// ЗАВДАННЯ 2: Вислови авторів (приклад для варіанту 9-13)
function say(message) {
    alert(message);
}

function task2() {
    var out = document.getElementById('output');
    // Очищуємо поле і додаємо кнопки за вашим варіантом
    out.innerHTML = '<h3>Виберіть автора:</h3>' +
        '<button onclick="say(\'People make lies up to make they self feel good.\')">Future</button> ' +
        '<button onclick="say(\'No cap and gown, I aint go to class Id rather die before i come in last.\')">Plsyboi Carti</button> ' +
        '<button onclick="say(\'Ive come to the conclusion you cant kill me if u kill you first.\')">Juice WRLD</button> ' +
        '<button onclick="say(\'Lets go meet the sandman, let our spirits dance.\')">A$AP Rocky</button> ' +
        '<button onclick="say(\'You should try you something else cause that hating aint making bread.\')">Rich Amiri</button>';
}

// ЗАВДАННЯ 3: Математичні функції та константи
function task3() {
    var out = document.getElementById('output');
    var m = Math;
    var res = "<h3>КОНСТАНТИ</h3>";
    res += "Значення константи е = " + m.E + "<br>";
    res += "Значення константи π = " + m.PI + "<br>";
    res += "Десятковий логарифм е = " + m.LOG10E + "<br>";
    res += "Натуральний логарифм 10 = " + m.LN10 + "<br>";
    res += "Корінь квадратний із двох = " + m.SQRT2 + "<br><br>";

    res += "<h3>ФУНКЦІЇ</h3>";
    res += "Результат зведення в ступінь 4^2: y = " + m.pow(4, 2) + "<br>";
    res += "Результат добування квадратного кореня з 4: y = " + m.sqrt(4) + "<br>";
    res += "Результат обчислення абсолютного значення -9: y = " + m.abs(-9) + "<br>";
    res += "Результат обчислення косинуса нуля: y = " + m.cos(0) + "<br>";
    res += "Результат обчислення синуса π/2: y = " + m.sin(m.PI / 2) + "<br>";

    out.innerHTML = res;
}