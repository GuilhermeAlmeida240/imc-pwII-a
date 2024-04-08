let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrPessoas = []

function cadastrar()
{

    let pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value,
    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas)

    ImprimirDados()

    //let imc = calculaImc(peso, altura);

    
    
    //classific(imc)
}

function calculaImc(peso, altura)
{
    return peso/Math.pow(altura,2)
}

function classific(imc)
{
    //let imcClasse

    if(imc <= 18.5)
    {
        return "Abaixo do peso"
    }
    else if(imc > 18.5 && imc <= 24.9)
    {
        return "Peso ideal"
    }
    else if(imc > 24.9 && imc <= 29.9)
    {
        return "Acima do peso"
    }
    else if(imc > 29.9 && imc <= 34.9)
    {
        return "Obesidade grau I"
    }
    else if(imc > 34.9 && imc <= 39.9)
    {
        return "Obesidade grau II"
    }
    else
    {
        return "Obesidade grau III"
    }

    // div.innerHTML += `
    //     <br>Classificação: ${imcClasse}
    // `
}

function ImprimirDados(){
    console.log('---------------------- ')
    div.innerHTML = ``


    

    for (let i = 0; i < arrPessoas.length; i++){
    
        div.innerHTML += `
    <tr>
      <td>${arrPessoas[i].nome} ${arrPessoas[i].sobrenome}</td>
      <td> ${arrPessoas[i].categoria}</td>
      <td> ${calculaImc(arrPessoas[i].peso, arrPessoas[i].altura).toFixed(2)} -  ${classific(calculaImc(arrPessoas[i].peso, arrPessoas[i].altura))}</td>
    </tr> 
    `

}
}

btn.addEventListener('click', cadastrar)