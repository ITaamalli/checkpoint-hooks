import React from 'react'

const MovieCard = (props) => {
    console.log(props)
  return (
    <div>
         <div>
                <p>title : {props.el.title}</p>
                <p>description : {props.el.description}</p>
                <p>posterUrl : {props.el.posterUrl}</p>
                <p>rating : {props.el.rating}</p>
            </div>

    </div>
  )
}

export default MovieCard