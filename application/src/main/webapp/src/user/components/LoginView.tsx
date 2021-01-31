import React, {SyntheticEvent, useState} from 'react'

export interface LoginViewProps {
}

export interface LoginViewActionProps {
    readonly onLogin: (email: string, password: string) => void
}

const LoginView: React.FC<LoginViewProps & LoginViewActionProps> = (props) => {
    const {onLogin} = props
    const initialEmailValue = ""
    const initialPasswordValue = ""

    const [email, setEmail] = useState(initialEmailValue)
    const [password, setPassword] = useState(initialPasswordValue)

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        onLogin(email, password)
        setEmail(initialEmailValue)
        setPassword(initialPasswordValue)
    }

    return <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>

    </>
}

export default LoginView