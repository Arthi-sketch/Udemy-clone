const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const next = require("next");

const server = express();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  if (dev) {
    server.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:8000",
        changeOrigin: true,
      })
    );
  }
  server.all("*", (req, res)=>{
    handle(req, res);
  })
})
.catch(err =>{
    console.log("error on custom server: ", err);
})

server.listen(3000, () => {
  console.log("custom server up");
});
