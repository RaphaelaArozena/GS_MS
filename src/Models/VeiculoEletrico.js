import mongoose from 'mongoose';

const SchemaVeiculoEletrico = new mongoose.Schema({
    identificadorUnico: { type: String, required: true },  // Identificador exclusivo do veículo
    categoria: { type: String, required: true },           // Categoria do veículo (carro, ônibus, etc.)
    modeloVeiculo: { type: String, required: true },       // Modelo do veículo elétrico
    capacidadeBateria: { type: Number, required: true },   // Capacidade total da bateria (em kWh)
    nivelBateriaAtual: { type: Number, required: true },   // Porcentagem atual de carga da bateria
    distanciaMaxima: { type: Number, required: true },     // Distância máxima com carga completa (em km)
    consumoPorKm: { type: Number, required: true },        // Consumo médio de energia (kWh/km)
    idEstacaoProxima: { type: String, required: true },    // Identificação da estação de recarga associada
    ultimaRecarga: { type: Date, required: true },         // Data em que ocorreu a última recarga
    totalKmRodados: { type: Number, required: true },      // Quilômetros totais percorridos
});

const ModeloVeiculoEletrico = mongoose.model('ModeloVeiculoEletrico', SchemaVeiculoEletrico);

export default ModeloVeiculoEletrico;
