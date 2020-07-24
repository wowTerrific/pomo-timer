import React from "react"


class HourTimer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			minute: "00",
			second: "00",
		}
	}

	tick() {
		let date = new Date();
		let dateArr = [(59 - date.getUTCMinutes()), (59 - date.getUTCSeconds())]
		let changeArr = dateArr.map((x)=> { 
			if (x < 10) {return ("0" + x.toString())} 
			else {return x.toString()}
		})

		this.setState({
			minute: changeArr[0],
			second: changeArr[1],
		})
		if (this.state.second === "00" && this.state.minute === "00") {
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
			<div className="hr-timer">
				<p>{minute} : {second}</p>
			</div>
		)
	}
}



export default HourTimer