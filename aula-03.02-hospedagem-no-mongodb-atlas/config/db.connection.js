// Importando o mongoose
import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "caroolbeck1_db_user";
const dbPassword = "14082003Ca.";


const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.3k256ed.mongodb.net/api-thegames?appName=Cluster0`
    );

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });

    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};

connect();

export default mongoose;