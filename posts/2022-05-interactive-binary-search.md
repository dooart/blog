---
title: "interactive binary search"
summary: "plus tips on how to not flunk technical interviews for dumb reasons like it happened to... uhh... my cousin"
category: "code"
alternativeCover: "https://codepen.io/dooart/embed/jOZPEMW?default-tab=result"
date: "2022-05-03T12:00:00.000Z"
---

I've recently failed a technical interview because I couldn't implement Binary Search in 30 minutes.

During the past 5 years, I've been away from software development roles. I've recently decided to find work as an engineer again. First, because I've dearly missed doing more technical work. Second, I've been curious to see how all these years in product management and engineering management have changed me as an engineer.

Then I found an interesting remote company and applied to one of their positions. I passed the first technical interview, but I flunked the second one.

When the interviewer told me that the interview challenge was implementing Binary Search, I got cocky and thought I'd be done in half the time. That was my first mistake. I underestimated the problem and jumped straight into coding without thinking first. This resulted in a bad decision on how to structure the algorithm. Instead of starting from scratch, I kept trying to brute force towards a working algorithm. That just made things worse, not only because I kept adding bugs as I patched others, but because it gave the interviewer a really bad impression of my approach to coding.

My bruised ego and I decided to make a digital lemonade out of this whole endeavor and immediately started working on this project after the interview, to make sure I'll never embarrass myself again with this algorithm in particular (as if there weren't plenty of other algorithms just waiting to embarrass me again). Ironically, without the pressure of someone virtually watching over my shoulder, I wrote the algorithm part of this project in around 10 minutes.

Two more things worth mentioning about this project:

- I wanted to have the ability to step through the algorithm execution while still keeping it recognizable, so ES6 generators seemed like a good solution. I wasn't sure whether they'd play well with recursion and found out they actually do!
- I wrote it in AlpineJS, a "minimal tool for composing behavior directly in your markup." It was a delight to use and around 0x11011011 times easier to learn than any other modern directive-based framework (although it's not recommended for large projects).

And here are some of the lessons I've learned about technical interviews:

- Never jump straight into coding. Start by manually running through the algorithm with the interviewer with a reasonably small input sample. This should give you more clarity and help prevent coding yourself into a corner.
- If the interviewer provides you with a large test case, ask if you can first make your algorithm work with a smaller one. It's much easier to debug code running over 10 elements than 100.
- Remember back in college when you learned in Algorithms 101 how to write loop invariants before writing the loop itself? Remember when you immediately forgot about it after your final exam? This tool exists for a good reason, and you should use it. Especially when working on this kind of algorithm.
- Even if you're told the interview won't require algorithm memorization (it indeed didn't in my case), it won't hurt to spend some time studying some of them (eg. binary search, tree traversal, linked list manipulation, counting sort, quick select, etc). HackerRank has a pretty decent [interview prep kit](https://www.hackerrank.com/interview/interview-preparation-kit).
