import React, {Component} from 'react';

class HiddenMenu extends Component {
  constructor() {
    super();
    this.state ={
      coverStyle: {
        backgroundColor: '#555',
        width: '300px',
        height: '300px',
      },
      menuStyle: {
        height: '10px',
        width: '10px',
      },
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      coverStyle: {
        width: '0px',
        height: '0px',
        visibility: 'hidden',
      },
      menuStyle: {
        width: '200px',
        height: '200px',
      }
    })
  }

  render() {
    console.log(this.state);
    return(
      <div className="HiddenContainer">
        <div className="HiddenCover" style={this.state.coverStyle} onClick={this.onClick} />
        <div className="HiddenMenu" style= {this.state.menuStyle} />
      </div>
    );
  }
}

export default HiddenMenu;
