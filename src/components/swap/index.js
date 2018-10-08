import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const animationLeftPostions = props => {
    switch (props.index) {
        case 0:
            return {
                x: props.size - props.size / 4,
                y: props.y,
            };
        case 1:
            return {
                x: props.x,
                y: props.y - props.size / 2 + props.size / 8,
            };
        case 2:
            return {
                x: 0,
                y: props.y,
            };
    }
};

const motion = props => keyframes`
    0% {
        top: ${props.y}px;
        left: ${props.x}px;
    }
    50%{
        top: ${animationLeftPostions(props).y}px;
        left: ${animationLeftPostions(props).x}px;
    }
    100% {
        top: ${props.y}px;
        left: ${props.x}px;
    }
`;

const getBalls = (countBalls, color, size) => {
    const balls = [];
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                color={color}
                size={size}
                x={i * (size / 4 + size / 8)}
                y={size / 2 - size / 8}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return balls;
};

export const SwapSpinner = ({ size, color }) => {
    const countBalls = 3;
    return <Wrapper size={size}>{getBalls(countBalls, color, size)}</Wrapper>;
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size / 2 + props.size / 8}px;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 4}px;
    height: ${props => props.size / 4}px;
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${motion} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`;

SwapSpinner.defaultProps = {
    size: 40,
    color: "#686769",
};

SwapSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
