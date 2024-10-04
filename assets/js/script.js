const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `O seu IMC é ${imc}. (${nivelImc})`
    setResultado(msg, true);


    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

        if(imc > 40){
            return nivel[5];
        }
        if(imc >= 34.9){
            return nivel[4];
        }
        if(imc >= 29.9){
            return nivel[3];
        }
        if(imc >= 24.9){
            return nivel[2];
        }
        if(imc >= 18.6){
            return nivel[1];
        }
        if(imc < 18.6){
            return nivel[0];
        }
    }

    function criaP(){
        const paragrafo = document.createElement('p');
        return paragrafo;
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const paragrafo = criaP();

        if(isValid){
            paragrafo.classList.add('paragrafo-resultado');
        }
        else{
            paragrafo.classList.add('bad');
        }

        paragrafo.innerHTML = msg;
        resultado.appendChild(paragrafo);
    }
})