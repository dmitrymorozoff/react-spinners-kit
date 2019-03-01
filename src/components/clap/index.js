import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const move = props => keyframes`
    0% {
        transform: translateX(${props.x}${props.sizeUnit}) translateY(${props.y}${
    props.sizeUnit
}) scale(1.25) ;
    }
    5% {
        transform: translateX(${props.x}${props.sizeUnit}) translateY(${props.y}${
    props.sizeUnit
}) scale(1.75);
    }
    50% {
        transform: translateX(${props.x}${props.sizeUnit}) translateY(${props.y}${props.sizeUnit}) scale(.25);
    }
    55% {
        background-color: ${props.backColor};
        transform: translateX(${props.x}${props.sizeUnit}) translateY(${props.y}${props.sizeUnit}) scale(1) ;
    }
`;

const getBalls = ({ countBalls, radius, angle, frontColor, backColor, size, ballSize, sizeUnit }) => {
    const balls = [];
    const offset = ballSize / 2;
    for (let i = 0; i < countBalls; i++) {
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
        balls.push(
            <Ball
                frontColor={frontColor}
                backColor={backColor}
                ballSize={ballSize}
                size={size}
                sizeUnit={sizeUnit}
                x={y}
                y={x}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return balls;
};

export const ClapSpinner = ({ size, frontColor, backColor, loading, sizeUnit }) => {
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
                    frontColor,
                    backColor,
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
    animation: ${rotate} 1.5s linear infinite;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.size / 2}${props.sizeUnit}`};
    left: ${props => `${props.size / 2}${props.sizeUnit}`};
    width: ${props => `${props.ballSize}${props.sizeUnit}`};
    height: ${props => `${props.ballSize}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.frontColor};
    transform: translateX(${props => `${props.x}${props.sizeUnit}`})
        translateY(${props => `${props.y}${props.sizeUnit}`});
    animation: ${props => move(props)} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: ${props => props.index * 0.2}s;
`;

ClapSpinner.defaultProps = {
    loading: true,
    size: 30,
    frontColor: "#00ff89",
    backColor: "#4b4c56",
    sizeUnit: "px",
};

ClapSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
