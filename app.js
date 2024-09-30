// Objeto para executar as tarefas
const analisadorDeSequencia = {
    // Método para contar as ocorrências dos números na sequência
    contarOcorrencias: function(sequencia) {
      const contagem = {};  // Objeto para armazenar as contagens e a ordem dos numeros
      const ordemDaSequencia = []; //Array para armazenar a ordem dos numeros que surgem na sequencia
      
      // Iteração para percorrer a sequência
      for (let i = 0; i < sequencia.length; i++) {
        const numero = sequencia[i];
        
        // Verifica se o número já está no objeto contagem
        if (contagem[numero]) {
          contagem[numero] += 1;  // Incrementa se já estiver no objeto
        } else {
          contagem[numero] = 1;  // Inicializa com 1 se não estiver no objeto
          ordemDaSequencia.push(numero); // Armazena o novo número da sequência na array
        }
      }
  
      // Retorna o objeto contagem e a array com a ordem da sequência
      return {contagem, ordemDaSequencia};
    },
  
    // Método para imprimir os resultados formatados
    imprimirResultados: function(sequencia) {
        const { contagem, ordemDaSequencia } = this.contarOcorrencias(sequencia);  // Obter contagem e ordem da sequencia
        
        // Iteração para imprimir os resultados no console
        for (let i=0 ; i < ordemDaSequencia.length ; i++) {
          console.log(`${ordemDaSequencia[i]} ocorre ${contagem[ordemDaSequencia[i]]} vezes`)
        }
      }
    };
    

// Exemplo de teste
const sequencia = [1,2,2,1,4,3,2,1,2,3,1,5];
analisadorDeSequencia.imprimirResultados(sequencia);
  