const express = require('express')
const basicAuth = require('express-basic-auth')
const path = require('path')

const app = express();
const login = process.env.BASIC_AUTH_LOGIN;
const password = process.env.BASIC_AUTH_PASSWORD;
const port = process.env.PORT || 8080;

if(login && password) {
    app.use(basicAuth({
        users: { [login]: password },
        challenge: true,
    }));
}

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
