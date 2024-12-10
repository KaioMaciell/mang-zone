let dados = [
  {
      titulo: "Solo leveling",
      descricao: "Em um mundo onde portões para dimensões alternativas se abrem, liberando criaturas perigosas, surgem os Caçadores, indivíduos com habilidades sobrenaturais para combater essas ameaças. Sung Jinwoo, um Caçador de nível baixo e fraco, vê sua vida mudar drasticamente após uma missão que quase o leva à morte.",
      link: "https://tsuki-mangas.com/obra/40/solo-leveling",
      tags: "solo leveling jin caçador",
      imagem: "Imagens/Solo leveling.png"
  },
  {
      titulo: "The Beginning after the End",
      descricao: "The Beginning After the End é uma web novel de fantasia que conquistou uma legião de fãs ao redor do mundo. A história nos leva para um reino mágico, onde um poderoso rei, conhecido como Gray, renasce em um mundo completamente diferente, em um corpo jovem.",
      link: "https://tsuki-mangas.com/leitor/60/2616/the-beginning-after-the-end/01",
      tags: "Gray reencarnação end after",
      imagem: "Imagens/TBTE.png"
  },
  {
      titulo: "Haikyu!! To the Top",
      descricao: "Inspirado por uma partida que viu na TV, Hinata entra para um time de vôlei e começa a treinar, apesar da baixa estatura. .",
      link: "https://taosect.com/projeto/haikyuu/",
      tags: "vólei volei karasuno haikyuu hinata",
      imagem: "Imagens/Haikyu.png"
  }
];

let campoPesquisa = ""; // Defina o valor de pesquisa aqui
let resultados = ""; // Inicialize a variável resultados

for (let dado of dados) {
  const titulo = dado.titulo.toLowerCase();
  const descricao = dado.descricao.toLowerCase();
  const tags = dado.tags.toLowerCase();

  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <img src="${dado.imagem}" alt="${dado.titulo}">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
      
    `;
  }
}

// Use a variável `resultados` conforme necessário, por exemplo, inserir no DOM
console.log(resultados); // Apenas para verificação