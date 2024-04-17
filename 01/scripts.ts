const usuarios: {nome:string,pets:string[]} [] = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const buscarDonoPet = (lista:{nome:string,pets:string[]} [], nomePet:string) : string => {
    let usuarioEncontrado: {nome:string,pets:string[]};
    usuarioEncontrado = {nome: "", pets: []}

    for (const usuario of lista) {
        if (usuario.pets.includes(nomePet)) {
            usuarioEncontrado = usuario;
        }
    }
    if (usuarioEncontrado.nome) {
        return `O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}`;
    } else {
        return `Que pena ${nomePet}, não encontramos seu dono(a)`;
    }
}

console.log(buscarDonoPet(usuarios, 'Naninha'));