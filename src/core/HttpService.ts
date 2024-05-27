import express from 'express'

export async function CreateHTTPServer() {
    const app = express()

    app.use(express.json())

    app.use("/growtopia/server_data.php", (req, res) => {
        res.send('server|127.0.0.1\nport|17091\ntype|1\n#maint|maintenance\nmeta|hello\nRTENDMARKERBS1001')
    })

    app.use((req, res, next) => {
        res.redirect(`https://ubistatic-a.akamaihd.net/0098/65364391/${req.originalUrl.replace("/growtopia/", "")}`)
    })

    app.listen(8080, () => console.log('Server listened on port 8080'))
}
