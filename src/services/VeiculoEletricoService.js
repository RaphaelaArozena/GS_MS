import ModeloVeiculoEletrico from '../Models/ModeloVeiculoEletrico.js';

class ServicoVeiculoEletrico {
  static async obterTodosVeiculos() {
    return await ModeloVeiculoEletrico.find();
  }

  static async adicionarNovoVeiculo(dadosVeiculo) {
    const veiculo = new ModeloVeiculoEletrico(dadosVeiculo);
    return await veiculo.save();
  }

  static async editarVeiculoPorId(id, atualizacoes) {
    return await ModeloVeiculoEletrico.findByIdAndUpdate(id, atualizacoes, { new: true });
  }
}

export default ServicoVeiculoEletrico;
