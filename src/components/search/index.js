import React from 'react'
import './styles.css'
export default function Search() {
    return (
        <form className="form-inline ">
            <input className="form-control  search" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
    )
}