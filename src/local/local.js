

export const local = {
    getText: () => JSON.parse(localStorage.getItem('text')),
    setText : (text) => localStorage.setItem('text',JSON.stringify(text)),
}