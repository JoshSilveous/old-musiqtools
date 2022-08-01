// Function that swaps a note value with it's numerical value for calculations

function numToLet(input: number, isSharp: boolean): string;
function numToLet(input: number[], isSharp: boolean): string[];

function numToLet(input: number | number[], isSharp: boolean): string | string[] {


    //  Determine which reference key to use based on if we're viewing flats or sharps (isSharp)
    let reference = [];
    if (isSharp) {
        reference = ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'];
    } else {
        reference = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
    }


    if (typeof input === 'number') {
        return reference[input];
    }

    return input.map(item => numToLet(item, isSharp));
    // git commit test

}


export { numToLet };
