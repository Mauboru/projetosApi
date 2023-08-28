function piada() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt')
      .then(response => {
        // console.log(response.data);
        const piadas = response.data;
        gerarPiada(piadas);
        gerarImagem();
      })
      .catch(error => {
        console.error('Deu erro se vira ai:', error);
      });
  }

function gerarImagem(){
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            const data = response.data;
            const firstCat = data[0];
            const catURL = firstCat.url;
            const catImage = document.getElementById("catImage");
            catImage.src = catURL;
        })
        .catch(error => {
            console.error("Erro ao carregar a imagem do gato: ", error);
        })
}
  
const botaoChamarApi = document.getElementById('btChamaApi');
botaoChamarApi.addEventListener('click', () => {
    piada();
});

function gerarPiada(piadas) {
    const piadaTema = document.getElementById('piada-tema');
    const piadaReposta = document.getElementById('piada-resposta');
    piadaTema.textContent = piadas.setup;
    piadaReposta.textContent = piadas.delivery;
}