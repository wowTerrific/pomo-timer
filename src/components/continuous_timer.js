import React from "react"


class ContinuousTimer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			minute: 0,
			second: 0,
		}
	}

	tick() {
		let date = new Date();
		this.setState({
			minute: date.getUTCMinutes(),
			second: date.getUTCSeconds(),
		})
		if (this.state.second === 60) {
			window.open("./continuous-times-up")
		}
	}


	componentDidMount() {
			setInterval(
			( () => this.tick() )
			, 1000)
		}
		

	
		
	render() {
		const { minute, second } = this.state

		return (
			<div>
				<h3>Continuous Timer</h3>
				<div>
					<p><span>Status:</span> <span>Not Active</span></p>
				</div>
				<div>
					<div>
						<div>
							<input type="checkbox" />
							<div>
								<p><span>Default Hourly on the Hour</span></p>
							</div>
							<div>
								<p><span>Start Time:</span> <input type="time" id="ctTime" /> <em>(Optional)</em></p>
							</div>
							<div>
								<p><span>Length:</span> <input type="number" id="ctMinute" /> Minutes</p>
							</div>
						</div>
						
						<div>
							<div>
								<button className="startBtn">START</button>
							</div>
							<div>
								<p>{60 - minute} : {60 - second}</p>
							</div>
						</div>
					</div>
					<div>
						<div>
							<p><span>Message:</span></p>
							<input type="text" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

/*
function() {
										if (minute !== 60 && second !== 60) {
											return (<p>{minute} : {second}</p>)
										} else {
											window.open("./continuous-times-up");
											return <p>00 : 00</p>;
										}
									}
*/


export default ContinuousTimer