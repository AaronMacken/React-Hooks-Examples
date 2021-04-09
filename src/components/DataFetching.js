import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {
    const [ id, setId ] = useState(1);
    const [ post, setPost ] = useState({});

    // to have the data only be fetched once
    // provide an empty array so it only fetches on mount
    // or provide a dependency
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(({data}) => {
                setPost(data);
            })
            .catch(err => console.log(err));
    }, [id])

    const handleInputChange = e => {
        setId(e.target.value);
    }

    return (
        <div>
            <input type="text" value={id} onChange={handleInputChange} />
            <hr />
            <ul>
                {/* {
                    posts.map(({id, title}) => {
                        return <li key={id}>{title}</li>
                    })
                } */}
                {
                    <div>{post.title}</div>
                }
            </ul>
        </div>
    )
}

export default DataFetching
