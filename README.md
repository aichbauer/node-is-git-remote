# is-git-remote

> Check if a git remote repository exists

[![Build Status](https://travis-ci.org/aichbauer/node-is-git-remote.svg?branch=master)](https://travis-ci.org/aichbauer/node-is-git-remote)
[![Build status](https://ci.appveyor.com/api/projects/status/eatqdfs3a7uhniti?svg=true)](https://ci.appveyor.com/project/aichbauer/node-is-git-remote)
[![codecov](https://codecov.io/gh/aichbauer/node-is-git-remote/branch/master/graph/badge.svg)](https://codecov.io/gh/aichbauer/node-is-git-remote)

## Installation

```sh
$ npm i is-git-remote --save
```

or

```sh
$ yarn add is-git-remote
```

## Usage

```js
const isGitRemote = require('is-git-remote'); // import isGitRemote from 'is-git-remote'

isGitRemote('www.github.com/username/repo-that-exists'); // => true

isGitRemote('https://www.github.com/username/repo-that-exists'); // => true

isGitRemote('username/repo-that-exists', 'bitbucket.com'); // => true

// automatically checks github if no host is provided
isGitRemote('username/repo-that-not-exists'); // => false
```

## LICENSE

MIT © Lukas Aichbauer
