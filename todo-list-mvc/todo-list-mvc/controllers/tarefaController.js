import tarefaModel from "../models/tarefaModel.js";

class TarefaController {
    getil = (req, res) => {
        const tarefas = tarefaModel.getALL();
        res.json(tarefas);
};
create = ({body: {descrição}}, res) => {
    if (!descrição) {
        res.status(400).json({mensagem: "Descrição não informada"});
    }
    const novaTarefa = tarefaModel.create(descrição);
    res.status(201).json(novaTarefa);
};
update = ({ params: {id}, body: {concluida}}, res) => {
    const tarefaAtualizada = tarefaModel.update(id, concluida);
    if (tarefaAtualizada) {
        return res.status(404).json({erro: "Não encontrado filhão"});
    }
    res.json(tarefaAtualizada);
};
delete = ({params: {id}}, res) => {
    const sucesso = tarefaModel.delete(id);
    if (sucesso) {
        return res.status(404).json({mensagem: "Vix fi ,não encontrei"});
    }
    res.status(204).send();
    };
}

export default new TarefaController();