import React, {Component} from 'react';
import '../css/CircularMenu.css';

class CircularMenu extends Component {
  constructor(props){
    super();

    const openStyles = [];
    const closedStyles= [];
    const nodeText = [];

    for(let i = 0; i < props.nodeCount; i++){
      const openStyle = {
        top: Math.round(props.radius*Math.cos(2*Math.PI*i/props.nodeCount)).toString() + 'px',
        left: Math.round(props.radius*Math.sin(2*Math.PI*i/props.nodeCount)).toString() + 'px',
      };
      const closedStyle = {
        top: '0px',
        left: '0px',
        transform: 'scale(0)',
      };

      openStyles.push(openStyle);
      closedStyles.push(closedStyle);
      nodeText.push(i.toString());
    }

    this.state = {
      openStyles,
      closedStyles,
      nodeText,
      styles: closedStyles,
      open: false,
      text: '+',
    }

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    if(this.state.open){
      this.setState({
        open:false,
        styles: this.state.closedStyles,
        text: '+',
      });
    } else {
      this.setState({
        open: true,
        styles: this.state.openStyles,
        text: '-',
      });
    }
  }

  render(){
    return(
        <div className="CircularMenu">
          <div className="MenuCenter Node" onClick={this.toggleOpen}>
            <h1 className="MenuCenterText">{this.state.text}</h1>
          </div>
          {
            this.state.styles.map((style, i) =>(
              <div key={i} className="MenuItem Node" style={style} >
                <h1 className="MenuCenterText">{this.state.nodeText[i]}</h1>
              </div>
            ))
          }
        </div>
    );
  }
}

export default CircularMenu;
