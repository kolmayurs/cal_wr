import React from 'react';
import './style.css';
class App extends React.Component {
  constructor(props){
      super(props);
      this.state={display: 0, value: 0, Operator: ''}
      this.Show = this.Show.bind(this);
      this.Operations = this.Operations.bind(this);
      this.reset = this.reset.bind(this);
      this.Bksp = this.Bksp.bind(this);
      this.handleKeyPress =this.handleKeyPress.bind(this);
    }
    componentDidMount(){
      document.addEventListener("keypress", this.handleKeyPress, true);
    }
    Show(evalue){
      let num = Number(this.state.display);
      if(num !== 0){
        this.setState({display: this.state.display + evalue})
      }
      else{
        this.setState({display: evalue})
      }
    }
    reset(){
      this.setState({display: 0, value: 0, Operator: ''})
    }
    Bksp(){
      if(this.state.display === ''|| this.state.display.length === 1 || this.state.display === 0){
        this.setState({display : 0})
      }
      else{
        let value = this.state.display.toString().slice(0, -1);
      this.setState({display : value})
      }
      
    }
    Operations(evalue){
      if(evalue === '='){
          if(this.state.Operator === '+'){
            let value= Number(this.state.value) + Number(this.state.display);
            this.setState({nextNumber: Number(this.state.display),display: value,Operator:''})
          }
          if(this.state.Operator === '-'){
            let value= Number(this.state.value) - Number(this.state.display);
            this.setState({nextNumber: Number(this.state.display),display: value,Operator:''})
          }
          if(this.state.Operator === '/'){
            let value= Number(this.state.value) / Number(this.state.display);
            this.setState({nextNumber: Number(this.state.display),display: value,Operator:''})
          }
          if(this.state.Operator === '*'){
            let value= Number(this.state.value) * Number(this.state.display);
            this.setState({nextNumber: Number(this.state.display),display: value,Operator:''})
          }
        }
          else{
          this.setState({value: Number(this.state.display), Operator : evalue, display: 0})
        }
    }
    handleKeyPress(event){
      let keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode === 49) {
            this.Show('1');
       } else if (keycode === 50) {
            this.Show('2');
        } else if (keycode === 51) {
           this.Show('3');
        } else if (keycode === 52) {
            this.Show('4');
        } else if (keycode === 53) {
            this.Show('5');
        } else if (keycode === 54) {
            this.Show('6');
        } else if (keycode === 55) {
            this.Show('7');
        } else if (keycode === 56) {
            this.Show('8');
        } else if (keycode === 57) {
            this.Show('9');
        } else if (keycode === 48) {
            this.Show('0');
        } else if (keycode === 97) {
            this.reset();
        } else if (keycode === 99) {
            this.Bksp();
        } else if (keycode === 61 || keycode === 13) {
            this.Operations('=');
        } else if (keycode === 43) {
            this.Operations('+');
        } else if (keycode === 45) {
            this.Operations('-');
        } else if (keycode === 42 || keycode === 120) {
            this.Operations('*');
        } else if (keycode === 47) {
            this.Operations('/');
        }
    }
  render() {
    return (
      <div className="App">
        <h1>{this.state.display}</h1>
        <button className="large" onClick={this.Bksp}>Bksp</button>
        <button className="large" onClick={this.reset}>Reset</button>
        <button onClick={this.Show.bind(this, "1")} value="1">1</button>
        <button onClick={this.Show.bind(this, "2")}  value="2">2</button>
        <button onClick={this.Show.bind(this, "3")}  value="3">3</button>
        <button onClick={this.Operations.bind(this, "+")}  value="+">+</button>
        <button onClick={this.Show.bind(this, "4")}  value="4">4</button>
        <button onClick={this.Show.bind(this, "5")}  value="5">5</button>
        <button onClick={this.Show.bind(this, "6")}  value="6">6</button>
        <button onClick={this.Operations.bind(this, "-")}  value="-">-</button>
        <button onClick={this.Show.bind(this, "7")}  value="7">7</button>
        <button onClick={this.Show.bind(this, "8")}  value="8">8</button>
        <button onClick={this.Show.bind(this, "9")}  value="9">9</button>
        <button onClick={this.Operations.bind(this, "*")}  value="*">*</button>
        <button onClick={this.Show.bind(this, "0")}  value="0">0</button>
        <button className="large" onClick={this.Operations.bind(this, "=")}  value="=">=</button>
        <button onClick={this.Operations.bind(this, "/")}  value="/">/</button>
      </div>
    );
  }
}

export default App;
