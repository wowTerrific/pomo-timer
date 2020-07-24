import React from "react"
import Layout from "../components/layout"
import Clock from "../images/alarm-1.png"


const ContinuousTimesUp = () => (
  <Layout>
	<div className="times-up">
		<img src={Clock} alt="clock" />
		<p>Time&apos;s up!</p>
		<p>Your Continuous Time is up.</p>
	</div>
  </Layout>
)

export default ContinuousTimesUp