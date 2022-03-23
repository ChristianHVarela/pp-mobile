export default class ProdutorSchema {
    static schema = {
        name: 'Produtor',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            fantasyName: 'string',
            cpfCnpj: 'string',
            ie: 'string',
        },
    };
}