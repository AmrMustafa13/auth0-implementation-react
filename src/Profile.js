import React from 'react'

function Profile({ user }) {

    const { nickname, name, picture, email, sub: userId } = user;

    return (
        <>
            <div>profile</div>
            <div>
                {nickname}
                {name}
                {email}
                <img src={picture} alt='avatar' />
                {userId.slice(userId.indexOf('|') + 1)}
            </div>
        </>
    )
}

export default Profile