import React from "react";
import ReactDOM from "react-dom";
import Image from "./images/300.jpg";
import User from "./images/user.jpg";
import Heart from "./images/heart-solid.svg";
import Share from "./images/share-solid.svg";
import Retweet from "./images/retweet-solid.svg";
import "./sass/app.scss";
import PortfolioItem from './components/PortfolioItem';

//Our Goals
//Given the portfolio items, render them on screen
//Make a Ajax (with Axios) reauest to get the portfolio items from the server (Strapi)

const exampleEntries = [
  {
      "id": 1,
      "title": "Everything is Gold",
      "description": "Life is gold like a machine, \nbuy a watch just to flex.",
      "background": "#ffd700",
      "created_at": "2020-01-16T22:54:37.977Z",
      "updated_at": "2020-01-16T22:54:47.844Z"
  },
  {
      "id": 2,
      "title": "Red is Passion",
      "description": "Passion is fire\nFire is lit\nPoop emoji",
      "background": "#f03434",
      "created_at": "2020-01-16T22:55:12.410Z",
      "updated_at": "2020-01-16T22:55:12.414Z"
  }
]

//const data = ["Hey", "Now", "You're a pilot"]

class App extends React.Component{
  state = {
    data: []
  }

  async componentDidMount(){
    console.log("componentDidMount")
    const portfolio_response = await axios({
      method: 'GET',
      url: 'http://localhost:1337/portfolios?user=1'
    })

    const {data} = portfolio_response
    console.log("App.componentDidMount data", data)
    this.setState({data})

  }
  
  
  render(){
    return (
      <div className="App">
       {this.state.data.map(entry => {
         return(
           <PortfolioItem title={entry.title} description={entry.description} background={entry.background}/>
         )
       })}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//      {exampleEntries.map(entry => {
//        return(
//          <PortfolioItem title={entry.title} description={entry.description} background={entry.background}/>
//        )
//      })}
//     </div>
//   );
// }

export default App;



ReactDOM.render(<App />, document.getElementById("app"));
