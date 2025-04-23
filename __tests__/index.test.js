const fs = require('fs');

test('El archivo index.html contiene "Hola Mundo"', () => {
    const contenido = fs.readFileSync('index.html', 'utf-8');
    expect(contenido).toMatch(/Hola Mundo/);
});
