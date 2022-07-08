
const UserCard = (props) => {

    const userCardStyle = {
        backgroundColor: props.color,
        display: 'flex',
    };

    return (
        <div style={userCardStyle}>
            <img src={props.image} />
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <p>{props.username}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default UserCard;