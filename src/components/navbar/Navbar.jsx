import { useState } from "react";
import React from "react";
import './navbar.css'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");

const navlinks=[{'name':'', 'icon':'home'}, {'name':'about', 'icon':'user'}, {'name':'experience', 'icon':'briefcase'}, {'name':'portfolio', 'icon':'picture-o'}, {'name':'contact','icon':'paper-plane'}]


    return (
        <nav>
          {navlinks.map((section)=> (
            <a href={'#'+section.name} onClick={()=>setActiveNav('#'+ section.name)} className={activeNav==='#'+section.name? 'active' : ''}>
                <i key={'#'+section.name} className={`active fa fa-${section.icon}`} aria-hidden='true'></i></a>)
          )}
           

        </nav>
    );
};

export default Navbar;
