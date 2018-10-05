import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

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
                x={i * (size / 4 + size / 10)}
                y={size / 2 - size / 12}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return balls;
};

export const DiscoSpinner = ({ size, color }) => {
    const countBalls = 3;
    return <Wrapper size={size}>{getBalls(countBalls, color, size)}</Wrapper>;
};

const Wrapper = styled.div`
    border: 1px solid red;
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
    width: ${props => props.size / 8}px;
    height: ${props => props.size / 8}px;
    border-radius: 50%;
    border: ${props => props.size / 20}px solid ${props => props.color};
    /* animation: ${motion} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite; */
`;

DiscoSpinner.defaultProps = {
    size: 60,
    color: "#00ff89",
};

DiscoSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
