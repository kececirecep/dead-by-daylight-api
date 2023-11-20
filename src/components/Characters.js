import React from 'react'
import { Link } from 'react-router-dom'

const Characters = (props) => {
    return (
        <div className="w-1/5 mx-4 my-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.img} />
            <div className="px-6 py-4">
                <Link to={`/character/${props.no}`}>
                    <div className="font-bold text-xl mb-2">{props.name} </div>
                </Link>
                <p className="text-gray-700 text-base">
                    {props.bio}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.role} </span>
            </div>
        </div>
    )
}

export default Characters