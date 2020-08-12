import React from "react";
import styled, { css } from "styled-components";

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: #008bf8;
  color: #fff;
`;

const bedpressCss = css`
  background-color: #e500ce;
  color: #fff;
`;

const newsCss = css`
  background-color: #e50003;
  color: #fff;
`;

const otherCss = css`
  background-color: #00e557;
  color: #fff;
`;

const notesCss = css`
  background-color: #161616;
  color: #fff;
`;

const tagCss = css`
  background-color: #00e557;
  color: #fff;
`;

const StyledCard = styled.div`
    width: ${(props) => (props.big ? "90%px" : "70%px")};
    border-radius: 8px;
    padding: 15px;
    opacity: 0;
    transition: 250ms all ease-in-out;
    margin: ${(props) => (props.noMargin ? 0 : "12px")};
		box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 1);
    background-color: #F1F1F1;
    ${(props) => props.animated && animatedCss}
		${(props) => props.primary && primaryCss}
		${(props) => props.bedpress && bedpressCss}
		${(props) => props.news && newsCss}
		${(props) => props.other && otherCss}
    ${(props) => props.notes && notesCss}
    ${(props) => props.tags && tagCss}
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { animated: true };
      });
    }, this.props.delay);
  }

  render() {
    const {
      delay = 0,
      noAnimation,
      primary,
      bedpress,
      news,
      other,
      notes,
      noMargin,
      big,
      ...props
    } = this.props;
    return (
      <StyledCard
        animated={this.state.animated}
        delay={delay}
        primary={primary}
        bedpress={bedpress}
        news={news}
        other={other}
        notes={notes}
        noAnimation={noAnimation}
        big={big}
        noMargin={noMargin}
        {...props}
      />
    );
  }
}

export default Card;
