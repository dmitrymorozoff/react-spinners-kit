import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = () => keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const move = props => keyframes`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(${props.translateTo}${props.sizeUnit}) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`;

const getBalls = ({ countBalls, color, size, sizeUnit }) => {
    const balls = [];
    const center = size / 4;
    const ballsTranslatePositions = [-center, center];
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                color={color}
                size={size}
                x={size / 2 - size / 6}
                y={size / 2 - size / 6}
                key={i.toString()}
                translateTo={ballsTranslatePositions[i]}
                index={i}
                sizeUnit={sizeUnit}
            />,
        );
    }
    return balls;
};

export const GooSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBalls = 2;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                <BallsWrapper size={size} sizeUnit={sizeUnit}>
                    {getBalls({ countBalls, color, size, sizeUnit })}
                </BallsWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    filter: url("#goo");
`;

const BallsWrapper = styled.div`
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    animation: ${rotate} 1.7s linear infinite;
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 3}${props.sizeUnit}`};
    height: ${props => `${props.size / 3}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${move} 1.5s ease-in-out infinite;
`;

GooSpinner.defaultProps = {
    loading: true,
    size: 55,
    color: "#fff",
    sizeUnit: "px",
};

GooSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
