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

const getBalls = ({ countBalls, color, size, sizeUnit }) => {
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
                sizeUnit={sizeUnit}
            />,
        );
    }
    return balls;
};

export const SwapSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBalls = 3;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBalls({ countBalls, color, size, sizeUnit })}
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
    height: ${props => `${props.size / 2 + props.size / 8}${props.sizeUnit}`};
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 4}${props.sizeUnit}`};
    height: ${props => `${props.size / 4}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${motion} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`;

SwapSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#4b4c56",
    sizeUnit: "px",
};

SwapSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
