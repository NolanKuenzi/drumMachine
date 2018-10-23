import React from 'react';
import ReactDOM from 'react-dom';

class DrumPad extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        audioName: ""
      };
      this.handleAudio = this.handleAudio.bind(this);
    }

  componentDidMount() {
    const drumKeys = document.querySelectorAll(".drum-pad");
    const audFunc = this.handleAudio;
    document.addEventListener("keyup", function(event) {
      for (let i = 0; i < drumKeys.length; i++) {
        if (drumKeys[i].lastChild.id === event.key) {
          audFunc(drumKeys[i]);
        } 
      }
    }, false); 
    document.addEventListener("click", function(event) {
      for (let i = 0; i < drumKeys.length; i++) {
        if (event.target.lastChild.id === drumKeys[i].lastChild.id) {
          audFunc(drumKeys[i]);
        }
      }
    }, false);
  } 

  handleAudio(event) {
    this.setState({
      audioName: event.id
    });
    if (!event.lastChild.paused) {
      event.lastChild.load();
    }  
    event.lastChild.play();
    event.style.opacity = "0.1";
    setTimeout(() => event.style.opacity = "1", 800);
  }
  render() {
    return (
      <div id="drumPadContain">	
        <div id="display"><input type="text" value={this.state.audioName}></input></div>	
          <div id="drumKeys">	
            
            <div className="row">
              <div className="drum-pad" id="Heater-1"><h1>Q</h1>
                <audio className="clip" id="q"><source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" /></audio>
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
              <div className="drum-pad" id="Chord_1"><h1>S</h1>
                <audio className="clip" id="s"><source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" type="audio/mp3" /></audio>
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