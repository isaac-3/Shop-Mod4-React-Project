import React, { useState } from 'react'
  
export default function SignUp(props){
    const [ user, changeUser ] = useState({
        username: '',
        password: '',
        address: '',
        email: ''
    })

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                address: user.address,
                email: user.email
            })
        })
        .then(res => res.json())
        .then(p => (
            console.log(p, props)
        ))
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input type="text" value={user.username} onChange={ e => changeUser({ ...user, username: e.target.value })} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
            </div>
            <div>
                <label>address</label>
                <input type="text" value={user.address} onChange={ e => changeUser({ ...user, address: e.target.value })} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={user.email} onChange={ e => changeUser({ ...user, email: e.target.value })} />
            </div>
            <input type="submit" />
        </form>
    </div>
    )
}
