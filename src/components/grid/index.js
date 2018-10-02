import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        top: ${props.y}px;
        left: ${props.x}px;
    }
    50% {
        width: ${props.size / 4}px;
        height: ${props.size / 4}px;
        top: ${props.size / 2 - props.size / 8}px;
        left: ${props.size / 2 - props.size / 8}px;
    }
    100% {
        top: ${props.y}px;
        left: ${props.x}px;
    }
`;

const getBalls = (countBallsInLine, color, size) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBallsInLine; i++) {
        for (let j = 0; j < countBallsInLine; j++) {
            balls.push(
                <Ball
                    color={color}
                    size={size}
                    x={i * (size / 3 + size / 12)}
                    y={j * (size / 3 + size / 12)}
                    key={keyValue.toString()}
                />,
            );
            keyValue++;
        }
    }
    return balls;
};

export const GridSpinner = ({ size, color }) => {
    const countBallsInLine = 3;
    return (
        <Wrapper size={size}>{getBalls(countBallsInLine, color, size)}</Wrapper>
    );
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
    width: ${props => props.size / 6}px;
    height: ${props => props.size / 6}px;
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${motion} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`;

GridSpinner.defaultProps = {
    size: 40,
    color: "#fff",
};

GridSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
