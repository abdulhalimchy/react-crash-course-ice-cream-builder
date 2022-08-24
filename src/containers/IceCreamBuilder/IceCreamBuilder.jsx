import React, { Component } from 'react'
import classes from './IceCreamBuilder.module.css'
import Builder from '../../components/Builder/Builder'
import IceCream from '../../components/IceCream/IceCream'

export default class IceCreamBuilder extends Component {
    state = {
      items: {},
      scoops: [],
      totalPrice: 0
    };

    componentDidMount() {
      fetch('https://ice-cream-builder-5de8a-default-rtdb.firebaseio.com/items.json')
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            items: responseData
          })
        })
      console.log("Mounted IceCreamBuilder")
    }

    componentDidUpdate() {
      console.log("Update IceCreamBuilder")
    }

    addScoop = (scoop) => {
      const {scoops, items} = this.state;
      const workingScoops = [...scoops];
      workingScoops.push(scoop)
      
      this.setState((prevState) => {
        return {
          scoops: workingScoops,
          totalPrice: prevState.totalPrice + items[scoop]
        };
      });
    }

    removeScoop = (scoop) => {
      const {scoops, items} = this.state;
      const workingScoops = [...scoops];
      const scoopIndex = workingScoops.findIndex(sc => sc===scoop)
      workingScoops.splice(scoopIndex, 1);

      this.setState((prevState) => {
        return {
          scoops: workingScoops,
          totalPrice: prevState.totalPrice - items[scoop]
        };
      });
    }

    render() {
      const { items, totalPrice, scoops } = this.state;
      return (
        <div className={['container', classes.container].join(' ')}>
          <IceCream scoops={scoops} />
          <Builder items={items} price={totalPrice} scoops={scoops} add={this.addScoop} remove={this.removeScoop}/>
        </div>
      );
  }
};
