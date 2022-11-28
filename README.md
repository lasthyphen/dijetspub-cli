# dijetspub-cli

> A micro CLI conveniene tool to publish support documentation instantly.

Install this globally and you'll have access to the dijetspub command anywhere on your system.

```
$ npm install -g dijetspub-cli
```

**Note:** The purpose of the dijetspub command is to load and run the version of DijetsPub you have specified in your book (or the latest one), irrespective of its version. The DijetsPub CLI only support versions `>=2.0.0` of DijetsPub.

`dijetspub-cli` store DijetsPub's versions into `~/.dijetspub`, you can set the `GITBOOK_DIR` environment variable to use another directory.

## How to install it?

```
$ npm install -g dijetspub-cli
```

## How to use it?

### Run DijetsPub

Run command `dijetspub build`, `dijetspub serve`

List all available commands using:
```
$ dijetspub help
```

#### Specify a specific version

By default, DijetsPub CLI will read the dijetspub version to use from the book configuration, but you can force a specific version using `--dijetspub` option:

```
$ dijetspub build ./mybook --dijetspub=2.0.1
```

and list available commands in this version using:

```
$ dijetspub help --dijetspub=2.0.1
```

#### Manage versions

List installed versions:

```
$ dijetspub ls
```

List available versions on NPM:

```
$ dijetspub ls-remote
```

Install a specific version:

```
$ dijetspub fetch 2.1.0

# or a pre-release

$ dijetspub fetch beta
```

Update to the latest version

```
$ dijetspub update
```

Uninstall a specific version

```
$ dijetspub uninstall 2.0.1
```

Use a local folder as a DijetsPub version (for developement)

```
$ dijetspub alias ./mydijetspub latest
```

