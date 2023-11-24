import { ReferenceNumberGenerator } from "../shared";

describe("ReferenceNumberGenerator", () => {
    test("Example test case 1", () => {
        const data = {
            regType: "RI",
            currentDate: new Date("2023-01-01"),
            seq: 1,
        };

        const template = "{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}";
        const generator = new ReferenceNumberGenerator(data.currentDate);
        const result = generator.generateNumber(template, data.seq, data.regType);
        expect(result).toBe("0001-2023/01/01-RI");
    });

    test("Example test case 2", () => {
        const data = {
            regType: "RI",
            currentDate: new Date("2023-01-01"),
            seq: 1,
        };

        const template = "{REG_TYPE}/{YYMMDD}/{SEQ}";
        const generator = new ReferenceNumberGenerator(data.currentDate);
        const result = generator.generateNumber(template, data.seq, data.regType);
        expect(result).toBe("RI/230101/0001");
    });
});
