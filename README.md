- `package-with-net` package defines `request` command that 
makes `GET https://google.com` request and prints response headers

- `consumer` package uses that package as dependency. There's also `.node-safe.json` with `allow-net: false`

Here are commands to run in `./consumer`:

```
$ npx request
<headers>
```

Prints headers as expected

```
$ npx-safe request
<headers>
```

Prints headers, not very expected - it would be nice to block net access for the script. This would, for example, allow to run `ESLint` without
worry

```
$ node-safe ../package-with-net/request.js
Error: getaddrinfo ENOTFOUND google.com
```

Blocks access as expected
