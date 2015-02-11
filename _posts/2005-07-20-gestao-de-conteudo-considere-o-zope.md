---
layout: post 
title: Zope
date: "2005-07-20 12:00:00"
categories: [dev]
tags: [web, dev]
summary: Gestão de conteúdo? Considere o Zope.
comments: false
---

# Gestão de conteúdo? Considere o Zope.

O Zope evolui gradualmente e se torna cada vez mais em uma opção robusta, segura e fácil, características evidentemente herdadas do Python.
Tantos aspectos positivos, porém, não parecem suficientes para que a ferramenta entre definitivamente no mercado corporativo e possa competir em pé de igualdade com Java, .NET e outros.
O que falta ao Zope então? – esta é a pergunta óbvia na cabeça dos iniciantes ou curiosos.
Eu respondo: falta(va) estratégia!

## Trocando em miúdos

### O material humano!

A comunidade nacional hoje possui nomes que figuram nos “créditos” do Zope e também de ferramentas importantes baseados nele. Estas mesmas pessoas participam da comunidade, onde compartilham conhecimento e idéias, dando a oportunidade para que outras pessoas possam aprender a cada dia. O resultado é uma comunidade “forte” tecnicamente e ativa com muitas idéias fervilhando a cada instante (isso eu digo de cadeira, por que faço parte desta comunidade).

### Quem aposta nisso?

Grandes corporações têm apostado alto no Zope (e Python principalmente), o que há de gerar demandas interessantes de projetos e profissionais. Outro item no mínimo curioso é que empresas que se “beneficiam” têm financiado projetos voltados para o Zope. Este ciclo é muito saudável para a ferramenta, pois gera novos recursos e mais pessoas e empresas se interessam em ao menos conhecer o que o Zope pode fazer por elas. Esta seqüência acaba atraindo mais e mais interessados. No Brasil esse quadro ainda não é tão visível, mas vem crescendo e pode ser classificado como “potencial”.

### Qual a mágica do Zope? Quais suas vantagens?

Não há mágica… o Zope é uma plataforma de desenvolvimento web completa, segura e padronizada que oferece robustez, recursos e produtividade (destaque para este último item), para que qualquer equipe possa alcançar o máximo em excelência e qualidade em um tempo razoavelmente curto. Assim como o Python, o Zope permite que você pense na maior parte do tempo na solução ideal para o problema (o que é de certa forma independe da linguagem) do que em outros fatores importantes mas não cruciais como sintaxe da linguagem, ( { } ; … ) e recursos adicionais. A “simplicidade eficiente” do Zope permite isso – que se pense mais no problema do que em qualquer outra coisa!

## Anatomia Z

Vamos citar os itens básicos que compõem a “anatomia” do Zope e que (quase) inevitavelmente você usará ao construir uma aplicação qualquer com a ferramenta. Falaremos rapidamente sobre algumas delas no decorrer do texto, deixando os detalhes para uma próxima oportunidade.

### Sistema de Templates (Zope Page Templates ou ZPT)

Há vários pontos fortes a destacar, mas vamos citar os mais relevantes. Um deles é a possibilidade de separar a lógica da apresentação no sentido pleno deste conceito, incluindo aí a “separação” entre programadores e designers também, pois os ZPTs embutem novas propriedades nas tags HTML tornando–as “inteligentes”. Programadores e designers podem fazer alterações no projeto sem prejudicar o trabalho um do outro. Outro ponto muito forte é a possibilidade de criar o projeto baseado em um template dinâmico, ótima vantagem para os projetos menores e também os maiores.

### Além dos ZPTs

Como vimos, os Zope Page Templates provêem recursos valiosos, mas são “apenas” a camada de apresentação e conseqüentemente permitem a integração com scripts que podem fornecer toda a lógica necessária para a aplicação. Comumente os Scripts Python fazem esse trabalho. A utilização deste recurso (somado aos ZPTs) pode permitir que sua aplicação possua muitas propriedades interessantes, como escalabilidade, segurança e manutenção simplificada.

## Banco de dados orientado a objetos, nativo e de utilização natural

Persistência dos dados – o Zope possui um banco dados chamado ZODB (Zope Object Data Base) totalmente orientado a objetos e sua utilização é natural. Ou seja, quando você cria/manipula objetos no Zope, você está armazenando suas alterações, dados e etc. no ZODB. Um histórico de ações é mantido, o que permite facilmente que ações “indesejadas” sejam corrigidas, por exemplo.

### SGDB

O Zope é extensível e a comunicação com os principais SGBDs pode ser feita facilmente através de alguma extensão (que na verdade chamamos de “produto”) que ofereça os recursos necessários para isso. Desta forma, construir soluções que se façam da ajuda de algum SGBD para alcançar seus objetivos não é complicado.

### Extensível

Expansão e recursos adicionais?. A possibilidade de expansão é uma característica que faz do Zope uma ferramenta adaptável a qualquer necessidade. Afinal, você pode usar produtos (ou extensões) criadas por você ou por terceiros para que seu projeto seja único!

### Um completo sistema de segurança

O sistema de segurança do Zope é algo que você só acreditará quando ver com seus próprios olhos! Sem exageros, a máquina interna do Zope responsável pela segurança é muito bem elaborada. Não foi criado nenhum novo conceito, apenas usadas as boas idéias em relação à implementação de um sistema de segurança. Resumindo bem superficialmente, podemos nos atrever a dizer que para que um determinado “grupo de usuários” (role) possa ver determinado conteúdo, basta marcar (em checkboxes) as opções correspondente ao que você deseja. Experimente e comprove!

### Como aplicar isso na prática (e fazer do Zope um investimento altamente rentável)?

Este é sem dúvida um dos pontos mais importantes e delicados, e não é difícil imaginar porquê. Vejamos alguns itens diferenciais na escolha do Zope como plataforma de desenvolvimento.

### Produtividade

Produtividade é um ponto que gigantes do (desenvolvimento de) software vêm explorando há algum tempo. As ferramentas e conceitos que predominam atualmente consideram a produtividade como algo quase “sagrado”.
O Zope nos traz recursos e opções que tornam a produtividade natural, sem desestimular a mente do desenvolvedor. Ou seja, você será produtivo sem necessariamente usar recursos automatizados (ou wizards).

### Lucros!

São a menina dos olhos de qualquer empresa ou pessoa neste mundo capitalista. Poderíamos falar mais sobre o Zope, mas o pouco que comentamos já poderá ampliar seus horizontes e dar o pontapé inicial ajudando–o a implementar um ambiente de desenvolvimento que possa proporcionar colaboração da equipe e integração.
Outra vantagem é possuir um modelo capaz de atuar com as mais modernas tecnologias (do HTML ao webservice) de forma clara e simples, de forma tal que a mesma equipe em um mesmo ambiente com uma única ferramenta possa ter recursos suficientes para produzir soluções sólidas, pequenas ou gigantescas.
Observe que eu não disse que o Zope é uma “ilha” tecnológica e que ao adotá–lo você deverá usá–lo única e exclusivamente. Afinal, integração com o resto do mundo também é fundamental e o objetivo aqui é mostrar de maneira informal que podemos ir além do que imaginamos e alcançar objetivos audaciosos sem usar recursos que muitas vezes até são interessantes, mas devem seu sucesso muito mais à estratégia (marketing) do que excelência técnica.
O Zope tenta trilhar o caminho inverso. Resolveu ser primeiro excelente, para depois pensar em estratégia. Agora que o tempo passou e a qualidade está provada por a + b, é hora de trabalharmos em prol da Estratégia Z

> O texto _Gestão de conteúdo? Considere o Zope._ foi escrito originalmente para o portal [webinsider](http://webinsider.com.br/2005/07/20/gestao-de-conteudo-considere-o-zope/)
