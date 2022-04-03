import { NavLink } from "react-router-dom"
//after NavLink then to Container.js then container to each element components
export default function Header(){
    return(
        <header>
            <h1 className="h1-header">Advice</h1>
            <ul>
                <NavLink to = "/">
                    <li>Home</li>
                </NavLink>

                <NavLink to = "/random">
                    <li>Random Advice</li>
                </NavLink>

                <NavLink to = "/search">
                    <li>Search</li>
                </NavLink>

                <NavLink to = "/about">
                    <li>AboutUs</li>
                </NavLink>
            </ul>
        </header>
       
    )
}