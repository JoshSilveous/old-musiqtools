type themeObject = {
    name: string,
    background: string,
    background2: string,
    text: string,
    accent1: string,
    accent1hover: string,
    accent2: string,
    accent2hover: string
}

// Accents are usually +40 for all RGB values
const themes: themeObject[] = [
    {
        name: 'Lemonade',
        background: '#ffd670',
        background2: '#fffd98',
        text: '#e07046',
        accent1: '#ff70a6',
        accent1hover: '#ff98cd',
        accent2: '#5286d9',
        accent2hover: '#7aaeff'
    },
    {
        name: 'Not Sure What To Call',
        background: '#2c3f43',
        background2: '#5e676b',
        text: '#faecac',
        accent1: '#87c6bb',
        accent1hover: '#b9eee3',
        accent2: '#e16853',
        accent2hover: '#ff8f7b'
    }
]



export default themes
