import { ReferenceNumberGenerator } from "./shared";

const data = {
    regType: "RI",
    currentDate: new Date(),
    seq: 1,
};

// const template = "{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}";
// const template = "{REG_TYPE}/{YYMMDD}/{SEQ}";
const template = "{REG_TYPE}/{DDMMYYYY}/{SEQ}";

const generator = new ReferenceNumberGenerator(data.currentDate);
const result = generator.generateNumber(template, data.seq, data.regType);

console.log(result);
