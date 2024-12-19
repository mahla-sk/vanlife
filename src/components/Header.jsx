import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
      <Link to="/">vanlife</Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">about</Link>
        <Link to="/vans">vans</Link>
      </nav>
     </header>
    )
}