import mongoose from 'mongoose';

const SchemaEstacaoRecarga = new mongoose.Schema({
    identificador: { type: String, required: true },   // ID único da estação de recarga
    endereco: { type: String, required: true },        // Endereço ou coordenadas da estação
    totalDeCarregadores: { type: Number, required: true }, // Quantidade total de carregadores
    carregadoresEmUso: { type: Number, required: true },   // Quantidade de carregadores em uso
    capacidadeTotalKW: { type: Number, required: true },   // Capacidade total de carregamento em kW
    precoPorKWh: { type: Number, required: true },     // Preço cobrado por kWh
    operando: { type: Boolean, required: true },       // Status operacional da estação
    ultimaManutencao: { type: Date, required: true },  // Data da última revisão
});

const ModeloEstacaoRecarga = mongoose.model('ModeloEstacaoRecarga', SchemaEstacaoRecarga);

export default ModeloEstacaoRecarga;
