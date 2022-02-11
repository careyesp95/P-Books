import React from 'react';
import {Link} from 'react-router-dom';
import {
    CardImage,
    CardLibro,
    Title,
    H3,
    Image,
} from './CardElements';


function Card(props) {
    const {name,image,categorias,id, publishedDate} = props;
    return (
            <CardLibro>
                <H3>{name}</H3>
                <CardImage>
                    <Link to={`/home/detail/${id}`}>
                        <Image src={image} alt='Cargando...'  />
                    </Link>
                </CardImage>
                <Title>Categoria(s): {categorias?.map((e,i) => <p key={i}>{e}</p>)}</Title>
                <Title>Fecha Publicacion: {publishedDate}</Title>
            </CardLibro>
    )
}

export default Card
