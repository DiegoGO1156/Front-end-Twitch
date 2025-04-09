const imageURL = ""

const ChannelAvatar = ({}) =>{
    return (
        <div className="channels-avatar-container">
            <img src={url || imageURL} alt="avatar Channel" width="100%" height="100%"/>
        </div>
    )
}

export const ChannelCard = ({
        title,
        id,
        username,
        isOnline,
        avatarUrl,
        navigateToChannelHandler
    }) =>{
        const handleNavigate = () =>{
            navigateToChannelHandler(id)
        }
    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url= {avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-cart-title">{username}</span>
            <span className="channels-cart-title" style={{color: isOnline? "green" : "red"}}>
                {isOnline ? "Online" : "Offline"}
            </span>
        </div>
    )
}