# language: pt
Funcionalidade: Verificação da página Notícias
  Descrição: testar se a página de notícias está funcionando corretamente

  Contexto:
    Dado que acesso o site do governo

  Cenário: Verificação dos textos e visibilidade das imagens da área Empresas & Negócios
    Quando eu clico no menu
    E seleciono o link Notícias
    Então verifico se a página de Notícias está funcionando