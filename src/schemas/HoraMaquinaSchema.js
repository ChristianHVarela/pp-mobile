export default class ProdutorSchema {
    static schema = {
        name: 'HoraMaquina',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            produtor: '{}',
            quantidade: 'int',
            data: 'date',
            valorTotal: 'double',
            servico: '{}',
        },
    };
}