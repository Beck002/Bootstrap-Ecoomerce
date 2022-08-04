import { catalogo } from "../data/catalogo";

export const getCatalogoByGenero = ( genero ) => {

    const generosValidos = ["Hombre", "Mujer", "Kids"];

    if( !generosValidos.includes( genero )){
        throw new Error (`${ genero } es invalido`)
    }

    return catalogo.filter( item => item.genero === genero )
}
