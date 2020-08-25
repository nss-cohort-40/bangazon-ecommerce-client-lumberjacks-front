import { useState } from "react"

const useSimpleAuth = () => {

    const [loggedIn, setIsLoggedIn] = useState(false)

    const isAuthenticated = () =>
        loggedIn || localStorage.getItem("bangazon_token") !== null

    const register = userInfo => {
        return fetch("http://127.0.0.1:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem("bangazon_token", res.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const login = credentials => {
        return fetch("http://127.0.0.1:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("bangazon_token", res.token)
                    setIsLoggedIn(true)
                    console.log('Login successful')
                } else {
                    console.log('Could not login.  User not found.')
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("bangazon_token")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth
