export default class BoletoSchema {
    static schema = {
        name: 'Boleto',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            indentificador: 'string',
            numeroDocumento: 'string',
            dataVencimento: 'date',
            dataEmissao: 'date',
            aceite: 'string',
            valorTotal: 'double',
            servico: 'int',
            quantidadeServico: 'int',
            observacoes: 'string',
            mensagem: 'string',
            produtor: 'int',
            codigoDeBarra: 'string',
            entidade: 'int',
        }
    }
}