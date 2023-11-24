class ReferenceNumberGenerator {
    private currentDate: Date;

    constructor(currentDate: Date) {
        this.currentDate = currentDate;
    }

    private padZero(value: number, length: number): string {
        return value.toString().padStart(length, "0");
    }

    public generateNumber(
        template: string,
        seq: number,
        regType: string
    ): string {
        const year = this.currentDate.getFullYear().toString();
        const month = this.padZero(this.currentDate.getMonth() + 1, 2); // returns a zero-based month, where January is represented by 0
        const day = this.padZero(this.currentDate.getDate(), 2);
        const shortYear = year.slice(2);

        const result = template
            .replace("{SEQ}", this.padZero(seq, 4))
            .replace("{YYYY}", year)
            .replace("{YY}", shortYear)
            .replace("{MM}", month)
            .replace("{DD}", day)
            .replace("{DDMMYYYY}", `${day}${month}${year}`)
            .replace("{YYMMDD}", `${shortYear}${month}${day}`)
            .replace("{REG_TYPE}", regType);

        return result;
    }
}

export default ReferenceNumberGenerator;
