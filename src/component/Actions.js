import React, {Component} from "react";

export class App extends Component {
    render()    
    {
        let start = (this.props.timerState !== "running")
            ? <button onClick={this.props.startTimer} className="start">Start</button>
            : <button className="start" diasabled>Start</button>
        let lap = (this.props.timerState === "running")  
            ? <button onClick={this.props.lap} className="lap">Lap</button>
            : <button className="lap" diasabled>Lap</button>
        let pause = (this.props.timerState === "running")
            ? <button onClick={this.props.pauseTimer} className="pause">Pause</button>
            : <button className="pause" diasabled>Pause</button>
        let stop = (this.props.timerState !== "stopped")
            ? <button onClick={this.props.stopTimer} className="stop">Stop</button>
            : <button className="stop" diasabled>Stop</button>
        return (
            <div className="btn">
                {start}
                {lap}
                {pause}
                {stop}
            </div>
        )
    }
}

export default App;
