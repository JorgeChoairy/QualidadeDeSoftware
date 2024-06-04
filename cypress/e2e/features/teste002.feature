# language: pt

Funcionalidade: Acesso ao site do governo
  Descrição: Testar a navegação e visibilidade das imagens no wrapper na área de Empresas & Negócios

  Contexto:
    Dado que acesso o site do governo

  Cenário: Verificação da visibilidade das imagens da área Empresas & Negócios
    Quando eu clico no menu hamburguer
    E seleciono o link Empresas e Negócios
    Então verifico se as imagens estão visíveis