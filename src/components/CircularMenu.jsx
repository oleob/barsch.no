import React, {Component} from 'react';
import '../css/CircularMenu.css';

class CircularMenu extends Component {
  constructor(props){
    super();

    const openStyles = [];
    const closedStyles= [];
    const nodeText = [];

    for(let i = 0; i < props.children.length; i++){
      let top = Math.round(props.radius*Math.cos(2*Math.PI*i/props.children.length)).toString() + 'px';
      let left = Math.round(props.radius*Math.sin(2*Math.PI*i/props.children.length)).toString() + 'px';

      if(window.innerWidth <= 720) {
        top = (110 + i*110).toString() + 'px';
        left = '0px';
        console.log(window.innerWidth);
      }

      const openStyle = {
        top,
        left,
        content: props.children[i],
      };
      const closedStyle = {
        top: '0px',
        left: '0px',
        transform: 'scale(0)',
        content: props.children[i],
      };

      openStyles.push(openStyle);
      closedStyles.push(closedStyle);
      nodeText.push(i.toString());
    }

    let openContainerStyle = {};

    if(window.innerWidth <= 720){
      openContainerStyle = {
        paddingBottom: (props.children.length*110) + 'px',
      }
    }


    this.state = {
      containerStyle : {},
      openContainerStyle,
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
        containerStyle: {paddingBottom: '0px'},
      });
    } else {
      this.setState({
        open: true,
        styles: this.state.openStyles,
        text: '-',
        containerStyle: this.state.openContainerStyle,
      });
    }
  }

  render(){
    return(
        <div className="CircularMenu" style = {this.state.containerStyle}>
          <div className="MenuCenter Node" onClick={this.toggleOpen}>
            <h1 className="MenuCenterText">{this.state.text}</h1>
          </div>
          {
            this.state.styles.map((style, i) =>(
              <div key={i} className="MenuItem Node" style={style} >
                <div className ="NodeContent">
                  {style.content}
                </div>
                {/* {<h1 className="MenuCenterText">{this.state.nodeText[i]}</h1>} */}
              </div>
            ))
          }
        </div>
    );
  }
}

export default CircularMenu;
