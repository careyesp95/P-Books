import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Main = styled.div`
    max-width:800px;
    width:90%;
    margin:auto;
    padding:10px;
`

export const colores = {
    borde:'#04ff19',
    error:'#bb2929',
    exito:'#1ed12d',
    defecto:'#fff'
}

export const Formulario = styled.form`
    margin-top:0rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;

    @media (max-width:800px){
        grid-template-columns:1fr;
    }
`


export const Label = styled.label`
    display:block;
    color:#fff;
    font-weight:700;
    padding:10px;
    min-height:40px;
    cursor:pointer;
    ${props => props.valido !== undefined && css`
        color:${colores.error};
    ` }
`

export const InputContainer = styled.div`
    position:relative;
    z-index:90;
`

export const Input = styled.input`
    width:90%;
    background:#fff;
    border-radius:3px;
    height:25px;
    line-height:45px;
    padding:0 40px 0 10px;
    transition: 0.3s ease all;
    border:3px solid transparent;

    &:focus{
        border:3px solid ${colores.borde};
        outline:none;
        box-shadow:3px 0px 30px #03030366
    }
    ${props => props.valido === undefined && css`
        border: 3px solid ${colores.defecto};
    `}

    ${props => props.valido !== undefined && css`
        border: 3px solid ${colores.error} !important;
    `}
`
export const StylError = styled.p`
    font-size:1rem;
    margin-bottom:0;
    margin-top:0;
    color:${colores.error};
    display:none;
    ${props => props.valido !== undefined && css`
        display:block;
    `}
`

export const ValidateIcon = styled(FontAwesomeIcon)`
    position:absolute;
    bottom:8px;
    z-index:100;
    font-size:14px;
    opacity:0;

    ${props => props.valido !== undefined && css`
        opacity:1;
        color:${colores.error};
    `}

    ${props => props.valido === undefined && css`
        opacity:1; 
        color:${colores.exito};
    `}

`

export const CenterButton = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-column:span 2;
`

export const Boton = styled.button`
    height:45px;
    line-height:45px;
    width:30%;
    background:#ffffff78;
    color:#e9dddd;
    font-weight:bold;
    border:none;
    border-radius:3px;
    cursor:pointer;
    transition:.1s ease all;
    &:hover{
        box-shadow:3px 0px 30px #fff;
    }
`

export const MenssageError = styled.div`
    height:45px;
    line-height: 45px;
    background:#f66060;
    padding:0px 15px;
    border-radius:3px;
    grid-column:span 2;
    p{
        margin:0;
    }
    b{
        margin-left:10px;
    }
`

export const ButtonR = styled.button` 
    border:solid 2px #fff;
    border-radius:10px;
    outline: none;
    width:5rem;
    height:3rem;
    font-size:1rem;
    margin-top:1.5rem;
    justify-content:center;
    align-items:center;
    background-color:transparent;
    transition:background-color 0.25s;
    box-shadow: 2px 3px 60px #ffffff5c;
    cursor:pointer;
    color:#fff;
    :hover{
        background-color:#facac786;
    }
`

export const H1 = styled.h1`
    display:flex;
    justify-content:center;
    color:#fff;
    margin-top:0;
`
export const Select = styled.select`
    background:#fff;
    border:none;
    text-decoration:none;
`
export const ButtonCategorias = styled.button`
    border:solid 2px transparent;
    border-radius:9999px;
    width:2rem;
    height:2rem;
    font-size:1rem;
    align-items:center;
    background-color:#ddd5d53d;
    transition:background-color 0.25s;
    cursor:pointer;
    color:#d1cdcd;
    :hover{
        background-color:#a19e9e84;
    }

`

export const Li = styled.li`
    text-decoration:none;
    border:none;
`