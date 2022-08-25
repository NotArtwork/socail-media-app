import { useRef } from 'react'
import store from './store'

const Login = () => {
    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(form.current)
        let req = await fetch('http://localhost:3100/login', {
            method: 'POST',
            body: data
        })
        let res = await req.json()
        if (req.ok) {
            console.log('User', res)
            store.dispatch({ type: 'user/login', user: res })
        } else {
            alert('Invalid email/password')
        }
    }
    return (
        <>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit} ref={form}>
        <input name='email' type='email' placeholder='email' /><br />
        <input name='password' type='password' placeholder='Password' /><br />
        <input type='submit' />
      </form>
      </>
    )


}

export default Login