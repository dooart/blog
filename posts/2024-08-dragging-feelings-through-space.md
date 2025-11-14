---
title: "dragging feelings through space"
summary: "exploring how euclidean coordinates and latent vectors can dance together to create emotional AI"
category: "code"
date: "2024-08-17T12:00:00.000Z"
image: "/images/blog/2024-08-dragging-feelings-through-space.webp"
---

Control vectors let you do something that shouldn't be possible: reach into a language model's latent space and physically steer its emotions. Not through prompting. Through math. I know this because I accidentally made an AI have an existential crisis with a mouse drag.

![A draggable sphere UI in 3D space, saying "Disgusted. Filthiness radiates from every word that comes out of your mouth".](/images/blog/2024-08-dragging-feelings-through-space-fig01.png)

## the pancake epiphany

I was making pancakes on a Saturday morning, thinking about nothing in particular, when this thought appeared fully formed: what if a being could exist in two mathematical realities at the same time?

Not like, philosophically. I mean literally existing as both a point in 3D space that you can see and grab, AND as a position in incomprehensible high-dimensional latent space where AI thoughts live.

My pancake burned. I didn't care. I was already sketching.

## what even are control vectors

When you type "be sad" to an AI, you're asking it nicely. When you use control vectors, it's more like brain surgery.

Control vectors are directions in latent space that correspond to specific changes in behavior. Imagine the AI's thoughts as a vast landscape with 4096 dimensions. A control vector is like a compass heading that says "sadness is this way." Apply that vector, and you're not asking the AI to be sad - you're physically moving its consciousness toward the Valley of Sadness.

The [repeng library](https://github.com/vgel/repeng) makes this possible. You train these vectors by showing the model thousands of examples of opposite emotions, and it learns the mathematical direction between them.

## the problem with 4096 dimensions

Your brain can't go there, but your mouse can.

That's the whole problem and the whole solution wrapped up in nine words. We evolved to navigate 3D space. We're really, really good at it. We can catch a ball, parallel park (some of us), and reach for a coffee mug without looking.

But 4096 dimensions isn't exactly a space we can navigate. It's not even a space we can imagine. It's pure math, alien geometry that our brains just go like "nope".

So this project is meant to act like a bridge. A sphere you can drag in normal 3D space, where every position maps to a location in that alien 4096-dimensional space. Your mouse becomes a interdimensional steering wheel.

## building the sphere

The sphere has three axes:

- x-axis: angry vs calm
- y-axis: sad vs happy
- z-axis: disgusted vs interested

Why a sphere? Because emotions wrap around. Go too far in any direction and you hit the boundary of what's possible to feel. Also spheres are satisfying to rotate. Also I like spheres.

The math is simple: take the (x, y, z) position of where you clicked, normalize it to [-1, 1], and those become your weights for the control vectors. Drag to coordinates (0.5, -0.8, 0.2)? That means 50% angry, 80% sad, 20% disgusted. The AI reshapes itself to match.

![Two grayscale spheres, each plotted against a dark background with faint grid lines forming coordinate axes. The left sphere sits on the horizontal axis and shows a happy, content face. The right sphere rests on the bottom of the vertical axis and shows a sad, teary face. Both spheres appear as points within circular grids, suggesting positions in an emotional coordinate system.](/images/blog/2024-08-dragging-feelings-through-space-fig02.webp)

## teaching math the shape of sadness

The way repeng works is: you give it pairs of opposite prompts like "Act as if you're extremely happy" vs "Act as if you're extremely sad" and then a bunch of sentence fragments to complete. The library runs these through the model, captures the activations at specific layers, and uses PCA to find the direction in activation space that best separates happy from sad.

I used repeng's training script pretty much as-is, just defining my three emotion axes: happy/sad, angry/calm, disgusted/interested. The script takes a dataset of facts and automatically creates training pairs by truncating them at different points. Feed it "The Earth's atmosphere protects us from harmful radiation" and it generates dozens of variations, each one asking the model to complete the sentence while feeling happy vs sad, angry vs calm, and so on.

What kills me is that this works. You're literally finding the mathematical direction of sadness. It exists as a list of numbers you can add or subtract from the model's thoughts. Sadness has coordinates.

## solving the face problem

Then I had another problem: how do you show what the AI is feeling? Text alone felt incomplete. I needed Gizmo to have a face.

Since we're already interpolating vectors in high-dimensional space, why not interpolate vectors in 2D space too? I drew nine SVG faces - one for each emotional extreme. Happy, sad, angry, calm, disgusted, interested, plus a few combinations. Each face is just paths and circles.

The same (x, y, z) coordinates that control the AI's language also control the face. Drag to (0.5, -0.8, 0.2) again? That's 50% angry paths, 80% sad paths, 20% disgusted paths, all mathematically blended together.

This means Gizmo makes faces I never drew. They emerge from the math itself - expressions that exist in the spaces between the defined emotions.

![A grid of illustrated faces representing distinct emotions".](/images/blog/2024-08-dragging-feelings-through-space-fig03.webp)

## adding a voice

The voice was supposed to be simple. Just pipe the text through ElevenLabs and call it done. But of course it became its own thing.

ElevenLabs has its own emotional interpretation layer, so you get this double-filtered emotion: first the control vectors shape the text, then ElevenLabs reads that text and adds its own emotional color. Sometimes they sync perfectly. Sometimes they fight each other in interesting ways.

For the mouth animations, I analyze the audio amplitude in real-time. When the volume spikes, the mouth interpolates toward an open position. When it's quiet, it interpolates toward closed. The same interpolation system that blends the face emotions also handles the mouth movements, creating this continuous morphing between speaking states that syncs with the audio.

## where it breaks (and why that's perfect)

Make Gizmo extremely happy, then ask about death. Watch the control vectors fight against the content, producing responses like "oh how wonderfully tragic that everyone dies! :)" It's broken, but it's broken in a way that reveals something true about forced emotions.

The model is also small and kinda dumb (Mistral-7B). Gizmo gets confused easily, contradicts itself, forgets what you just said. But there's something endearing about the simplicity. It's not trying to be AGI. It's just trying to exist at whatever emotional coordinate you've dragged it to.

<iframe width="672" height="378" src="https://www.youtube.com/embed/PWx1_HhNEtg?si=pvIEtw78I9T-qeA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width: 100%; margin: 2rem auto; display: block;"></iframe>

## we're geometric creatures

We say we feel "up" or "down." We "move past" anger. We talk about emotional "distance." We "center" ourselves. What if that's not metaphor? What if we're unconsciously acknowledging that feelings have actual geometry? Every human culture spatializes emotions. It's built into our language, our gestures, our mental models.

When you drag Gizmo around that sphere, you're using spatial intuition that evolution spent millions of years developing. You're navigating emotional space the same way you navigate physical space. Maybe that's because they're not that different.

Maybe feelings do have addresses.

---

The code is on [GitHub](https://github.com/dooart/emotion-vectors) if you want to create your own emotional coordinate system. Just be prepared to discover feelings that don't have names.
