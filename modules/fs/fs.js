const fs = require("fs");
const path = require("path");

//Cria uma pasta
// fs.mkdir(path.join(__dirname, "/moduleTest"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

//Cria um arquivo - substitui o conteúdo inteiro do arquivo
//fs.writeFile(path,content, callback)
fs.writeFile(
  path.join(__dirname, "/moduleTest", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar à um arquivo

    fs.appendFile(
      path.join(__dirname, "/moduleTest", "teste.txt"),
      "hello world!",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log("Arquivo modificado com sucesso");
      }
    );
    // Ler arquivo

    fs.readFile(
      path.join(__dirname, "/moduleTest", "teste.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          console.log("Error: ", error);
        }
        console.log(data);
      }
    );
  }
);

// Ler arquivo

fs.readFile(
  path.join(__dirname, "/moduleTest", "teste.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      console.log("Error: ", error);
    }
    console.log(data);
  }
);
