import React from "react";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import Logo from "../../content/assets/lesesalen-header.svg";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return this.state.time;
  }
}

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: this.getWeekNumber()
    };
  }
  componentDidMount() {
    const d = new Date(),
      timeToRefresh = new Date();
    const day = d.getDay;
    const isEndOfWeek = day === 6; // 6 = last day of the week
    timeToRefresh.setHours(23, 55); // initializing week number refreshing when almost midnight at the last day of the week
    if (isEndOfWeek && Date.parse(timeToRefresh) < Date.parse(d)) {
      this.intervalID = setInterval(() => this.update(), 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  update() {
    this.setState({
      week: this.getWeekNumber()
    });
  }
  getWeekNumber() {
    var d = new Date();
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    console.log(d);
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNo;
  }
  render() {
    return "week " + this.state.week;
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function StyledHeader() {
  return (
    <StyledDiv>
      <h1
        style={{
          ...scale(1.3),
          marginBottom: rhythm(0),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          <Logo />
        </Link>
      </h1>
      <>
        <p style={{ bottom: 0 }}>
          <Clock />
          &nbsp;-&nbsp;
          <Week />
        </p>
      </>
    </StyledDiv>
  );
}
