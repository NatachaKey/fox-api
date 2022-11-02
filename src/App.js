import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {

state={
  image: null
}

  componentDidMount() {
    this.handleCallApi();
  }

  handleCallApi = () => {
    axios.get(`https://randomfox.ca/floof/`)
    .then(res => {
      const image = res.data.image;
      console.log(image)
      this.setState({image});
     
    });
  }

  render() {
    return (
      <div>
         <img src={this.state.image} alt="foxy"/>  
         <div>
          <button onClick={this.handleCallApi}>Call Api</button>
         </div>
        
      </div>
    );
  }
}


export default App;
