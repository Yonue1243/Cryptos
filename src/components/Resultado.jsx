import styled from "@emotion/styled"


const Resultados = styled.div`
    color: #a49206;
    font-family: 'Lato', sans-serif;
    display:flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;


`

const Texto = styled.p`
font-size: 18px;
span{
    font-weight: 700;
    
}

`

const Precio = styled.p`
font-size: 24px;
span{
    font-weight: 700;
    
}
`

const Imagen = styled.img`
    width:120px;
    display:block;
    

`


export const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

return (
    <Resultados>
        <Imagen src={`https://cryptocompare.com${IMAGEURL}`} 
        alt="imagen Cripto" />

        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24h: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>



    </Resultados>
    )
}
