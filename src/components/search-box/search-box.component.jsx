// import { Component } from "react";
import './search-box.styles.css'
// export default class SearchBox extends Component {

//     search = this.props.search

//     render(){
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type='search'
//                 placeholder={this.props.placeHolder}
//                 onChange={this.props.onSearchHandler}>
//             </input>
//         )
//     }
// }

const SearchBox = (props) => {
    // onSearchChange = props.onSearchChange;
    return (
        <input
            className={`search-box ${props.className}`}
            type='search'
            placeholder={props.placeHolder}
            onChange={props.onSearchHandler}>
        </input>
    )
}
export default SearchBox; 