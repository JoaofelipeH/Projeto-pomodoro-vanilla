# 🍅 Pomodoro Focus Timer | Vanilla JS

Um cronômetro Pomodoro funcional e robusto, desenvolvido exclusivamente com tecnologias web nativas (Vanilla JS, HTML5 e CSS3). Este projeto demonstra a aplicação de conceitos fundamentais de engenharia de software e manipulação direta da API do DOM.

## 🎯 Objetivo do Projeto
O objetivo principal foi construir uma ferramenta de produtividade que gerencia estados de tempo e processos assíncronos de forma eficiente, garantindo uma interface síncrona com os dados em memória.

## ⚙️ Funcionalidades Implementadas
* **Controle de Fluxo (Start/Pause):** Sistema de início e interrupção do cronômetro com preservação do estado do tempo.
* **Reset de Aplicação:** Função para restaurar o estado inicial da variável de tempo (1500 segundos) e atualizar a interface visual simultaneamente.
* **Formatação em Tempo Real:** Lógica matemática para conversão de segundos em formato `MM:SS`, utilizando `padStart` para garantir a estética visual (ex: `05:00`).
* **Gerenciamento de Interface (DOM):** Atualização dinâmica de elementos HTML sem a necessidade de recarregar a página.

## 🧠 Arquitetura e Conceitos Aplicados
A construção deste software envolveu desafios técnicos específicos que demonstram maturidade no desenvolvimento Front-end:

1. **Gestão de Processos (Motor de Intervalo):** Utilização do `setInterval` para criar o motor de contagem. O controle é feito através da captura do ID do processo (`intervaloid`), permitindo o controle total sobre a execução.
2. **Prevenção de Concorrência (Singleton Pattern):** Implementação de uma trava lógica que utiliza `clearInterval` antes de iniciar qualquer novo ciclo. Isso impede a criação de múltiplos processos simultâneos, evitando o consumo excessivo de memória e a aceleração indevida do tempo.
3. **Persistência de Estado Local:** Separação clara entre a **Variável de Estado** (memória RAM) e o **Elemento de Visualização** (DOM). Isso permite que o cronômetro seja pausado e retomado sem a perda de sincronia dos dados.
4. **Escopo Global vs. Local:** Organização estratégica de variáveis para permitir que diferentes funções (Iniciar, Pausar, Resetar) manipulem o mesmo conjunto de dados de forma consistente.

## 🛠️ Tecnologias
* **JavaScript (ES6+):** Lógica de temporização, manipulação de eventos e cálculos matemáticos.
* **HTML5:** Estrutura semântica dos elementos de controle e exibição.
* **CSS3:** Estilização da interface e feedback visual ao usuário.

---
*Projeto finalizado por João Felipe*
