import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        opacity: 0;
        border-color: ${props.color};
        transform: ${`rotateX(65deg) rotateY(45deg) translateZ(-${props.size * 1.5}${
            props.sizeUnit
        }) scale(0.1)`};
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: ${`rotateX(65deg) rotateY(-45deg) translateZ(-${props.size * 1.5}${
            props.sizeUnit
        }) scale(0.1)`};
    }
`;

const getBalls = ({ countBallsInLine, color, size, sizeUnit }) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBallsInLine; i++) {
        balls.push(
            <Ball color={color} size={size} key={keyValue.toString()} index={i} sizeUnit={sizeUnit} />,
        );
        keyValue++;
    }
    return balls;
};

export const HoopSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBallsInLine = 6;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBalls({ countBallsInLine, color, size, sizeUnit })}
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
    perspective: 600px;
    transform-style: perserve-3d;
`;

const Ball = styled.div`
    position: absolute;
    width: ${props => `${props.size / 1.5}${props.sizeUnit}`};
    height: ${props => `${props.size / 1.5}${props.sizeUnit}`};
    border: ${props => `${props.size / 5}${props.sizeUnit}`} solid ${props => props.color};
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: ${props => 1 - props.index * 0.2};
    animation: ${motion} 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: ${props => props.index * 200}ms;
`;

HoopSpinner.defaultProps = {
    loading: true,
    size: 45,
    color: "#4b4c56",
    sizeUnit: "px",
};

HoopSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
