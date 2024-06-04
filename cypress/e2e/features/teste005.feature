# language: pt

Funcionalidade: Verificação da presença da categoria Acessibilidade na página de navegação

  Contexto:
    Dado que acesso o site do governo

  Cenário: Verificar se a categoria Acessibilidade está presente na navegação
    Quando eu clico no menu
    E seleciono o link Acessibilidade
    Então verifico se a categoria Acessibilidade está presente na navegação