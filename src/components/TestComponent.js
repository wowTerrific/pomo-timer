import React from "react"

class TestComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			one: 1,
			two: 2,
		}
	}
	
	addTwo() {
		this.setState({
			one: (this.state.one + 2),
			two: (this.state.two + 2),
		})
	}
	
	componentDidMount() {
		setInterval( 
			() => this.addTwo(), 1000)
	}
	
	render() {
		
	const { one, two } = this.state
		
		return (
			<div>
				<p>{one}</p>
				
				<p>{two}</p>
			</div>
		)
	}
}

export default TestComponent