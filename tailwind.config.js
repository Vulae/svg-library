/** @type {import('tailwindcss').Config} */
export default {
    content: [ './src/**/*.{html,js,svelte,ts}' ],
    theme: {
        extend: {
            fontFamily: {
                segoe: [ 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif' ]
            }
        }
    },
    plugins: []
}