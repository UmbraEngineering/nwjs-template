
# nwjs-template

A template application structure for building new projects using node-webkit and cloak.

## Getting Started

First, get the code

```bash
$ git clone git@github.com:UmbraEngineering/nwjs-template your-project
$ cd your-project

# Clear out the template's history ...
$ rm -rf .git

# ... so you can start your own
$ git init
```

And install the dependencies...

```bash
$ npm install
```

You can then build for the architectures you need using gulp (if you don't give one, it will determine your current architecture and build for that).

```bash
$ gulp build [--win] [--osx] [--linux32] [--linux64] [--all]
```

Your newly built project will be in `build/nwjs-template` (or `build/your-project` etc.). You can use `npm run app` to start it up.

```bash
$ npm run app
```
