const language = prompt(`Введите ваш радной язык (En, Ru, De.)`);
const ru1 = 'Ru';
const en1 = 'En';
const de1 = 'De';
const ru2 = 'ru';
const en2 = 'en';
const de2 = 'de';
switch (language) {
    case ru1:
        console.log('Здравйствуйте');
        break
    case en1:
        console.log('Hello');
        break
    case de1:
        console.log('Guten Tag');
        break
        case ru2:
        console.log('Здравйствуйте');
        break
    case en2:
        console.log('Hello');
        break
    case de2:
        console.log('Guten Tag');
        break
    default:
        console.log('Вы не ввели язык');
}