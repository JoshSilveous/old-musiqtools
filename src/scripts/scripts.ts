import { reference } from '../App'

// Function that swaps a note value with it's numerical value for calculations

console.log(reference) // currently returns undefined

function numToLet(input: number): string;
function numToLet(input: number[]): string[];

function numToLet(input: number | number[]): string | string[] {

    if (typeof input === 'number') {
        return reference[input];
    }

    return input.map(item => numToLet(item));
}


export { numToLet };
