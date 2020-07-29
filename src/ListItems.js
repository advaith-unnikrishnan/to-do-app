import React from 'react'
import './ListItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItems(props){
    const items=props.items
    const listItems=items.map(item =>{
        return <div className="list" key="item.key">
            <p>{item.text}
                <span>
                    <FontAwesomeIcon className="icons" icon="trash"></FontAwesomeIcon>
                </span>
            </p>
            
        </div>
    })
    return(
    <div>{listItems}</div>
    )
    
}

export default ListItems