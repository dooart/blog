---
title: "ai soul programming"
summary: "an entirely new way of making the computer do the work for you"
category: "code"
date: "2024-02-26T12:00:00.000Z"
---

One of my main mistakes when I started learning Chinese was the excessive zeal around getting the tones right. There's a well-known piece of trivia about the Chinese language, you've probably heard it before. It's that even though mā (妈) and mǎ (马) might sound exactly the same, one means "mother" and the other means "horse". That's because they have different tones that non-native speakers have a hard time distinguishing.

Knowing that, I naturally assumed that paying a lot of attention to the tones when speaking was the only way for a native speaker to understand that I wasn't implying his mom was an equine.

It eventually clicked for me that Chinese is all about context. Even though native speakers use the tones correctly when speaking, they'll still be able to understand that I, a beginner, am not really asking if they live near or far their horse's house.

On the other hand, it's not cool to put too much of the burden of communication on the interlocutor, so when speaking Chinese the nice thing to do is still doing your best to use the tones correctly. As with most things in life, what you're looking for is balance. Communication is a shared effort, so taking all the burden for yourself is also not cool because that means underestimating the other person.

When I started programming AI souls, I made the same mistake I did with Chinese: insisting on overprecision. Both taught me the value of balance in communication.

## Traditional programming is a one-sided conversation

It's no accident that programming languages are called "languages". When you write something in Python or JavaScript, you're effectively trying to communicate something to the computer. But you're talking AT the computer so it's a bit of a one-sided conversation.

In traditional programming, all the burden of communicating with a computer through a programming language is on you, and you alone. Thanks to operating systems and open source, that burden is not as heavy as it used to be because there are layers over layers of software all the way down to the metal making everything a lot simpler. But forget just a single stupid bracket and nothing works anymore.

## Programming AI souls

A few months ago I learned about the concept of soul programming when I stumbled upon the [Soul Engine](https://github.com/opensouls/soul-engine) - an extremely elegant API designed around the idea of emulating a human brain with LLMs. It makes the process of infusing personalities into AIs really easy, and the results are incredible. See it for yourself in this demo where [two antagonistic souls talk to each other](https://www.youtube.com/watch?v=bVxSk6Typ90) - if it doesn't make you think about Westworld, the only explanation is that you haven't watched it yet.

I first approached soul programming with the same mindset as I've always approached anything else in traditional programming. I assumed the burden of communication was mine alone, so I wrote the soul code in an overly prescriptive way, trying to put control structures everywhere.

For example, at some point I tried making a call scheduling flow. The AI would ask the user when it should call them for a check-in. My first attempt was asking the soul to extract the date from the user's answer, then do a date comparison using with good ol' code to figure out how far in the future that was, and then fork the flow depending on the result, which would also result in two additional flows I'd have to teach the soul how to handle.

What I should have done was much simpler: give the soul all the data, let it figure everything out by itself, then ask for the relevant information at the end.

After a lot of experimentation, it became clear to me that the correct approach is to **always** assume that the AI soul will do exactly what you want, with the bare minimum amount of instructions and control. And only when it doesn't work you try adding more stuff.

## Don't underestimate the machine's intelligence

When you're dealing with AI souls, being too prescriptive will stifle the intelligence inside the machine. The best results will come from gently nudging the soul towards your objective. It's about partnership, not control.

Just like speaking another language, soul programming is about finding that sweet teamwork spot. It's not just you talking at them, it's about working together to get it right.

---

Intrigued? You can learn more about soul programming at the [Open Souls X account](https://twitter.com/OpenSoulsPBC).
