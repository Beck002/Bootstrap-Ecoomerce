import { catalogo } from "../data/catalogo";

export const getCatalogoById = ( id = 0 ) => {

    return catalogo.find( item => item.id === id)

}
