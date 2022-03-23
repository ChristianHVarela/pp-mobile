export default class NumeroBoletoSchema {
    static schema = {
        name: 'NumeroBoleto',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            nossoNumero: 'string',
            bethaNumero: 'string',
        },
    };
}