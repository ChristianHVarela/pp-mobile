import Realm from "realm";

import HoraMaquinaSchema from '../schemas/HoraMaquinaSchema'
import ProdutorSchema from "../schemas/ProdutorSchema";
import ServicoSchema from "../schemas/ServicoSchema";
import NumeroBoletoSchema from "../schemas/NumeroBoletoSchema";
import BoletoSchema from "../schemas/BoletoSchema";

export default function getRealm(){
    return Realm.open({
        schema: [HoraMaquinaSchema, ProdutorSchema, ServicoSchema, NumeroBoletoSchema, BoletoSchema],
    });
}
