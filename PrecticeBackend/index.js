import express from 'express';

const app = express();

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "First joke",
            content: "this is joke"
        },
        {
            id: 2,
            title: "Second joke",
            content: "this is second joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})