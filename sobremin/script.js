var span = document.querySelectorAll('.texto span')[0];

span.addEventListener('click',function(){
    var texto = document.querySelectorAll('.texto p')[0];

    if(texto.classList.contains('mostrar')){
        span.innerHTML = 'saiba mais';
        texto.classList.remove('mostrar');

    }else{
        span.innerHTML = "ocultar";
        texto.classList.add('mostrar');
    }

});

var span = document.querySelectorAll('.texto span')[1];

span.addEventListener('click',function(){
    var texto = document.querySelectorAll('.texto p')[1];

    if(texto.classList.contains('mostrar')){
        span.innerHTML = 'saiba mais';
        texto.classList.remove('mostrar');

    }else{
        span.innerHTML = "ocultar";
        texto.classList.add('mostrar');
    }

});
