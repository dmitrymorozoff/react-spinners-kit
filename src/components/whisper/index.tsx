import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: ${props.backColor};
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: ${props.frontColor};
    }
`;

const spin = () => keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const getBalls = ({ countBallsInLine, frontColor, backColor, size, sizeUnit }) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBallsInLine; i++) {
        for (let j = 0; j < countBallsInLine; j++) {
            balls.push(
                <Ball
                    frontColor={frontColor}
                    backColor={backColor}
                    size={size}
                    key={keyValue.toString()}
                    index={keyValue}
                    sizeUnit={sizeUnit}
                />,
            );
            keyValue++;
        }
    }
    return balls;
};

export const WhisperSpinner = ({ size, frontColor, backColor, loading, sizeUnit }) => {
    const countBallsInLine = 3;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBalls({
                    countBallsInLine,
                    frontColor,
                    backColor,
                    size,
                    sizeUnit,
                })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    animation: ${spin} 10s infinite;
`;

const Ball = styled.div`
    float: left;
    clear: right;
    margin: ${props => `${props.size / 15}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    border-radius: 2px;
    background-color: ${props => props.frontColor};
    animation-name: ${motion};
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`;

WhisperSpinner.defaultProps = {
    loading: true,
    size: 50,
    frontColor: "#4b4c56",
    backColor: "#00ff89",
    sizeUnit: "px",
};

WhisperSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
