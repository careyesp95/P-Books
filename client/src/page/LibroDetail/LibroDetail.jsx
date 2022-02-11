import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router';
import Loading from '../../components/Loading/Loading';
import CardDetail from '../../components/CardDetail/CardDetail';
import {getLibroDetail} from '../../actions/index';
import './LibroDetail.css';


function LibroDetail() {
    const libroDetailById = useSelector(state => state.getLibroId)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getLibroDetail(id))
    },[dispatch,id])

    return (
        <div className='container'>
            {
                libroDetailById === undefined ?(
                    <Loading /> 
                ) :(
                    <CardDetail
                    name={libroDetailById.name}
                    image={libroDetailById.imagen.thumbnail}
                    description={libroDetailById.description}
                    categorias={libroDetailById.categorias}  
                    />
                )
            }
        </div>
    )
}

export default LibroDetail
