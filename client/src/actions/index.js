import {
    GET_LIBRO_ALL, 
    GET_CATEGORIAS_ALL,
    GET_LIBRO_NAME,
    GET_LIBRO_DETAIL,
    FILTER_BY_ORDER,
    FILTER_BY_CATEGORIAS,
    CREATE_LIBRO,
    CLEAR_ALL,

} from './actionName.js';
import axios from 'axios';

export const getLibroAll = function(){
    return function(dispatch){
        return axios.get('/api/libro-name')
        .then(response => {
            dispatch({
                type: GET_LIBRO_ALL,
                payload:response.data,
            })
        })
        .catch(err => {
            if(err.response?.status !== 404) alert('Cargando los libros...')
        })
    }
}

export const getCategoriasAll = function(){
    return function(dispatch){
        return axios.get('/api/categoria')
        .then(response => {
            if(response.data !== undefined){
                dispatch({
                    type:GET_CATEGORIAS_ALL,
                    payload:response.data,
                })
            }
        })
        .catch(err => {
            if(err.response?.status !== 404) alert('Cargando')
        })
    }
}

export const getLibroName = function(name){
    return function(dispatch){
        return axios.get('/api/libro-name?name=' + name)
        .then(response => {
            dispatch({
                type:GET_LIBRO_NAME,
                payload:response.data,
            })
        })
        .catch(err => {
            if(err.response?.status !== 404) alert(`No existe el libro llamado: ${name}`)
        })
    }
}


export const getLibroDetail = function(id){
    return function(dispatch){
        return axios.get(`/api/libro/${id}`)
        .then(response => {
            dispatch({
                type: GET_LIBRO_DETAIL,
                payload:response.data,
            })
        })
        .catch(err => {
            if(err.response?.status !== 404) alert('Cargando')
        })
    }
}

export const createLIBRO = function(data){
    return function(dispatch){
        return axios.post('/api/crear/libro',data)
        .then(response => {
            dispatch({
                type:CREATE_LIBRO,
                payload:response.data,
            })
        })
    }
}


export const filterByOrder = function(status){ 
    return {
        type:FILTER_BY_ORDER,
        payload:status,
    }

}


export const filterByCategorias = function(status){
    return {
        type:FILTER_BY_CATEGORIAS,
        payload:status
    }
}

export const clearAll = function() {
    return {
        type:CLEAR_ALL,
    }

}