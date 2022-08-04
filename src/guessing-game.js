class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.item = Math.round((this.min + this.max) / 2);
        return this.item;
    }

    lower() {
        this.max = this.item;
    }

    greater() {
        this.min = this.item;
    }
}

module.exports = GuessingGame;
