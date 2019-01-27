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
const port = process.env.PORT || 3000

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})
