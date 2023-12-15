import React from "react";
const SingleUser = ({user}) => {
    return (
        <div className={"single-user"}>
            <img src={user.picture.large} alt="user-image"/>
            <div className={"user-info"}>
                <h2 className={"user-name"}>
                    {user.name.last}
                </h2>
                <p className={"user-email"}>{user.email}</p>
                <p className={"user-location"}>{user.location.city}</p>
            </div>
        </div>
    )
}
export default SingleUser