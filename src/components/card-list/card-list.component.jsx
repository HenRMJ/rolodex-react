import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({people}) => (
    <div className='card-list'>
        { people.map(person => {
            return (
            <Card person={person}/>
        )})}
    </div>
    )

export default CardList;