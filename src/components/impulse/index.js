import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const impulse = props => keyframes`
    0% {
        background: ${props.backColor};
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: ${props.frontColor};
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:${props.backColor};
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: ${props.backColor};
        transform: scale(1);
    }
`;

const getBalls = ({ countBalls, frontColor, backColor, size, sizeUnit }) => {
    const balls = [];
    for (let i = 0; i < countBalls; i++) {
        balls.push(
            <Ball
                frontColor={frontColor}
                backColor={backColor}
                size={size}
                x={i * (size / 5 + size / 5)}
                y={0}
                key={i.toString()}
                index={i}
                sizeUnit={sizeUnit}
            />,
        );
    }
    return balls;
};

export const ImpulseSpinner = ({ size, frontColor, backColor, loading, sizeUnit }) => {
    const countBalls = 3;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBalls({
                    countBalls,
                    frontColor,
                    backColor,
                    size,
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
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.frontColor};
    animation: ${impulse} 1.25s linear infinite;
    animation-delay: ${props => props.index * 0.125}s;
`;

ImpulseSpinner.defaultProps = {
    loading: true,
    size: 40,
    frontColor: "#00ff89",
    backColor: "#4b4c56",
    sizeUnit: "px",
};

ImpulseSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
