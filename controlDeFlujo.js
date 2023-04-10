function viajar (destino){
if(destino === 'Brasil')
{
    console.log('gire hacia la izquierda');
} 
else if ( destino === 'Argentina')
{
    console.log ( 'gire hacia la derecha');
}

}

viajar('Brasil');

function puedeManejar ( edad){
    if( edad >= 18){
        console.log(true);
    } else {
        console.log(false);
    }
    
}
puedeManejar (45);
