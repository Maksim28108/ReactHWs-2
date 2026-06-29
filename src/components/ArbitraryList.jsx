import { Component } from "react";

export default class ArbitraryList extends Component{
  render(){
    const items = ['Item1', 'Item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']
    return(
      <>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}
