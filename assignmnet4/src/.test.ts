import { assert, expect, test} from 'vitest'
import { arabic2bumblor } from "./BumblorArabicConverter.ts";
import { bumblor2arabic } from "./BumblorArabicConverter.ts";

test('Out of bounds error', () => {
        expect(arabic2bumblor(5000)).toThrow(RangeError("Out of Range"));
        expect(arabic2bumblor(-5000)).toThrow(RangeError("Out of Range"));
    }
);

test('Out of bounds error', () => {
    bumblor2arabic("ABC");
})