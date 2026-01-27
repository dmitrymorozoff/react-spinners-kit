import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const trace = props => keyframes`
    0% {
        border: ${props.size / 10}${props.sizeUnit} solid ${props.backColor};
    }
    25% {
        border: ${props.size / 10}${props.sizeUnit} solid ${props.frontColor};
    }
    50% {
        border: ${props.size / 10}${props.sizeUnit} solid ${props.backColor};
    }
    100% {
        border: ${props.size / 10}${props.sizeUnit} solid ${props.backColor};
    }
`;

const motion = props => keyframes`
    25% {
        transform: translate(${props.size / 2 + props.size / 10}${props.sizeUnit}, 0);
    }
    50% {
        transform: translate(${props.size / 2 + props.size / 10}${props.sizeUnit}, ${props.size / 2 +
    props.size / 10}${props.sizeUnit});
    }
    75% {
        transform: translate(0, ${props.size / 2 + props.size / 10}${props.sizeUnit});
    }
    100% {
        transform: translate(0, 0);
    }
`;

const getBalls = ({ countBalls, frontColor, backColor, size, sizeUnit }) => {
    const balls = [];
    let indexes = [0, 1, 3, 2];
    let counter = 0;
    for (let i = 0; i < countBalls / 2; i++) {
        for (let j = 0; j < countBalls / 2; j++) {
            balls.push(
                <Ball
                    frontColor={frontColor}
                    backColor={backColor}
                    size={size}
                    x={j * (size / 2 + size / 10)}
                    y={i * (size / 2 + size / 10)}
                    key={indexes[counter].toString()}
                    index={indexes[counter]}
                    sizeUnit={sizeUnit}
                />,
            );
            counter++;
        }
    }
    return balls;
};

export const TraceSpinner = ({ size, frontColor, backColor, loading, sizeUnit }) => {
    const countBalls = 4;
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
                <MovedBall frontColor={frontColor} size={size} sizeUnit={sizeUnit} />
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
    transform: rotate(45deg);
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: transparent;
    border: ${props => `${props.size / 10}${props.sizeUnit}`} solid ${props => props.backColor};
    animation: ${trace} 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: ${props => props.index * 1}s;
`;

const MovedBall = styled(Ball)`
    top: 0;
    left: 0;
    border-color: ${props => props.frontColor};
    background-color: ${props => props.frontColor};
    animation: ${motion} 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`;

TraceSpinner.defaultProps = {
    loading: true,
    size: 35,
    frontColor: "#00ff89",
    backColor: "#4b4c56",
    sizeUnit: "px",
};

TraceSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
