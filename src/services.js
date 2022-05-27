export default function semaforo(){
    let msg='';
    if(cor=='verde'){
        msg='pode passar'
    }
    else if(cor=='vermelho'){
        msg='pare';    
    }
    else {
        msg='nao operacional'
    }
    return msg;
}

export function semana(){
    let msg='';
    if(dia==0){
        msg='domingo'
    }
    else if(dia==1){
        msg='segunda'
    }
    else if(dia==2){
        msg='terça'
    }
    else if(dia==3){
        msg='quarta'
    }
    else if(dia==4){
        msg='quinta'
    }
    else if(dia==5){
        msg='sexta'
    }
    else if(dia==6){
        msg='sabado'
    }
    return msg;
}
