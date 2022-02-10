import React from 'react';
import {Link} from 'react-router-dom';
import {
    CardImage,
    ButtonR,
    Image,
    H3,
    Categorias,
    TitleDescription,
} from './CardDetailElements';
import './CardDetail.css';


function CardDetail({name,image,categorias,description}) {
    
    return (
        <div className ='wrap'>       
            <Link to='/'>
                <ButtonR>Regresar</ButtonR>
            </Link>
            <div className='trajetaWrap'>
                <div className ='tarjeta'>
                    <div className ='adelante'>
                        <H3>{name}</H3>
                        <CardImage>
                            <Image src={image} alt='Cargando...'  />
                        </CardImage>
                        <Categorias>Categoria(s): {categorias?.map((e,i) => <p key={i}>{e.name}</p>)}</Categorias>
                    </div>
                    <div className='atras'>
                        <TitleDescription >Description:{description}</TitleDescription >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail
