import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const move = props => keyframes`
    100% {
        opacity: 0;
        transform: translateX(${props.x}px)
        translateY(${props.y}px) scale(1);
   }
`;

const getBalls = ({ countBalls, radius, angle, color, size, ballSize }) => {
    const balls = [];
    const offset = ballSize / 2;
    for (let i = 0; i < countBalls; i++) {
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
        balls.push(
            <Ball
                color={color}
                ballSize={ballSize}
                size={size}
                x={y}
                y={x}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return balls;
};

export const FlapperSpinner = ({ size, color, loading }) => {
    const radius = size / 2;
    const countBalls = 7;
    const ballSize = size / 1.5;
    const angle = 360 / countBalls;
    return (
        loading && (
            <Wrapper size={size}>
                {getBalls({
                    countBalls,
                    radius,
                    angle,
                    color,
                    size,
                    ballSize,
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
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => props.size / 2}px;
    left: ${props => props.size / 2}px;
    width: ${props => props.ballSize}px;
    height: ${props => props.ballSize}px;
    border-radius: 50%;
    background-color: ${props => props.color};
    transform: translateX(${props => props.x}px)
        translateY(${props => props.y}px) scale(0);
    animation: ${props => move(props)} 0.8s linear infinite;
    animation-delay: ${props => props.index * 0.1}s;
`;

FlapperSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#00ff89",
};

FlapperSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
