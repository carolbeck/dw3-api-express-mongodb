//importando o Express
import express from "express";
 
//carregando o express
const app = express();
 
//configurações do express
app.use(express.json());
 
// rota principal
app.get("/", (req,res) => {
    // JSON que será retornado pela API
    const games = [
        {
            title: "Fifa 2019",
            year: 2019,
            paltform: "X-box 360",
            price: 198
        },
        {
            title: "The Sims",
            year: 2016,
            platform: "PC (Windows)",
            price: 149
        },
        {
            title: "CS GO",
            year: 2012,
            platform: "PC (Windows)",
            price: 89
        }
    ]
    //configurando o retorno da API
    res.json(games);
});
 
app.get("/filmes", (req,res) => {
    const filmes = [
        {
            title: "Harry Potter e a Camara Secreta",
            year: 1999,
            genre: "Fantasia",
            duration: "160 minutos"
        },
        {
            title: "Jogos Vorazes",
            year: 2012,
            genre: "Suspense",
            duration: "140 minutos"
        },
        {
            title: "Velozes e Furiosos",
            year: 2005,
            genre: "Ação",
            duration: "120 minutos"
        }
    ]
    res.json(filmes);
})
//iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});
 