#!/usr/bin/env node


const {useState, useEffect} = require('react');
const {h, render, Text, Component} = require('ink');
 
/* const Counter = () => {
    const [counter, setCounter] = useState(0);
 
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(previousCounter => previousCounter + 1);
        }, 100);
 
        return () => {
            clearInterval(timer);
        };
    }, []);
 
    return <Text color="green">{counter} tests passed</Text>;
}; */

class UI extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState((preState) => ({
        count: preState.count + 1
      }))
    }, 100);
  }

  render() {
    return (
      <Text color="green">{count} tests passed</Text>
    )
  }
}
 
render(h(UI));
