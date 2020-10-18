---
title: About this project
description: About us, how to contribute and where to reap your karma earned
date: 2020-08-19
tags: about, help, karma
---

## What is this website

This website is an effort to gather all the information available on lesesalen from lots of different people. If you feel like you have something to contribute dont hesitate to make a pull request here: [github](https://www.github.com/lesesalen/lesesalen).

## What can I help with

### Github issues

Find a list over known issues and feature requests here: [github issues](https://www.github.com/lesesalen/lesesalen/issues)

This will have the most updated info about the issues and is a recommended starting point for everyone who wants to contribute.

### Notes

Notes can be written in markdown or javascript/react and shared on this website. To do that make a pull request with your new file and put it in the correct folder in this repo. Everything else will be fixed automagically.

- supported filetypes: `.md` `.mdx`.

The only thing you need to add to your notes is the meta information in the top of your file, it should look something like this:

```markdown
---
title: Title of your notes
description: If no description is provided it will generate an automatic excerpt of your notes
date: 2020-08-19
tags: notes, hello world, im helping!
important: true
---
```

That includes all the supported metadata.

- `title`: (mandatory) Is the title of your notes.
- `description`: (optional) Described in code above.
- `date`: (mandatory) Should be somewhat correct as it decides what posts are on top (This can be used to sticky a post for x days into the future by dating it forward).
- `tags`: (semi mandatory) Has no use at the moment, but will be rendered as a category system on the homepage, it looks bad without tags, so tag your stuff. (Can later be used to implement a search function on the site).
- `important`: (optional) If true the card will be rendered with another color to highlight it. If what you write is not important you dont need this line at all.

#### Formatting

Table of contents is not neccessary because this will be rendered automatically with a react component. So if you have generated one in your markdown file, please remove it before making a pullrequest.

Due to the nature of the table of contents rendering you can not have level 1 headings. The level 1 heading should only occur once and that should be in the markdown metadata as `title`. Therefore you will need to make all headings in your document at least a level 2 heading:

- `## Like this`.

Other bugs might occur, if you encounter one, please investigate and fix, or make it an issue on github [here](https://www.github.com/lessalen/lesesalen/issues).

## How do I help

As of now the best way to help out is to go to the repository of this page and fork it (google it, some smart people might want to write a guide on this website at some point), then make your changes and make a pull request to the master branch of this project. The pull request should build automagically and you should be able to view a preview on netlify of the build. If the build fails you might have done an oopsie and will need to fix your errors before the pull request is approved.

## Why have you done this

I don't know, that question is beyond me, but it's fun. It's also a way to distribute information quickly without having to go through a lot of meetings to see if its ok or not.

## What can I post

Everything, nothing is too stupid and everything is ok. But any shitty behaviour like racism/bullying/etc will be removed and potentially have further consequences. So just behave like a normal human being and you should be fine.
