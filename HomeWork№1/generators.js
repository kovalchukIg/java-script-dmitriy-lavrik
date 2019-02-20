function clearDefect(str) {
    return str.replace(/\s+/g,' ').split(" ");
}

function* getWords(str) {
    let normalizeStrng = clearDefect(str);
    for (let iter of normalizeStrng){
        yield iter;
    }
}

function wordsCount(str) {
    let normalizeStrng = clearDefect(str);
    return normalizeStrng.length;
}

let test = "Всем 12 привет! Ура ура!";

let genWords = getWords(test);

console.log(wordsCount(test));
console.log(genWords.next().value);
console.log(genWords.next().value);
console.log(genWords.next().value);
console.log(genWords.next().value);
console.log(genWords.next().value);
console.log(genWords.next().value);


