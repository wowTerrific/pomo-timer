import React from "react"



const testAlert = () => ( 
setTimeout(function(){window.open("./continuous-times-up")}, 4000)
)

export default function ContinuousTimer() {
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
							<p><span>Start Time:</span> <input type="time" /> <em>(Optional)</em></p>
						</div>
						<div>
							<p><span>Length:</span> <input type="number" /> Minutes</p>
						</div>
					</div>
					
					<div>
						<div>
							<button className="startBtn" onClick={testAlert}>START</button>
						</div>
						<div>
							<p><em>Timer goes here</em></p>
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