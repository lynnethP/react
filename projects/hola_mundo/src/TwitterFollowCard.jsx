import { useState } from "react"
export function TwitterFollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollwing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    
    const handleClick = () =>{
        setIsFollwing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                {/* <img className='tw-followCard-avatar' src="https://static.platzi.com/static/website/v2/images/avatar_default.png" alt="" /> */}
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-name'>{children}</strong>
                    <span className='tw-followCard-user'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>

    )
}