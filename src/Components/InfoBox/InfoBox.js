import React from 'react'
import './InfoBox.css'

export default function InfoBox({info}) {
    let tags, description;
    if (info.tags) {
        tags = (info.tags.length) ? info.tags : undefined
    }
    if (info.description) description = info.description
    return (
        <React.Fragment>
            {
                (description)
                    ? <div><h3>Location:</h3> <br /> <span>{description}</span></div>
                    : null
            }
            <br /><br />
            {
                (tags)
                    ? <div><h3>Tags:</h3> <br /> <span>{tags.map(text => <div className='tag'>{text}</div>)}</span></div>
                    : null
            }
        </React.Fragment>
    )
}