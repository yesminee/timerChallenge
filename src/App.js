import React, {Component} from 'react';
import './App.css';
import Time from "./component/Time";
import Actions from "./component/Actions";
import Laps from "./component/Laps";

class App extends Component{
    constructor(){
        super();
        this.state={
            time:0,
            formattedTime: "00:00:00",
            timerState: "stopped",
            laps:[],
            lap:0
        }
        this.startTimer=this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.lap = this.lap.bind(this);
    }
    formatTime(secs) {
        let date = new Date(null);
        date.setSeconds(secs);
        let formattedTime = date.toISOString().substr(11, 8);
        return formattedTime;
    }
    startTimer(){
        this.timer= setInterval(()=>{
            this.setState({
                time: this.state.time+1,
                formattedTime: this.formatTime(this.state.time +1),
                timerState: "running"
            });
        },1000);
        console.log("timer has started...");
    }
    pauseTimer(){
        clearInterval(this.timer);
        this.setState ({
            timerState: "paused"
        });
        console.log("timer has paused...");
    }
    lap(){
        let laps= this.state.laps;
        laps.push(this.state.time);
        this.setState({
            lap: this.state.time,
            laps:laps
        });
        console.log("lapped ",this.state.lap);
    }
    stopTimer() {
        clearInterval(this.timer);
        this.setState({
            time: 0,
            formattedTime: "00:00:00",
            timerState: "stopped"
        });
        console.log("timer has stopped...");
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h3>Timer<span>App</span></h3>
                </header>
                <Time time={this.state.formattedTime}/>
                <Actions 
                timerState={this.state.timerState}
                startTimer={this.startTimer}
                pauseTimer={this.pauseTimer}
                stopTimer={this.stopTimer}
                lap={this.lap}
                />
                <Laps laps={this.state.laps} formatTime={this.formatTime}/>
            </div>
        )
    }
}

export default App;
