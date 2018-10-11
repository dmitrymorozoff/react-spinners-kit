import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const move = props => keyframes`
    0% {
        transform: translateX(${props.x}px) translateY(${props.y}px) scale(1) ;
    }
    5% {
        transform: translateX(-${props.size / 12}px) translateY(-${props.size /
    12}px) scale(0);
    }
    50% {
        transform: translateX(-${props.size / 12}px) translateY(-${props.size /
    12}px) scale(0);
    }
    55% {
        transform: translateX(${props.x}px) translateY(${props.y}px) scale(1) ;
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

export const SphereSpinner = ({ size, color, loading }) => {
    const radius = size / 2;
    const countBalls = 7;
    const ballSize = size / 5;
    const angle = 360 / countBalls;
    return (
        loading && (
            <Wrapper size={size}>
                {getBalls({ countBalls, radius, angle, color, size, ballSize })}
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
    animation: ${rotate} 8s linear infinite;
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
        translateY(${props => props.y}px);
    animation: ${props => move(props)} 5s cubic-bezier(0.165, 0.84, 0.44, 1)
        infinite;
    animation-delay: ${props => props.index * 0.3}s;
`;

SphereSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
};

SphereSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
