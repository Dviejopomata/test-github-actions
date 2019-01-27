const promBundle = require("express-prom-bundle")
const app = require("express")()
const metricsMiddleware = promBundle({ includeMethod: true })
app.get("/health", (req, res) => {
  res.sendStatus(200)
})
app.use(metricsMiddleware)
app.get("/ping", (req, res) => {
  res.send({ message: "OK" })
})
const server = app.listen(process.env.PORT || 3000, () => {
  const { port, address } = server.address()
  console.log(`Listening on ${address}${port}`)
})
