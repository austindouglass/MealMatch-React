import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.src} alt={props.alt} />
            <div className="card-body">            
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
            {props.button && 
            <div className="card-footer">
                <a className="btn btn-primary" href={props.link} target="_blank">View Details</a>
            </div>}
        </div>
    )
}

export default Card;