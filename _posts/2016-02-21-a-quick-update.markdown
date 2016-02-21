---
date:   2016-02-21 16:40:49 -0500
title:  A Quick Update
---

Hello again! It has been a while, hasn't it? I've been working on what I had hoped would be my next post since October,
but it's been slow going, partly due to perfectionism (I *obsess* over diagrams, which is unfortunate because I'm not
great at producing good ones), and partly because I'm actually finding it rather difficult to take all the ideas I've
been playing with and string them into a complete and coherent narrative. So instead of waiting for that, here's the
brief(-ish) version of what I've been up to so far!

Over the summer, I hacked together a small prototype of a language for relating multiple text files to each other. The
idea behind the language is to describe change-aware connections between duplicated pieces of information in different
places. Using that description, the prototype's ‘difference engine’[^resist] can take changes to any one (or multiple)
files and propagate them through the connections to all of the others. A ‘function’ written in this language can be
thought of as generalizing a parser or a printer—unlike traditional functions, it doesn't have designated inputs or
outputs, but can be run bidirectionally[^boomerang] and differentiably,[^differentiable] converting files into objects
or objects back into files, and patches into ‘object diffs’ into new patches to be applied. I'm interested in this
technique as an alternative to the techniques that programmers have typically used to manage the cost of change, such as
abstraction and not repeating yourself. The prototype, of course, is full of bugs and doesn't deliver on many of the
things that I want, but it does make it a little easier to talk about some of these ideas.

[^resist]: I just couldn't resist.

[^boomerang]: I'm drawing a ton of inspiration from the [Boomerang system](http://www.seas.upenn.edu/~harmony/)
    developed at UPenn—I almost started with a fork of their code but found the core bits slightly impenetrable.

[^differentiable]: In the mathematical sense, kind of! A mathematical function is differentiable if you can not
    only apply it to _x_ and get a _y_, but also get something from it that you can apply to a change in _x_ to get a
    change in _y_. My idea of differentiable functions is the same, only the idea of a change in _x_ is a discrete patch
    instead of a mathematical infinitesimal. Despite losing the whole concept of continuity, there are more parallels to
    calculus than you might think—composing functions still uses a version of the chain rule, for instance.

I've also been working on using techniques from automated theorem proving to generate code that implements a given
interface, subject to certain constraints.[^djinn] I'm rather less optimistic that this thread is going to yield results
that I can put to work; the field is difficult and full of some pretty big brains, which makes me doubt I'd be the first
to get to a practical application. But it's fun, and potentially hugely rewarding—programs written in a declarative
style are considerably easier to modify and relate to other things than programs written in an imperative style, and
this project would enable a much larger set of programming problems to be implemented declaratively if successful. (This
is the continuation of a rant you might have heard me go on in other contexts describing ‘crock-pot
programming’,[^crackpot] about how functions in APIs would be easier to evolve and use if instead of relying on
parameter positioning and/or naming to carry meaning, they used type information to simply combine all arguments into
the meaning that made most sense, like throwing ingredients into a crock pot. Probably not something you'd want to try
in many existing languages; but, in a *new* language....)

[^djinn]: Haskell has a utility called [Djinn](https://hackage.haskell.org/package/djinn) which implements similar
    ideas, but is largely only used as a toy (as far as I know). I'm experimenting with trading decidability for the 
    ability to search higher-ranked types, which Djinn lacks, and tagging the types that go into the inference with
    effect labels that describe what I want to happen.

[^crackpot]: Obvious ‘crackpot programming’ snark is obvious.

It may be a little difficult to see how those two projects connect to my goal of cracking timeless technology; this is
where finishing that manifesto of mine might help. The brief version—perhaps so brief that it sounds silly—is that
everything is related to other things, and the *avoidable* cost of change is identically the cost of either maintaining
these relationships manually or dealing with the consequences when they break. I'm bucketing these relationships into
two groups: **connections**, which describe *how* several things are parts of the same thing, and **rules**, which
describe *why* you get one thing as a consequence of another thing.

My hunch is that capturing most of the work that needs to be done when technology needs to change amounts to expressing
connections and rules in a way that the computer can interpret and act upon. Connections would make sure that everything
that needs to change is looked at, and rules would make sure that everything that needs to be preserved remains
true.[^equivocation] The projects described above (and a handful of other side projects not worth enumerating) are
intended to be experiments in that direction.

[^equivocation]: I should probably mention that, while I do have a ton more to say about connections and rules (which
    this footnote is too small to contain etc.), I'm not even fully convinced that they'll be separate things in the
    final analysis. I originally thought that logical inference would just be another form of connection, between
    antecedent and consequent; or alternatively, that a connection as I'm currently describing it is just a simple form
    of rule. But this equivocation has caused me so many practical problems so far that it's become more useful to treat
    them as separate concepts.

With respect to more practical considerations, I haven't made any big moves—there's no company, I haven't gone off to
grad school or anything. I have had a lot of good-to-great conversations with people who've been interested in the ideas
I'm kicking around, and I've taken the difference engine prototype around and given a few demos, but I haven't found a
partner yet. I think I still have a lot more basic research to do before I try to align myself to a product.

I had been intending to post a recorded demo of the prototype here, but I've been too nervous to do so without a really
solid explanation of the direction I'm intending to take it—it's honestly not that impressive without that context, and
I've lost the interest of a few people by showing it off before explaining why I made this language instead of ‘writing
a script to do this’. This is probably a bad excuse at this point.

Well, that's about it! Relative to the sprawling rant I have sitting in my drafts folder, this *is* actually a quick
update! Maybe I'll try writing something a little off topic next, just to habituate to smaller and more frequent posts,
without the stress of getting all the ideas just right.
