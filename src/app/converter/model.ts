export class currencyconvert {
    constructor(
        public from: string,
        public amount: number,
        public to: string
    ) { }
    sameCurrency(from: string, to: string): boolean {
        return from == to ? true : false;
    }
}