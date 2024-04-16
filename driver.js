// Немного не понял на счет написания кода одной стракой. Надеюсь я сделал правильно:)

const hasLicence = true
const age = 22;
const isDrunk = false;

const canDrive = (age >= 18) && hasLicence && !isDrunk;

console.log(`Сможет ли пользователь сесть за руль: ${canDrive ? 'Да!' : 'Нет:('}`)