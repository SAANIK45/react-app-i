import React from 'react'

const Links = (props) => (
    <div className='Links'>
        <h3>SOCIAL LINK</h3>
        <ul>
            <li><a href="#">{props.linkA}</a></li>
            <li><a href="#">{props.linkB}</a></li>
            <li><a href="#">{props.linkC}</a></li>
        </ul>
    </div>
);
export default Links;