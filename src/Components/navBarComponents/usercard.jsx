const User = (props) => {
    const {user_name, user_category} = props.data
    return (
        <div className="card">
            <div className="row">
                <p>
                    {user_name}
                </p>
                <div className="col-3">
                    {user_category}
                </div>
            </div>

        </div>
    )
}

export default User