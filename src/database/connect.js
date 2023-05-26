const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.76rq9kh.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
      console.log("Conexão realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
