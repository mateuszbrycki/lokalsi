import React, {SyntheticEvent, useState} from 'react'

export interface RegisterViewProps {
}

export interface RegisterViewActionProps {
    readonly onRegister: (email: string, password: string, repeatPassword: string) => void
}

const RegisterView: React.FC<RegisterViewProps & RegisterViewActionProps> = (props) => {
    const {onRegister} = props

    const initialEmailValue = ""
    const initialPasswordValue = ""
    const initialRepeatPasswordValue = ""

    const [email, setEmail] = useState(initialEmailValue)
    const [password, setPassword] = useState(initialPasswordValue)
    const [repeatPassword, setRepeatPassword] = useState(initialRepeatPasswordValue)

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        onRegister(email, password, repeatPassword)
        setEmail(initialEmailValue)
        setPassword(initialPasswordValue)
        setRepeatPassword(initialRepeatPasswordValue)
    }

    return <>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email" required value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required
                       value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPassword" placeholder="Repeat Password"
                       required
                       value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Register
            </button>
        </form>
    </>
}

export default RegisterView