export function validate(state){
    let errors = {};
    let expression = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

    if(!state.name){
        errors.name = 'name is required';
    }else if(!/^\w+\s?\w+?\s?\w+?\s?\w+?\s?$/.test(state.name)){
        errors.name = 'Debe contener más de 3 caracteres y como maximo 3 espacios'
    }else if(!state.description){
        errors.description = 'description is required'
    }else if(!/^\w{2,5}\s?\w+?\s?\w+?\s?\w+?\s?\w+?\s?\w+?\s?\w+?\s?\w+?\s?\w+?\s?\w+?\s?.?$/.test(state.description)){
        errors.description='Debe contener más de 10 caracteres y no superar el limite requerido!'
    }else if(!state.duration){
        errors.duration = 'duration is required'
    }else if(!/^\d{1,2}$/.test(state.duration)){
        errors.duration = 'Debe tener mas de un digito y menos de 3 digitos.'
    }else if (!expression.test(state.image)){
        errors.image = 'La URL es invalida'
    }
    return errors;
}