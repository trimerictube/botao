let tamanho = 2;
function mudatitulo() {
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tamanho}em`;
}
function aumentar_titulo() {
    tamanho = tamanho + 0.5;
    mudatitulo();
}
function diminuir_tituto() {
    if(tamanho > 0.5) {
        tamanho = tamanho - 0.5;
        mudatitulo();
    }
}
