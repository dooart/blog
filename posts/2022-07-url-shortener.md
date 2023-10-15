---
title: "url shortener with redis"
summary: "the web is definitely short of a shortage of shorteners, and yet... here's one more"
category: "code"
date: "2022-07-11T12:00:00.000Z"
---

I've been on a sabbatical for a few months and started feeling like it was time to find a new job. I carefully selected a dozen companies, made a sorted list starting with the ones I like the most and started applying to a few at a time.

One of these companies asked me to complete an assignment: creating a URL shortener. This was just a screening task and, therefore, a tiny project. The requirements made it optional to create a UI or use a real database. I set out to do something lightweight but got carried away and ended up making something I could actually put in production. 🙈

I decided to try a novel framework called [Fresh](https://fresh.deno.dev/) for this project, but soon started running into the kind of weird problems that appear when the tooling you're using isn't yet mature. To make sure I wouldn't blow the deadline debugging and fixing esoteric errors, I decided to stick to the good ol' Next.js running on Vercel combo.

The good news is I still found a way to sneak in some technology I hadn't used it in this project. This seemed to be the perfect opportunity to try out a key-value store such as Redis. I chose [Upstash](https://upstash.com) for the job, a company providing durable storage with Redis for serverless applications. And I must say it was a _breeze_ to integrate, somehow even easier than Mongo Atlas.

You can find the app running at https://s.dooart.dev. Here's [the code](https://github.com/dooart/url-shortener).

A final note: it is kind of cool to have my own URL shortening service, but what is even cooler is being able to go from `git init` to production in just a few hours. Software development for the web has come a long way!
