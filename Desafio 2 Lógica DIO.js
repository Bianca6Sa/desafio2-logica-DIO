// Objetivo do jogo

function CalcularNivel (vitorias, derrotas) {
    let nivel 

    switch (true) {
      case CalcularNivel < 10: 
        nivel === "Ferro" 
        break
 
      case CalcularNivel >= 11 && CalcularNivel >=20:
        nivel === "Bronze"
        break

      case CalcularNivel >=21 && CalcularNivel >= 50:
        nivel === "Prata"
        break

      case CalcularNivel >= 51 && CalcularNivel >=80:
        nivel === "Ouro"
        break
        
      case CalcularNivel >= 81 && CalcularNivel >= 90:
        nivel === "Diamante"
        break
      
      case CalcularNivel >= 91 && CalcularNivel >= 100:
        nivel === "Lendário"
        break

      case CalcularNivel >= 101:
        nivel === "Imortal"
        break
  }

  return "A Heroína tem um saldo de **{CalcularNivel}** e está no nível de **{nivel}**"
}

// Mensagem de saída

let vitorias = 75
let derrotas = 48
let resultado 
resultado = vitorias - derrotas
console.log(resultado) 


