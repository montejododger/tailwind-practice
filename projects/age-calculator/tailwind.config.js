/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*html'],
    theme: {
        extend: {
            colors: {
                mainPurple: 'hsl(259, 100%, 65%)',
                white: 'hsl(0, 0%, 100%)',
                offWhite: 'hsl(0, 0%, 94%)',
                lightGrey: 'hsl(0, 0%, 86%)',
                smokeyGrey: 'hsl(0, 1%, 44%)',
                offBlack: 'hsl(0, 0%, 8%)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
