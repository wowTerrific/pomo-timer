import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import HourTimer from "../components/HourTimer"




const IndexPage = () => (
  <Layout>
	<div>
		<HourTimer />
	</div>
	<Container>
		<p style={{ 
			textAlign: "center", 
			fontSize: "22px"}}
		>
			Every hour on the hour, a new window will open to alert you that it is now time to get up, stretch, take a break, etc. You can minimize this window and when the time is up, the new window should pop up and interrupt your work. 
		</p>
		<p style={{ 
			textAlign: "center", 
			fontSize: "22px"}}
		>
			You will need to <a style={{ color: "#32c5aa", }} href="https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DDesktop&hl=en" target="_blank">allow pop-ups</a> from this site in order for the app to work.  
		</p>
	</Container>
  </Layout>
)

export default IndexPage
