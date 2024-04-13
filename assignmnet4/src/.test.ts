import { expect, test} from 'vitest'
import { arabic2bumblor } from "./BumblorArabicConverter.ts";
import { bumblor2arabic } from "./BumblorArabicConverter.ts";

test('Out of bounds error', () => {
        expect(() => arabic2bumblor(5000)).toThrow("Out of Range");
        expect(() => arabic2bumblor(-5000)).toThrow("Out of Range");
        expect(() => arabic2bumblor(-4999.01)).toThrow("Out of Range");
        expect(() => arabic2bumblor(4999.01)).toThrow("Out of Range");
        expect(() => arabic2bumblor(-4999)).not.toThrow("Out of Range");
        expect(() => arabic2bumblor(4999)).not.toThrow("Out of Range");
    }
);

test('Possible strings', () => {
    expect( arabic2bumblor(1666)).toBe("MDCLXVI");
    expect( arabic2bumblor(-3240)).toBe("-MMMCCXXXX");
    expect( arabic2bumblor(-3240.634)).toBe("-MMMCCXXXX");
    expect( arabic2bumblor(0)).toBe("O");
});

test('Possible nummbers', () =>{
    expect(bumblor2arabic("-MMMCCXXXX")).toBe(-3240);
    expect(bumblor2arabic("MMMCCXXXX")).toBe(3240);
})

test('Too many of value', () =>{
    expect(() => bumblor2arabic("MMMMM")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("MMMM")).not.toThrow("Malformed Number");
    expect(() => bumblor2arabic("CCCCC")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("CCC")).not.toThrow("Malformed Number")
    expect(() => bumblor2arabic("XXXXX")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("XX")).not.toThrow("Malformed Number")
    expect(() => bumblor2arabic("IIIII")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("IIII")).not.toThrow("Malformed Number")
    expect(() => bumblor2arabic("DD")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("D")).not.toThrow("Malformed Number");
    expect(() => bumblor2arabic("LL")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("L")).not.toThrow("Malformed Number");
    expect(() => bumblor2arabic("VV")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("V")).not.toThrow("Malformed Number");
})
test('Only in a row', () => {
    expect(() => bumblor2arabic("-MMCMCXXX")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("-MXMCCXX")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("-MMCCXXDX")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("-MMMCCXXX")).not.toThrow("Malformed Number");
})

test('lowerCase', () =>{
    expect(() => bumblor2arabic("mdclxvi")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("MDCLXVI")).not.toThrow("Malformed Number");
})

test('0', () => {
    expect(() => bumblor2arabic("OMDCLXVI")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("OO")).toThrow("Malformed Number");
    expect( bumblor2arabic("O")).toBe(0);
})

test("erroneous spaces", () => {
    expect(() => bumblor2arabic(" MDCLXVI")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("MDCLXVI ")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("MDCLX VI")).toThrow("Malformed Number");
    expect(() => bumblor2arabic("MDCLXVI")).not.toThrow("Malformed Number");
})
