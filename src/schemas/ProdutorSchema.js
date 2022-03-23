export default class ProdutorSchema {
    static schema = {
        name: 'Produtor',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            nome: 'string',
            nomeFantasia: 'string',
            cpfCnpj: 'string',
            ie: 'string',
            endereco: 'string',
        },
    };
}