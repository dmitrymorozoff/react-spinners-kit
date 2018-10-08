import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        top: ${props.y}px;
        left: ${props.x}px;
    }
    25% {
        top: ${props.y}px;
        left: ${props.x}px;
        opacity: 0;
    }
    50% {
        top: ${props.y + props.size / 2}px;
        left: ${props.x}px;
        opacity: 0;
    }
    100% {
        top: ${props.y}px;
        left: ${props.x}px;
        opacity: 1;
    }
`;

const getBalls = (countBalls, color, size) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                color={color}
                size={size}
                index={i}
                x={i * (size / 2.5)}
                y={size / 2 - size / 10}
                key={keyValue.toString()}
            />,
        );
        keyValue++;
    }
    return balls;
};

export const StageSpinner = ({ size, color }) => {
    const countBalls = 3;
    return <Wrapper size={size}>{getBalls(countBalls, color, size)}</Wrapper>;
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 5}px;
    height: ${props => props.size / 5}px;
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${motion} 1s ease-in-out infinite;
    animation-delay: ${props => props.index * 0.2}s;
`;

StageSpinner.defaultProps = {
    size: 40,
    color: "#fff",
};

StageSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
