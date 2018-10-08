import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const impulse = props => keyframes`
    0% {
        background: ${props.bottomColor};
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: ${props.topColor};
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:${props.bottomColor};
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: ${props.bottomColor};
        transform: scale(1);
    }
`;

const getBalls = (countBalls, topColor, bottomColor, size) => {
    const balls = [];
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                topColor={topColor}
                bottomColor={bottomColor}
                size={size}
                x={i * (size / 5 + size / 5)}
                y={0}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return balls;
};

export const ImpulseSpinner = ({ size, topColor, bottomColor }) => {
    const countBalls = 3;
    return (
        <Wrapper size={size}>
            {getBalls(countBalls, topColor, bottomColor, size)}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size / 5}px;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 5}px;
    height: ${props => props.size / 5}px;
    border-radius: 50%;
    background-color: ${props => props.topColor};
    animation: ${impulse} 1.25s linear infinite;
    animation-delay: ${props => props.index * 0.125}s;
`;

ImpulseSpinner.defaultProps = {
    size: 40,
    topColor: "#00ff89",
    bottomColor: "#686769",
};

ImpulseSpinner.propTypes = {
    size: PropTypes.number,
    topColor: PropTypes.string,
    bottomColor: PropTypes.string,
};
