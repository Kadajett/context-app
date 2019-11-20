import React from 'react'
import {Link} from "react-router-dom";

export default function SidebarButton({copy, path, alt}) {
    return (
        <li alt={alt || copy}><Link to={path}>{copy}</Link></li>
    )
}
