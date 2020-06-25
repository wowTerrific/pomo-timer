import React from "react"

const Container = ({ children }) => (
	<div style={{ 
		width: '100%',
		padding: '1rem 2rem', 
		border: '2px solid #32c5aa', 
		borderRadius: '20px', 
		background: 'rgba(255, 255, 255, 0.2)', 
		color: 'white',
		margin: '10px'
	}}>
	
		{children}
		
	</div>
)


export default Container
