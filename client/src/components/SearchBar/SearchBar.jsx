import React, {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getLibroName,getLibroAll} from '../../actions/index';
import {ButtonS,Container, Input} from './SearchElements';


function SearchBar() {

    const dispatch = useDispatch()
    const [state, setState] = useState("")

    useEffect(() =>{
        dispatch(getLibroAll())
      },[dispatch])
    
    function onChangeInput(e){
        e.preventDefault();
        setState(e.target.value)
        
    }
    function onSubmitInput(e){
        e.preventDefault();
        if(!state) return alert('Debe digitar un libro valido')
        dispatch(getLibroName(state))
        setState("");

    }

    return (
        <Container>
            <Input
            type='text'
            placeholder='Buscar un libro...'
            value={state}
            onChange={(e) =>onChangeInput(e)}
            />
            <ButtonS type='submit' onClick={(e)=>onSubmitInput(e)}>Buscar</ButtonS>
        </Container>
    )
}

export default SearchBar
