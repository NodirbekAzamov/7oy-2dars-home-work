import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
export default function Menu() {
    const [list, setList] = useState([
        { id: 1, title: "Products", path: "/" },
        { id: 2, title: "Users", path: "/users" },
        { id: 3, title: "Todos", path: "/todo" },
        { id: 4, title: "Photos", path: "/photos" },
        { id: 5, title: "Albims", path: "/albums" },
        { id: 6, title: "Posts", path: "/posts" },
        { id: 7, title: "User Form", path: "/user_form" },
        { id: 8, title: "Comments", path: "/comments" },
    ])
    const [active, setActive] = useState(1)

    const active_btn = (id) => {
        setActive(id)
        localStorage.setItem("active", id);
    }

    useEffect(() => {
        let value = +localStorage.getItem("active")
        if (value) {
            setActive(value)
        } else {
            setActive(1)
        }
    }, [])

    return (
        <div>
            <div className='menu_box d-flex flex-column m-5'>
                <ul>
                    {
                        list?.map((item, index) => {
                            return <li key={index}>
                                <Link to={item.path} onClick={() => active_btn(item.id)} className={active === item.id ? "link_btn" : ""}>{item.title}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}
