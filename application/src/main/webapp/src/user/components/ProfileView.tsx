
export interface ProfileViewProps {
    readonly text: string
}

export interface ProfileViewActionProps {
    readonly onClick: () => void
}

const ProfileView: React.FC<ProfileViewProps & ProfileViewActionProps> = (props) => {
    const {text} = props
    return <>
        Hello {text}
        <br />
        Welcome in profile module

        </>
}

export default ProfileView