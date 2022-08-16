class GuessingGame { 
    min;
    max;
    low;
    previousDigit;
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.previousDigit = Math.round((this.min + this.max) / 2);
        return this.previousDigit;
    }

    lower() {
        this.max = this.previousDigit;
        this.low = true;

    }

    greater() {

        this.min = this.previousDigit;
        this.low = false;
    }
}

module.exports = GuessingGame;

let game = new GuessingGame();
game.setRange(1, 5000);
let digit = Math.floor(Math.random() * 5000) + 1;
console.log(`The number is ${digit}`);
while(true) {
    let guess = game.guess();
    console.log(guess);
    let gu = game.guess();
    if(gu === digit) break;
    if(gu < digit) game.greater();
    else game.lower();
}
