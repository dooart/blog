---
title: "1d cellular automaton"
summary: "fun with rules and patterns! kinda like conway's game of life but with one dimension less"
category: "code"
alternativeCover: "https://codepen.io/dooart/embed/vYdJWdy?default-tab=result"
date: "2022-05-22T12:00:00.000Z"
---

Many years ago I stumbled upon this [xkcd webcomic](https://xkcd.com/505/), which launched me into a profound existential crisis. It painted the best image of eternity I had ever seen. I suspect the crisis was exponentialized by the countless threats of eternal fire I've been exposed to during my fundamentalistic religious upbringing. Either way, it blew my mind.

The other thing this comic did was expose me to the concept of elementary cellular automata: an elegant and basic system where you take an input and apply a certain set of rules to it to produce an output. Then you use the output as an input and repeat it until... eternity.

Or until you run out of screen space, which is the case of the program you're hopefully seeing running on this page.

A few remarks about this one:

- If you read the generation rule's bits as a binary number and convert it into decimal, you'll get the name of the rule as explained [here](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html).
- The program loads rule 30 as the default because I think it's one of the most interesting ones due to how at the same time it is chaotic and unpredictable, but still yielding localized patterns.
- There is a train station in Cambridge where [rule 30 is used everywhere as a pattern](https://writings.stephenwolfram.com/2017/06/oh-my-gosh-its-covered-in-rule-30s/)! Definitely deserving of pilgrimage next time I find myself in the UK.
