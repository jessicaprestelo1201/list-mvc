import express from 'express';
import tarefaRouter from "./routes/tarefaRouter";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tarefas', tarefaRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

