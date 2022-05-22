import { Mons } from '../../App';
import './card.styles.css'

type CardProps = {
    mons: Mons;
}

const Card = ({mons}: CardProps) => {
    const { name, id, email } = mons;
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`star ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;