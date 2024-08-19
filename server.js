const express = require("express");
const mysql = require("mysql2");

const mysql_config = require("./mysql_config");

const app = express();

app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

const connection = mysql.createConnection(mysql_config);

app.get("/", (req, res) => {
  // * Criação de objeto result para todos os endpoints da API.
  let result = {
    status: "Success",
    message: null,
    data: null,
  };
});

// * Conexão
connection.query("SELECT * FROM tasks", (err, results) => {
  if (err) {
    result.status = "Erro";
    result.message = "Erro na obtenção das tarefas";
    result.data = [];
    // res.send(result);
    res.json(results);
  } else {
    result.status = "Success";
    result.message = "Tarefas obtidas com sucesso";
    result.data = results;
    res.json(results);
  }
});
