import { useState } from 'react'
import { Icon } from './Icon'

export function DirectorCard({ director }) {
    const { name, avatar, quote, socials } = director

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`director ${isOpen ? 'open' : ''}`}>
            <h3>{name}</h3>

            <img className="avatar" src={avatar} />

            <blockquote>{quote}</blockquote>

            <ul className="socials">
                {socials.map((s) => (
                    <li key={s.id}>
                        <a key={s.id} href={s.link}>
                            <Icon type={s.id} />
                        </a>
                    </li>
                ))}
            </ul>

            <button className="btn-circle" onClick={() => setIsOpen(!isOpen)}>
                <img
                    src="images/icon-cross.svg"
                    alt={isOpen ? 'open' : 'close'}
                />
            </button>
        </div>
    )
}
