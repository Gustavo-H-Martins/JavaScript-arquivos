// Inserção de dados
const message = prompt('Digite uma palavra') // Try edit me

// primeira mensagem
console.log(message);

//Função de tratamento
function mapadepalavra(message)
{ let mapa = {};
  for (let i = 0; i <message.length; i++) 
    {
    let letra1 = message[i];
    if (mapa[letra1])
    {
     mapa[letra1].push(i);
    }
    else
    {
      mapa[letra1] = [i];
    }
  }
  return mapa;
}
let palavranomapa = mapadepalavra (message);

// Laço de desmonstração da solução.
for (let letra2 in palavranomapa) 
{   
    console.log(letra2 + ": " + palavranomapa[letra2]);
}


// dado sem tratamento
console.log(message);

