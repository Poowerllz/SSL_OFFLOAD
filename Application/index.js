require('dotenv/config');

const express = require('express')
const https = require('https');
const fs = require('fs')
const fetch = require("node-fetch");
const { response } = require('express');

const { LAST_API_URL, PORT } = process.env;
const USERNAME = process.env.CREDUSERNAME
const PASSWORD = process.env.CREDPASSWORD

const options = {
    key: fs.readFileSync(process.env.CERT_PEM),
    cert: fs.readFileSync(process.env.KEY_PEM)
}

app = express();
app.use(express.json())

// BASIC AUTH
app.use((req, res, next) => {
    const auth = { login: USERNAME, password: PASSWORD }

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
        // Access granted...
        return next()
    }

    res.status(401).json({
        Error: `Credenciais inválidas`,
    })

    // -----------------------------------------------------------------------
})

// CAPTURE AND CALL
app.all('/:urlApi', async (req, res, next) => {
    const { _username, _password } = req.headers
    const { method } = req
    let body;

    if (method !== "GET" && method !== "HEAD") {
        body = req.body
        body = JSON.stringify(body)
    }


    // CAPTURE ALL PARAMETERS AND INSERT IN THE SECOND API URL
    let { urlApi } = req.params
    urlApi.replace("%2F", '/')
    let parameters;

    parameters = `?${JSON.stringify(req.query)}`
        .replace(/{/g, '')
        .replace(/}/g, '')
        .replace(/"/g, '')
        .replace(/=/g, `%3D`)
        .replace(/:/g, `=`)

    urlApi += parameters
    console.log(`Request in: ${urlApi}`)

    // TAKES THE WHOLE HEADING AND INSERTS IN THE SECOND API
    let headers = {
        'Authorization': 'Basic ' + Buffer.from(_username + ":" + _password).toString('base64'),
    };

    let reqHeader = req.headers
    delete reqHeader.authorization
    headers = Object.assign({}, headers, reqHeader);

     let response = await fetch(LAST_API_URL + urlApi, {
        method,
        headers,
        body
    })

    try {
        response = await response.json()

        res.json({
            Status: `Requisição lançada a segunda API com sucesso.`,
            method,
            urlApi,
            response
        }).status(200)

    } catch (err) {
        res.status(401).json({
            Status: `Requisição lançada a segunda API com sucesso.`,
            Error: `Falha de validacao na segunda API, verifique as segundas credenciais.`
        })
    }
})

var server = https.createServer(options, app);

// PORT TO LISTENER
server.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})
