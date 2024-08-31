import {sum} from "../sum";

it("Should calculate sum of two numbers", () => {
    const result = sum(6,3);
    
    expect(result).toBe(9);
});