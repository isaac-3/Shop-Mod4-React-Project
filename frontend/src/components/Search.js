import React from 'react'
// import Select from 'react-select'

export const Search = (props) => {


    return (
        <form value="search" onClick={props.getItems} className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={(e) => props.searchItem(e)}
            />

        </form>
    )
}




{/* <button
    className="btn btn-outline-success my-4 my-sm-0"
    type="submit"
>
    Search
</button> */}
