 import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

export default function Thumbnail({ result }) {
    console.log(result)
    return (
        <div className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
            <Image
                layout='responsive'
                src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}` || `https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                height="200px"
                width="300px"
            />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h1>{result.title || result.original_name}</h1>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.release_date} {" "}
                    <ThumbUpIcon width='20px' /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}
