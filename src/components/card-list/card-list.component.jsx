// import { Component } from "react";
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
const CardList = (props) => {
    const { filterMons } = props;

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