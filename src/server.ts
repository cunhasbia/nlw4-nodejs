import express from 'express';

const app = express();
const port = 3333;

app.get("/", (request, response) => {
    return response.json({ message: "Hello World" });
});

app.post("/", (request, response) => {
    return response.json({ message: "Dados salvos com sucesso" });
});

app.listen(port, () => console.log(`Server up and running on port ${port}`));