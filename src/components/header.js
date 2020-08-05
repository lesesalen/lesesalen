import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import { Link } from "gatsby"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleString(),
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    })
  }
  render() {
    return this.state.time
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function StyledHeader() {
  return (
    <StyledDiv>
      <h1
        style={{
          ...scale(1.3),
          marginBottom: rhythm(0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Lesesalen
        </Link>
      </h1>
      <>
        <p style={{ bottom: 0 }}>
          <Clock />
        </p>
      </>
    </StyledDiv>
  )
}
