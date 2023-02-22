const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x)).join('');
const message = Array.from('Dont tell anyone'.toUpperCase());
const encrypted = message.map((letter) => {
    const i = (alphabet.indexOf(letter) + 5) % alphabet.length;
    return alphabet[i];
});
console.log(encrypted);