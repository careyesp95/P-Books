import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Navbar from '../../components/Navbar/Navbar.js'
import Card from '../../components/Card/Card';
import Paginado from '../../components/Paginado/Paginado.jsx';
import {
    filterByOrder,
    filterByCategorias,
    getCategoriasAll,
    getLibroAll,
    }from '../../actions/index';
import {ButtonClear} from './HomeElements'
import './Home.css';

function Home() {
    const stateLibros = useSelector(state => state.allLibros);
    const stateCategorias = useSelector(state => state.allCategorias);

    const dispatch = useDispatch();

    const [orden,setOrden] = useState('');
    const [categorias,setCategorias] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [libro,setLibro] = useState(6);
    const indexOfLastLibro = currentPage * libro;
    const indexOfFirstLibro = indexOfLastLibro - libro;
    const currentLibros = stateLibros?.slice(indexOfFirstLibro,indexOfLastLibro)
    
    
    function paginado (pageNumber){
        setCurrentPage(pageNumber)
    }
    
    useEffect(()=> {
        dispatch(getCategoriasAll())
    },[dispatch])

    function handleFilterOrder(e){
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1)
        setOrden( e.target.value)
        
    } 


   function handleFilterCategorias (e){
        e.preventDefault();
        dispatch(filterByCategorias(e.target.value))
        setCategorias(e.target.value)
   }

   function clearFilter (e){
       e.preventDefault();
       setOrden('selec')
       setCategorias('Drama')
       dispatch(getLibroAll());       
   }


    return (
        <div className='containerHome'>
            <Navbar />
            <br/>
            <div className='containerFilter'>
                <select className='containerOption' name='orden' value={orden} onChange={e => handleFilterOrder(e)} >
                        <option value='selec'>selec</option>
                        <option  value='asc'>Order A-Z</option>
                        <option  value='desc'>Order Z-A</option>
                </select>
                <select className='containerOption' name='categorias' value={categorias} onChange={e => handleFilterCategorias(e)}>
                    {
                        stateCategorias?.map(elem => (
                            <option key={elem.id}value={elem.name} >{elem.name}</option>
                        ))
                    }
                </select>
                <ButtonClear onClick={clearFilter}>Clear</ButtonClear>
            </div> 
            <Paginado 
                libroPerPage={libro}
                allLibros={stateLibros?.length}
                paginado={paginado}
            />
            <br/>
            <br/>
            <div className='containerCard'>
                {
                    currentLibros && currentLibros.map(elem => {
                        return <Card
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        image={elem.image}
                        categorias={elem.categorias}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Home
