import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "FavList",
            path: "/favList",
        },
        {
            title: "WatchList",
            path: "/watchList",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "About",
            path: "/about",
        }
    ];
    return (
        <>
            <header className="container mx-auto flex justify-between items-center p-7">
                <div className="text-black font-bold text-2xl">
                    <span>IMDB App</span>
                </div>
                <nav>
                    <ul className="flex space-x-8 font-medium">
                        {
                            links && links.map(link => {
                                return (
                                    <li key={link.path}>
                                        <NavLink
                                            className={({ isActive }) => 
                                                isActive
                                                ? "text-sky border-b-2"
                                                : "hover:text-sky"
                                            }
                                            to={link.path}>
                                            {link.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar