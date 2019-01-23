import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        top: ${props.y}${props.sizeUnit};
        left: ${props.x}${props.sizeUnit};
    }
    25% {
        top: ${props.y}${props.sizeUnit};
        left: ${props.x}${props.sizeUnit};
        opacity: 0;
    }
    50% {
        top: ${props.y + props.size / 2}${props.sizeUnit};
        left: ${props.x}${props.sizeUnit};
        opacity: 0;
    }
    100% {
        top: ${props.y}${props.sizeUnit};
        left: ${props.x}${props.sizeUnit};
        opacity: 1;
    }
`;

const getBalls = ({ countBalls, color, size, sizeUnit }) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                color={color}
                size={size}
                index={i}
                x={i * (size / 2.5)}
                y={size / 2 - size / 10}
                key={keyValue.toString()}
                sizeUnit={sizeUnit}
            />,
        );
        keyValue++;
    }
    return balls;
};

export const StageSpinner = ({ size, color, loading, sizeUnit }) => {
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
    height: ${props => `${props.size}${props.sizeUnit}`};
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${motion} 1s ease-in-out infinite;
    animation-delay: ${props => props.index * 0.2}s;
`;

StageSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
    sizeUnit: "px",
};

StageSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
