function calcularMelhorPreco()
      {
        // validar os campos

        let precoAlcool = document.getElementById('alcool').value
        let precoGasolina = document.getElementById('gasolina').value
        
        if (precoAlcool == "" )
          {
            alert("Preencha o preço do Álcool")
          }
        else if (precoGasolina == "")
          {
            alert("Preencha o preço da Gasolina")
          }
        else
          {
            /* 
            Calcular se é melhor usar álcool ou gasolina
            se valorAlcool / valorGasolina >=0.7 
            é melhor utilizar Gasolina senão é melhor uttilizar álcool
            */
            let resultado = precoAlcool / precoGasolina
            if ( resultado >= 0.7)
            {
              document.getElementById('resultado').innerHTML = "Melhor utilizar Gasolina" 
            }
            else
            {
              document.getElementById('resultado').innerHTML = "Melhor utilizar Álcool"
            }
          }
      }