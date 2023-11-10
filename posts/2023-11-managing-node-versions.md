---
title: "quick tip - never mind the nvm"
summary: "a quick tip for auto-switching node versions with nvm"
category: "code"
date: "2023-11-10T12:00:00.000Z"
---

Some of us are unfortunately uncapable of working on just one project at a time. I'm one of those people. I'm also one of those people who uses [nvm](https://github.com/nvm-sh/nvm) to manage all those different node versions across projects.

If you also suffer from the same condition, here's a quick tip to make your life a little easier:

1. Make sure you have a `.nvmrc` file in all of your projects' roots.
2. Add this to your `.bashrc` or `.zshrc`:

```bash
# nvm
nvm-setup() {
    PACKAGE_JSON=$(pwd)/package.json
    NVMRC=$(pwd)/.nvmrc
    if test -f "$PACKAGE_JSON" && test -f "$NVMRC"; then
        nvm use
    fi
}

nvm-cd() {
    cd "$@";
    nvm-setup;
}

nvm-setup;

alias cd='nvm-cd';
```

Now, whenever you `cd` into a project with a `.nvmrc` file, it'll automatically switch to the right node version for you.

Enjoy your newfound nvm... _nirvana_! (🥁 ba dum tss)
