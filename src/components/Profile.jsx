export default function Profile() {
    const user = {
        name: 'Harris Kamala',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
        borderRadius:'50%',
        fontFamily:'Menlo, sans-serif'
    };

    return (
        <div className="">
            <h1 style={{fontFamily:user.fontFamily}}>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius:user.borderRadius,
                   
                }}
            />
        </div>
    )
}
