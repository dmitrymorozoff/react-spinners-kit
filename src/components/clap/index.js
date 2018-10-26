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
        transform: translateX(${props.x}px) translateY(${
    props.y
}px) scale(1.25) ;
    }
    5% {
        transform: translateX(${props.x}px) translateY(${
    props.y
}px) scale(1.75);
    }
    50% {
        transform: translateX(${props.x}px) translateY(${props.y}px) scale(.25);
    }
    55% {
        background-color: ${props.backColor};
        transform: translateX(${props.x}px) translateY(${props.y}px) scale(1) ;
    }
`;

const getBalls = ({
    countBalls,
    radius,
    angle,
    topColor,
    backColor,
    size,
    ballSize,
}) => {
    const balls = [];
    const offset = ballSize / 2;
    for (let i = 0; i < countBalls; i++) {
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
        balls.push(
            <Ball
                topColor={topColor}
                backColor={backColor}
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

export const ClapSpinner = ({ size, topColor, backColor, loading }) => {
    const radius = size / 2;
    const countBalls = 7;
    const ballSize = size / 5;
    const angle = 360 / countBalls;
    return (
        loading && (
            <Wrapper size={size}>
                {getBalls({
                    countBalls,
                    radius,
                    angle,
                    topColor,
                    backColor,
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
    animation: ${rotate} 1.5s linear infinite;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => props.size / 2}px;
    left: ${props => props.size / 2}px;
    width: ${props => props.ballSize}px;
    height: ${props => props.ballSize}px;
    border-radius: 50%;
    background-color: ${props => props.topColor};
    transform: translateX(${props => props.x}px)
        translateY(${props => props.y}px);
    animation: ${props => move(props)} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1)
        infinite;
    animation-delay: ${props => props.index * 0.2}s;
`;

ClapSpinner.defaultProps = {
    loading: true,
    size: 30,
    topColor: "#00ff89",
    backColor: "#4b4c56",
};

ClapSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    topColor: PropTypes.string,
    backColor: PropTypes.string,
};
