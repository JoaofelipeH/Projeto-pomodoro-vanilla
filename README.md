# 🍅 Pomodoro Focus Timer | Vanilla JS

Um aplicativo de cronômetro Pomodoro funcional e robusto, desenvolvido exclusivamente com tecnologias web nativas (Vanilla JS, HTML5 e CSS3). 

Este projeto foi construído para solidificar os fundamentos de engenharia de software no Front-end, com foco em manipulação direta da API do DOM, gerenciamento de estado na memória e controle de processos assíncronos.

## ⚙️ Funcionalidades
* **Iniciar:** Dispara o cronômetro padrão de 25 minutos.
* **Pausar:** Interrompe o tempo exato, congelando o estado sem perda de dados.
* **Reiniciar (Reset):** Restaura o estado da memória para o valor inicial e força a atualização sincronizada da interface visual (DOM) para `25:00`.
* **Formatação Dinâmica:** Renderização em tempo real do formato `MM:SS`, utilizando `padStart` para garantir a integridade estética (ex: `09:05`).

## 🧠 Arquitetura e Lógica Aplicada
A construção deste software evitou o uso de frameworks para garantir o entendimento profundo de como o navegador processa as informações:

1. **Separação de Preocupações (Estado vs. DOM):** Implementação clara da diferença entre o "dado bruto" (a variável de tempo rodando na memória RAM) e a "camada de visualização" (o conteúdo injetado no HTML via `textContent`).
2. **Controle de Processos e Threads:** Domínio sobre as Web APIs de tempo (`setInterval` e `clearInterval`), utilizando IDs de referência em memória para gerenciar motores de execução em segundo plano.
3. **Prevenção de Memory Leaks e Concorrência:** Uso do padrão Singleton lógico no botão de Iniciar. Ao aplicar `clearInterval` antes de iniciar um novo ciclo, o sistema impede a criação de "processos fantasmas" simultâneos, evitando consumo excessivo de memória e o bug de aceleração do tempo.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estrutura semântica da interface.
* **CSS3:** Estilização e layout.
* **JavaScript (ES6+):** Regras de negócio, mutação de estado e manipulação de eventos.

---
*Desenvolvido por João Felipe*