# Desafio Cielo

## Sobre

Este projeto web foi desenvolvido com o propósito de transformar informações de uma massa de dados (json) de um sistema legado em um serviço/API a ser exposto e consumido. Portanto, o sistema tem como objetivo apresentar os dados em formato que agregue valor analítico para o usuário. Para isso, o sistema conta com tabelas interativas, gráficos e dados visuais como fontes de informações para impulsionar uma visão mais precisa dos dados.
O sistema proporciona interação com os dados através de filtros, ordenação e busca, além de oferecer três operações básicas de armazenamento persistente (Read, Create, Delete). Desse modo, o sistema foi desenvolvido baseado no conceito single-page applications com framework AngularJS e Node.js.

</br>

## Instruções para rodar o projeto</br>

1º Passo - Acesse a pasta “/backend” e rode o arquivo server.js através do comando “node server.js”.

2º Passo - Instale a extensão **Web Server for Chrome** do navegador Chrome (encurtador.com.br/dgmJU) 

3º Passo - Selecione a pasta do projeto através do botão “CHOOSE FOLDER”
> Atenção: Observe se o server está na porta padrão do projeto “8887”, caso não esteja, altere na opção "Enter Port".

4º Passo - Acesse o sistema através do link http://127.0.0.1:8887

</br>

## Detalhes do projeto</br>

- Single Page Application
- Roteamento de Páginas
- Apresentação dos dados em tabelas e gráficos
    - Filtro inteligente em todos os campos da tabela.
    - Ordenação de Colunas (Funcionalidade de inversão com duplo click)
    - Máscara nos dados impressos
    - Imprimir Gráfico
- Detalhes das transações
- Deleção de registro
- Cadastro de novo registro
    - Validação do tipo $dirty de todos os campos do formulário 
- Tratamento de erros
- Responsivo

</br>
</br>

# Fluxo de teste do Sistema

Acesse o sistema http://127.0.0.1:8887/#/inicio

**Tela: Início**

- Grid Tabela

*Campo busca* - Realize uma busca global referenciada por todas as colunas da tabela.

*Detalhes do registro* - Na Coluna “detalhes” clique no botão azul referente ao registro desejado e terá informações detalhadas sobre a transação selecionada.

*Ordenação da tabela* - Clique na coluna desejada para ordenar a tabela com base no critério da coluna alvo do clique, além do mais, duplo clique inverte a ordenação.

*Seleção/Deleção* - Selecione um ou vários registros através dos checkbox da tabela e clique em deletar.

- Grid Formulário

*Cadastro Transações* - Adicione uma nova transação preenchendo o formulário (Automaticamente todas as informações dinâmicas do sistema sofrerá refresh)

*Validação $dirty* - todos os campos do formulário contam com validação do tipo $dirty e o botão de cadastro ficará disponível somente com o preenchimento de todos os campos.

**Tela: Dashboard**

- Gráficos

*Salvar em PDF/SVG/CSV/XLS* - botão direito no gráfico e selecione a opção desejada.

*Imprimir gráfico* - botão direito no gráfico e selecione a opção desejada “Print Chart”

*Visualizar datatable* -  botão direito no gráfico e selecione a opção desejada “Hide Data Table”

*Interação* - Realize clique para interação com o gráfico.

**Tela: Tabela**

*Tabela geral* - esta tabela conta com todos os dados da massa de dados fornecida, diferentemente da tabela da tela inicial que conta com uma visão resumida.

*Ordenação da tabela* - Clique na coluna desejada para ordenar a tabela com base no critério da coluna alvo do clique, além do mais, duplo clique inverte a ordenação.




