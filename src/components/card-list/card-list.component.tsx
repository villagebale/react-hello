import { Mons } from "../../App";
import Card from "../card/card.component";
import './card-list.styles.css'
// export default class CardList extends Component {

//     render(){
//         const {filterMons} = this.props;
        
//         return (
//             <div className="card-list">
//                 {filterMons.map(mons => {
                    
//                     return (
//                         <Card mons={mons}/>
//                     )
//                 })}
//             </div>
//         )
//     }
// }
type CardListProps = {
    filterMons: Mons[];
}
const CardList = ({ filterMons }: CardListProps) => {
    

    return (
        <div className="card-list">
            {filterMons.map(mons => {

                return (
                    <Card mons={mons} />
                )
            })}
        </div>
    )
}

export default CardList;