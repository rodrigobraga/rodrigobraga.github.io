---
layout: post 
title: "Blackbird JS"
date: "2011-01-24 12:00:00"
categories: [dev]
tags: [javascript]
summary: um logger simples e interessante para javascript.
comments: true
---

# Blackbird JS

Depurar é caro e desgastante, isso é fato; atualmente muito do esforço desprendido para subir toda a pilha necessária para depurar situações específicas foi substituído por [TDD](http://pt.wikipedia.org/wiki/Tdd), [BDD](http://en.wikipedia.org/wiki/Behavior_Driven_Development) e afins, o que reflete também em um produto muito mais bem acabado e com um design arrojado.

Mas tudo isso é assunto para outro dia.

Durante anos javascript foi para mim uma pedra no sapato; trechos de códigos inelegíveis e sem qualquer tipo de iniciativa buscando melhorias advindo do uso de padrões, frameworks ou qualquer outra coisa eram comuns; some a isso a incompatibilidade entre os navegadores e tínhamos (e ainda temos) o caos instaurado.

Depurar javascript pode ser uma tarefa ainda mais delicada e chata; mas algumas inciativas como [jQuery](http://jquery.com) tornaram as coisas bem mais divertidas e o movimento em direção à uma [web padronizada](http://pt.wikipedia.org/wiki/Web_standards) tem permitido que vivamos em um mundo melhor.

Usar [TDD](http://www.infoq.com/articles/javascript-tdd) com javascript é uma alternativa real, porém mais um assunto para outro dia :)

Pensando ainda apenas na depuração em si, uma ferramenta bastante útil e muito interessa é o [Blackbird JS](http://www.gscottolson.com/blackbirdjs)

![Blackbird JS](/assets/images/2011/blackbirdjs.png)

O Blackbird permite acompanharmos através de um painel uma série de mensagens em relação à execução da aplicação, o seu uso é muito simples e prático, o exemplo é auto-explicativo e outras informações estão no [site oficial](http://www.gscottolson.com/blackbirdjs).

```
log.debug('this is a debug message');
log.info('this is an info message');
log.warn('this is a warning message');
log.error('this is an error message');
```

É mais um dos casos onde uma ferramenta simples, pode acabar agregando bastante!
