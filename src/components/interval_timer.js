import React from "react"

export default function IntervalTimer() {
	return (
		<div>
			<h3>Interval Timer</h3>
			<div>
				<p><span>Status:</span> <span>Not Active</span></p>
			</div>
			
			<div>
				<div>
					<div>
						<p><span>Start Time:</span> <input type="time" /> <em>(Optional)</em></p>
					</div>
					<div>
						<p><span>Length:</span> <input type="number" /> Minutes</p>
					</div>
					<div>
						<div>
							<button className="startBtn">START</button>
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