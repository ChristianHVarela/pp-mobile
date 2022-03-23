import Realm from "realm";

import HoraMaquinaSchema from '../schemas/HoraMaquinaSchema'
import ProdutorSchema from "../schemas/ProdutorSchema";
import ServicoSchema from "../schemas/ServicoSchema";

export default function getRealm(){
    return Realm.open({
        schema: [HoraMaquinaSchema, ProdutorSchema, ServicoSchema],
    });
}
