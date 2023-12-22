import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

function Joka() {

    // connectfrontendToBackend
    const [joke, setJokes] = useState([]);

    useEffect(() => {
        axios.get('/api/jokes')
            .then((response) => {
                setJokes(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    })
    return (
        <>
            {
                joke.map((jokess, index) => (
                    <div key={jokess.id}>
                        <h3>{jokess.title}</h3>
                        <p>{jokess.content}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Joka