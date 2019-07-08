const hbs = require('hbs');
// Helpers
//para obtener el año en footer
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//para poner las primeras letras en mayus
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});