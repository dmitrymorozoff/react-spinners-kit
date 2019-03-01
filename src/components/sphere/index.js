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
        transform: translateX(${props.x}${props.sizeUnit}) translateY(${props.y}${props.sizeUnit}) scale(1) ;
    }
    5% {
        transform: translateX(-${props.size / 12}${props.sizeUnit}) translateY(-${props.size / 12}${
    props.sizeUnit
}) scale(0);
    }
    50% {
        transform: translateX(-${props.size / 12}${props.sizeUnit}) translateY(-${props.size / 12}${
    props.sizeUnit
}) scale(0);
    }
    55% {
        transform: translateX(${props.x}${props.sizeUnit}) translateY(${props.y}${props.sizeUnit}) scale(1) ;
    }
`;

const getBalls = ({ countBalls, radius, angle, color, size, ballSize, sizeUnit }) => {
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
                sizeUnit={sizeUnit}
            />,
        );
    }
    return balls;
};

export const SphereSpinner = ({ size, color, loading, sizeUnit }) => {
    const radius = size / 2;
    const countBalls = 7;
    const ballSize = size / 5;
    const angle = 360 / countBalls;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBalls({
                    countBalls,
                    radius,
                    angle,
                    color,
                    size,
                    ballSize,
                    sizeUnit,
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
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    animation: ${rotate} 8s linear infinite;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.size / 2}${props.sizeUnit}`};
    left: ${props => `${props.size / 2}${props.sizeUnit}`};
    width: ${props => `${props.ballSize}${props.sizeUnit}`};
    height: ${props => `${props.ballSize}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    transform: translateX(${props => `${props.x}${props.sizeUnit}`})
        translateY(${props => `${props.y}${props.sizeUnit}`});
    animation: ${props => move(props)} 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: ${props => props.index * 0.3}s;
`;

SphereSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
    sizeUnit: "px",
};

SphereSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
