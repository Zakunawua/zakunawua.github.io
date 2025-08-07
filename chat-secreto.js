// Ofuscar mensaje al escribir (ejemplo básico)
function ofuscar(texto) {
  const mapa = { "A": "P", "B": "Q", "C": "R", ... };
  return texto.split('').map(letra => mapa[letra] || letra).join('');
}
// Al enviar, se transmite el texto REAL cifrado.