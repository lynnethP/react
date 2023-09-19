import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowing={true} userName="midudev">
                Lynneth Pereira
            </TwitterFollowCard>
            <TwitterFollowCard userName="pheralb">
                Usbaldo Pereira
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={true} userName="midudev">
                Lennys Ramos
            </TwitterFollowCard>
        </section>

    )
}