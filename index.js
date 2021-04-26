const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");

  if (request.url === "/") {
    response.end(`<h1>Seja bem vindo!<h1>`);
  } else if (request.url === "/sobre") {
    response.end(
      `<h1>Nos somos uma empresa!<br>So isso... somos so uma empresa, nada alem disso!<br>Serio mesmo, nao somos nada alem de uma empresa!!!<h1>`
    );
  } else if (request.url === "/contato/whatsapp") {
    response.end(`<h1>Contato: (11) 01234-5678<h1>`);
  } else {
    response.statusCode = 404;
    response.end(`<h1>Conteudo nao encontrado!<h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
