// import { Component } from "react";
import { ChangeEvent } from 'react';
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

interface ISearchBoxProps {
    className: string;
    placeHolder?: string;
}

interface ISearchBoxProps {
    onSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

type SearchBoxProps = {
    className: string;
    placeHolder?: string;
    onSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = (props : SearchBoxProps) => {
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