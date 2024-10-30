import http from 'http'

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

    //home
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" })
        res.write("<h1>Home</h1>")
        res.end()
        return
    }

    //about
    if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/html" })
        res.write("<h1>About</h1>")
        res.end()
        return
    }

    //my account
    if (req.url === "/my-account") {
        res.writeHead(403, { "Content-type": "text/plain" })
        res.write("You have no access to this page")
        res.end()
        return
    }

    //any other url
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("Page not found")
    res.end()


    //Set PORT
    const PORT: number = 5000
    server.listen(PORT, () => {
        console.log(`Server is running on prot ${PORT}`)
    })
})