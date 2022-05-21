// import { Component } from 'react';
// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [mons,setMons] = useState([]);
  const [filterMons, setFilterMons] = useState(mons);

  const onSearchChange = (event) => {
    // console.log(event);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    // this.setState({ searchField })
    setSearchField(searchFieldString)
  }

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMons(users);
      })
  },[]);

  
  useEffect(() => {
    const newFilterMons = mons.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMons(newFilterMons);
  },[searchField, mons])
  
    

  return (
    <div className="App">
        <h1 className='app-title'>Cats Search</h1>
        <SearchBox 
        onSearchHandler={onSearchChange} 
        placeHolder={'search for ...'} 
        className={'star-search'}/>
        <CardList filterMons={filterMons}/>
    </div>
  )
}



// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       mons : [],
//       searchField:''
//     }
//   }

//   static saveMons = [];

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//       .then((users) => {
//         this.setState({mons:users},
//           // console.log(this.state))
//         )
//         this.saveMons = [...this.state.mons]
//       })
//   }

//   search = (event)=>{
//       // console.log(event);
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState({searchField})
//   }

//   render(){
//     const {mons,searchField} = this.state;
//     const {search} = this;
//     const filterMons = mons.filter((mon) => {
//       return mon.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Cats Search</h1>
//         {/* <header className="App-header"> */}
//           {/* <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a> */}
          
          
//           <SearchBox onSearchHandler={search} placeHolder={'search for ...'} className={'star-search'}/>
//           {
            
//             // filterMons.map(mon => {
//             //   return (
//             //     <div id={mon.id}>
//             //     <h3>{mon.name}</h3>
//             //     </div>
//             //   )
//             // })
//             <CardList filterMons={filterMons}/>
//           }
//         {/* </header> */}
//       </div>
//     );
//   }
// }

export default App;
