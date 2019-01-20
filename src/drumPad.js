import React from 'react';
import ReactDOM from 'react-dom';

class DrumPad extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        audioName: ""
      };
    this.playAudio = this.playAudio.bind(this); 
    this.playFunction = this.playFunction.bind(this);  
  }
  componentDidMount() {
    document.addEventListener("keyup", this.playFunction, false);
    document.addEventListener("click", this.playFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.playFunction, false);
    document.removeEventListener("click", this.playFunction, false);
  }
  playFunction(event) {
    if (event.key === undefined) {
      this.playAudio(event.target.lastChild.id);
    } else {
      this.playAudio(event.key);
    }
  }
  playAudio(event) {
    const drumKeys = document.querySelectorAll(".drum-pad");
    for (let i = 0; i < drumKeys.length; i++) {
      if (drumKeys[i].lastChild.id === event) {
        this.setState({
          audioName: drumKeys[i].id
        });
        if (!drumKeys[i].lastChild.paused) {
          drumKeys[i].lastChild.load();
        }
        drumKeys[i].lastChild.play();
        drumKeys[i].style.opacity = "0.1";
        setTimeout(() => drumKeys[i].style.opacity = "1", 800);
      } 
    }
  }
  render() {
    return (
      <div id="drumPadContain" data-testid="drumPadContain">
        <div id="display"><input type="text" data-testid="displayValue" value={this.state.audioName}></input></div>	
          <div id="drumKeys">	
            
            <div className="row">
              <div className="drum-pad" id="Heater-1" data-testid="Heater-1" tabIndex="1"><h1>Q</h1>
                <audio className="clip" id="q"><source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" data-testid="audio1" /></audio>
	            </div>		
              <div className="drum-pad" id="Dsc_Oh"><h1>W</h1>
                <audio className="clip" id="w"><source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" /></audio>
              </div>	
              <div className="drum-pad" id="Kick_n_Hat"><h1>E</h1>
                <audio className="clip" id="e"><source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" /></audio>
              </div>
            </div>
				
            <div className="row">
              <div className="drum-pad" id="side_stick_1"><h1>A</h1>
                <audio className="clip" id="a"><source src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" type="audio/mp3" /></audio>
              </div>
              <div className="drum-pad" id="Chord_1" data-testid="Chord_1"><h1>S</h1>
                <audio className="clip" id="s"><source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" type="audio/mp3" data-testid="audio2" /></audio>
              </div>
              <div className="drum-pad" id="RP4_KICK_1"><h1>D</h1>
                <audio className="clip" id="d"><source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" /></audio>
              </div>
            </div>	
				
            <div className="row">
              <div className="drum-pad" id="Heater-2"><h1>Z</h1>
                <audio className="clip" id="z"><source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" /></audio>
              </div>
              <div className="drum-pad" id="Chord_2"><h1>X</h1>
                <audio className="clip" id="x"><source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" type="audio/mp3" /></audio>
              </div>
              <div className="drum-pad" id="Dry_Ohh"><h1>C</h1>
                <audio className="clip" id="c"><source src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" type="audio/mp3" /></audio>
             </div>
            </div>	
		    </div>
        <div id="footer"><h4>Copyright © 2018 Nolan Kuenzi. Made for the freeCodeCamp Development Challenge: Build a Drum Machine.</h4></div>
      </div>
    );
  }
}
export { DrumPad }