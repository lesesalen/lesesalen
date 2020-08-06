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

class Week extends React.Component {
  getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
    return [d.getUTCFullYear(), weekNo]
  }
  render() {
    var week = "Week"
    return week + " " + this.getWeekNumber(new Date())[1]
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
          &nbsp; - &nbsp;
          <Week />
        </p>
      </>
    </StyledDiv>
  )
}
