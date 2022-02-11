import React, {useState,useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

import {useDispatch,useSelector} from 'react-redux';
import {getCategoriasAll,createLibro,getLibroAll} from '../../actions/index';
import {validate} from '../Validate/validate.jsx';
import './CardCreate.css';
import {Link,useHistory} from 'react-router-dom';
import {
    Input,
    InputContainer,
    Label,
    Formulario,
    StylError,
    CenterButton,
    Boton,
    MenssageError,
    Main,
    ButtonR,
    H1,
    Select,
    ButtonCategorias,
    Li,
} from './CardCreateElements';

function CardCreate() {
 
    const dispatch = useDispatch();
    const history = useHistory();
    const categorias = useSelector(state => state.allCategorias)
    
    const [formularioValido,setFormularioValido] = useState(true);
    const [errors,setErrors] = useState({})
    //{name,image, categorias, description, duration}
    const [state, setState] = useState({
        name:'',
        publishedDate:'',
        publisher:'',
        description:'',
        image:'',
        categorias:[],
        autores:[],
    })

    useEffect(()=> {
        dispatch(getCategoriasAll())
    },[dispatch])

    function onHandleChange (e){
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
        
        setErrors(validate({
            ...state,
            [e.target.name]:e.target.value,
        }));
    }

    function onHandleSelect(e){
        e.preventDefault();
        state.categorias.includes(e.target.value) ? alert(`Ya seleccionaste ${e.target.value}, por favor seleccione otro tipo de categoria`):
        setState({
            ...state,
            categorias:[...state.categorias,e.target.value]
        })
    }

    function onHandleDelete(el){
        setState({
            ...state,
            categorias:state.categorias.filter(elem => elem !== el)
        })

    }
    
    function onHandleSubmit(e){
        e.preventDefault();
        if(errors.hasOwnProperty('name')  || errors.hasOwnProperty('description') || errors.hasOwnProperty('publisher') || errors.hasOwnProperty('publishedDate')){
            setFormularioValido(false);
        }else{
            setFormularioValido(true);
            dispatch(createLibro(state))
            alert(`Libro ${state.name} creada con exito!`)
            setState({
                name:'',
                publishedDate:'',
                publisher:'',
                description:'',
                image:'',
                categorias:[],
                autores:[],
            })
            dispatch(getLibroAll());
            history.push('/')
        }
    }
    return (
        <div className='containerCreate'>
            <Main>
                <H1>Crea un Libro!</H1>
                <Formulario onSubmit={onHandleSubmit}>
                    <div>
                        <Label htmlFor='nombre' valido={errors.name} >Nombre*:</Label>
                        <InputContainer>
                            <Input
                                type='text'
                                placeholder='name..'
                                id='nombre'
                                value={state.name}
                                name='name'
                                onChange={onHandleChange}
                                valido={errors.name}
                            />
                        </InputContainer>
                        {
                            errors.name && (
                                <StylError valido={errors.name}>{errors.name}</StylError>
                            )
                        }
                    </div>
                    <div>
                        <Label htmlFor='description' valido={errors.description}>description*:</Label>
                        <InputContainer>
                            <Input
                            type='text'
                            placeholder='description...'
                            id='description'
                            value={state.description}
                            name='description'
                            onChange={onHandleChange}
                            valido={errors.description}
                            />
                        </InputContainer>
                        {
                            errors.description && (
                                <StylError valido={errors.description}>{errors.description}</StylError>
                            )
                        }
                    </div>
                    <div>
                        <Label htmlFor='publishedDate' valido={errors.publishedDate}>Fecha de Publicación*:</Label>
                        <InputContainer>
                            <Input
                            type='number'
                            placeholder='Fecha de Publicacion...'
                            id='publishedDate'
                            value={state.publishedDate}
                            name='publishedDate'
                            onChange={onHandleChange}
                            valido={errors.publishedDate}
                            />
                        
                        </InputContainer>
                        {
                            errors.publishedDate && (
                                <StylError valido={errors.publishedDate}>{errors.publishedDate}</StylError>
                            )
                        }
                    </div>
                    <div>
                        <Label htmlFor='publisher' valido={errors.publisher}>Autor*:</Label>
                        <InputContainer>
                            <Input
                            type='text'
                            placeholder='autor...'
                            id='publisher'
                            value={state.publisher}
                            name='publisher'
                            onChange={onHandleChange}
                            valido={errors.publisher}
                            />
                        
                        </InputContainer>
                        {
                            errors.publisher && (
                                <StylError valido={errors.publisher}>{errors.publisher}</StylError>
                            )
                        }
                    </div>
                    <div>
                        <Label htmlFor='image' valido={errors.image}>Image:</Label>
                        <InputContainer>
                            <Input
                            type='text'
                            placeholder='Url Image...'
                            id='image'
                            value={state.image}
                            name='image'
                            onChange={onHandleChange}
                            valido={errors.image}
                            />
                            
                        </InputContainer>
                        {
                            errors.image && (
                                <StylError valido={errors.image}>{errors.image}</StylError>
                            )
                        }
                    </div>
                    <Label valido={errors.categorias}>Category Type Selected:</Label>
                    <Select
                    onChange={onHandleSelect}>
                        {
                            categorias && categorias.map(e => (
                                <option key={e.id} value={e.name}>{e.name}</option>
                            ))
                        }
                    </Select>
                        <ul>
                            <Li>{
                                    state.categorias.map(el =>
                                        <div key={el}>
                                            <Label>{el} <ButtonCategorias onClick={()=> onHandleDelete(el)}>x</ButtonCategorias></Label>
                                            
                                        </div>
                                    )
                                }
                            </Li>
                        </ul>
                    {formularioValido === false && <MenssageError>
                        <p><FontAwesomeIcon icon={faExclamationTriangle}/><b>Error:</b><b>Por favor complete los campos marcados con * correctamente.</b></p>
                    </MenssageError>} 
                    
                    <CenterButton>
                        { state.name !== "" && <Boton type='submit'>Crear Libro</Boton>}
                        <Link to='/'><ButtonR>Regresar</ButtonR></Link>
                        
                    </CenterButton>
                </Formulario>
            </Main>
        </div>
    )
}

export default CardCreate
