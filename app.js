// Objeto para executar as tarefas
const analisadorDeSequencia = {
    // Método para contar as ocorrências dos números na sequência
    contarOcorrencias: function(sequencia) {
      const contagem = {};  // Objeto para armazenar as contagens
      
      // Iteração para percorrer a sequência
      for (let i = 0; i < sequencia.length; i++) {
        const numero = sequencia[i];
        
        // Verifica se o número já está no objeto contagem
        if (contagem[numero]) {
          contagem[numero] += 1;  // Incrementa se já estiver no objeto
        } else {
          contagem[numero] = 1;  // Inicializa com 1 se não estiver no objeto
        }
      }
  
      // Retorna o objeto contagem e a array
      return {contagem};
    },
  
    // Método para imprimir os resultados formatados
    imprimirResultados: function(sequencia) {
      const { contagem } = this.contarOcorrencias(sequencia);  // Obter contagem e ordem da sequencia
      
      // Iteração para imprimir os resultados no console
      for (let numero in contagem) {
        console.log(`${numero} ocorre ${contagem[numero]} `+(contagem[numero] == 1 ? "vez" : "vezes"));
      }
    }
  };

// Exemplo de teste
const sequencia = [1,2,2,1,4,3,2,1,2,3,1,5];
analisadorDeSequencia.imprimirResultados(sequencia);
  