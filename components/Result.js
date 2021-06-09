import React from 'react'
import Thumbnail from './Thumbnail'

export default function Result({results}) {
    return (
        <div>
            {results.map(result=>(
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}
