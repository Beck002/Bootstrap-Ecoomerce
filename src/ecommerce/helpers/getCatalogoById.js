import { catalogo } from "../data/catalogo";

export const getCatalogoById = ( id ) => {

    return catalogo.filter( item => item.id === id)

}
