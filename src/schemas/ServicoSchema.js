export default class ServicoSchema {
    static schema = {
        name: 'Servico',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            tipo: 'string',
            valor: 'double',
        },
    };
}