# Custom Express Server example

Most of the time the default Next.js server will be enough but there are times you'll want to run your own server to integrate into an existing application. Next.js provides [a custom server api](https://nextjs.org/docs/advanced-features/custom-server).

Because the Next.js server is a Node.js module you can combine it with any other part of the Node.js ecosystem. In this case we are using express.

Here we are using next-routes-extended for UI routes.

Here we are using express for server routes.

## Lib

1. Next JS
2. next-routes-extended
3. Express
4. Material
5. SCSS

## How to run

```
npm run dev
```

## Test url's

Custom Route for UI page - http://localhost:3000/login

Custom Route for server api - http://localhost:3000/health/ping
