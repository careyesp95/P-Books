import {
    GET_LIBRO_ALL,
    GET_CATEGORIAS_ALL,
    GET_LIBRO_NAME,
    GET_LIBRO_DETAIL,
    FILTER_BY_ORDER,
    FILTER_BY_CREATE,
    FILTER_BY_CATEGORIAS,
    CREATE_LIBRO,
    CLEAR_ALL,
} from '../actions/actionName';

const initialState = {
    allLibros :[],
    allLibrosAux:[],
    allCategorias:undefined,
    getLibroId:undefined,
}

function reducer(state=initialState,action) {
    switch(action.type){
        case GET_LIBRO_ALL:
            return {
                ...state,
                allLibros:action.payload,
                allLibrosAux:action.payload,
                
            };
        case GET_LIBRO_DETAIL:
            return {
                ...state,
                getLibroId:action.payload,
            }

        case GET_CATEGORIAS_ALL:
            return {
                ...state,
                allCategorias:action.payload,
            };

        case GET_LIBRO_NAME:
            let valuedata;
            if(action.payload.hasOwnProperty('message')){
                alert(`${action.payload.message}`)
                valuedata = state.allLibrosAux

            }else {
                valuedata = action.payload
            }
            return {
                ...state,
                allLibros:valuedata,
            }
        case CREATE_LIBRO:
            return {
                ...state,
            }
        case FILTER_BY_ORDER:

            let sortedOrder = action.payload === 'asc' ?
            state.allLibros.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            })
            : state.allLibros.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            })
            case FILTER_BY_CREATE:
                let dataRender;
                if(action.payload === 'creado'){
                    dataRender = state.allLibrosAux.filter(e => e.id.toString().length > 20)
                }else if(action.payload === 'api'){
                    dataRender = state.allLibrosAux.filter(e => e.id.toString().length < 20)
                }else {
                    dataRender = state.allLibrosAux
                }
                return {
                    ...state,
                    allLibros: dataRender

                }
            return {
                ...state,
                allLibros:sortedOrder,
            };

        
            
        case FILTER_BY_CATEGORIAS: 

            let filterLibros = state.allLibrosAux.filter(e => {
                let array = e.categorias
                return array.some(e => e.name.toUpperCase() === action.payload.toUpperCase())
            })
            
            return {
                ...state,
                allLibros:filterLibros ? filterLibros:state.allLibrosAux
            };
        case CLEAR_ALL:
            return{
                ...state,
                allLibros:[...state.allLibrosAux]
            }
            
        default:
            return state;
    }
}

export default reducer
