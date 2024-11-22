import VeiculoEletricoService from '../services/VeiculoEletricoService.js';

class VeiculoEletricoController {
  static async obterListaDeVeiculos(req, res) {
    try {
      const listaDeVeiculos = await VeiculoEletricoService.listarVeiculos();
      return res.status(200).json(listaDeVeiculos);
    } catch (erro) {
      console.error('Erro ao listar veículos elétricos:', erro.message);
      return res.status(500).json({ mensagem: 'Não foi possível obter a lista de veículos elétricos.' });
    }
  }

  static async adicionarVeiculo(req, res) {
    try {
      const dadosDoVeiculo = req.body;
      const veiculoCriado = await VeiculoEletricoService.criarVeiculo(dadosDoVeiculo);
      return res.status(201).json(veiculoCriado);
    } catch (erro) {
      console.error('Erro ao adicionar veículo elétrico:', erro.message);
      return res.status(500).json({ mensagem: 'Erro ao criar o veículo elétrico.' });
    }
  }

  static async editarVeiculo(req, res) {
    try {
      const { id } = req.params;
      const atualizacoes = req.body;
      const veiculoEditado = await VeiculoEletricoService.atualizarVeiculo(id, atualizacoes);

      if (!veiculoEditado) {
        return res.status(404).json({ mensagem: 'Veículo elétrico não encontrado.' });
      }

      return res.status(200).json(veiculoEditado);
    } catch (erro) {
      console.error('Erro ao atualizar veículo elétrico:', erro.message);
      return res.status(500).json({ mensagem: 'Erro ao atualizar o veículo elétrico.' });
    }
  }
}

export default VeiculoEletricoController;
