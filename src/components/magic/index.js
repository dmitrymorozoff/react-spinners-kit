import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = () => keyframes`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`;

const getBalls = ({ countBalls, color, size }) => {
    const balls = [];
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                color={color}
                countBalls={countBalls}
                size={size}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return balls;
};

export const MagicSpinner = ({ size, color, loading }) => {
    const countBalls = size / 12;
    return (
        loading && (
            <Wrapper size={size}>
                {getBalls({
                    countBalls,
                    color,
                    size,
                })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    overflow: hidden;
`;

const Ball = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: ${props => props.index * (props.size / props.countBalls)}px;
    height: ${props => props.index * (props.size / props.countBalls)}px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: ${props => props.color};
    animation: ${rotate} 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite
        forwards;
    animation-delay: ${props => props.index * 0.05}s;
`;

MagicSpinner.defaultProps = {
    loading: true,
    size: 70,
    color: "#fff",
};

MagicSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
