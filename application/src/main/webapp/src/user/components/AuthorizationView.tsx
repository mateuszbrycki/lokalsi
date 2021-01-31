import LoginView from "./LoginView";
import RegisterView from "./RegisterView";

export interface AuthorizationViewProps {
}

export interface AuthorizationViewActionProps {
    readonly onLogin: (email: string, password: string) => void
    readonly onRegister: (email: string, password: string, repeatPassword: string) => void

}

const AuthorizationView: React.FC<AuthorizationViewProps & AuthorizationViewActionProps> = (props) => {
    const {onLogin, onRegister} = props
    return <>
        <h1>Welcome!</h1>
        <div className="container">
            <div className="row">
                <div className="col-sm"><LoginView onLogin={onLogin}/></div>
                <div className="col-sm"><RegisterView onRegister={onRegister}/></div>
            </div>

        </div>
    </>
}

export default AuthorizationView