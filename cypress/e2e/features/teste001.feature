# language: pt

Funcionalidade: Acesso ao site do governo
  Descrição: Testar a navegação, texto e visibilidade das imagens no wrapper na área de Simplifique

  Contexto:
    Dado que acesso o site do governo

  Cenário: Verificação dos textos e visibilidade das imagens da área Empresas & Negócios
    Quando eu clico no menu hamburguer
    E seleciono o link Simplifique!
    Então verifico se os textos e imagens estão corretos e visíveis