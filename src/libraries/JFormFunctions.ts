export function hexToRGBArray(hex: string): number[] { // Converts a hex color to [R,G,B]
    let rgbVals: number[] = []
    for (let i = 0; i < 3; i++) {
        let rgb = parseInt(hex[i * 2 + 1] + hex[i * 2 + 2], 16)
        if (rgb > 255) { rgb = 255 }
        rgbVals.push(rgb)
    }
    return rgbVals
}
export function lightenColor(colorIn: string): string { // Takes a string and outputs a lighter version of it
    let srcRGBVals = hexToRGBArray(colorIn)
    let newRGBVals: number[] = []
    for (let i = 0; i < 3; i++) {
        let newRGB = srcRGBVals[i] + 40
        if (newRGB > 255) { newRGB = 255 }
        newRGBVals.push(newRGB)
    }
    return (`rgb(${newRGBVals[0]}, ${newRGBVals[1]}, ${newRGBVals[2]})`)
}