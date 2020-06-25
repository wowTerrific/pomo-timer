import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import IntervalTimer from "../components/interval_timer.js"
import ContinuousTimer from "../components/continuous_timer.js"

const IndexPage = () => (
  <Layout>
	<Container>
		<p>This is a test paragraph</p>
	</Container>
	<div className="flexCont">
		<Container>
			<IntervalTimer />
		</Container>
		<Container>
			<ContinuousTimer />
		</Container>
	</div>
  </Layout>
)

export default IndexPage
