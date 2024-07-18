const url = new URL("https://www.ejmeplo.or/cursos/programacion?ordenar=vistas&nivel=2");

console.log(url.hostname)
console.log(url.pathname)
console.log(url.searchParams)
console.log(url.searchParams.get('ordenar'))
console.log(url.searchParams.get('nivel'))
