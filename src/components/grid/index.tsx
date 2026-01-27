import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        top: ${props.y}${props.sizeUnit};
        left: ${props.x}${props.sizeUnit};
    }
    50% {
        width: ${props.size / 4}${props.sizeUnit};
        height: ${props.size / 4}${props.sizeUnit};
        top: ${props.size / 2 - props.size / 8}${props.sizeUnit};
        left: ${props.size / 2 - props.size / 8}${props.sizeUnit};
    }
    100% {
        top: ${props.y}${props.sizeUnit};
        left: ${props.x}${props.sizeUnit};
    }
`;

const getBalls = ({ countBallsInLine, color, size, sizeUnit }) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBallsInLine; i++) {
        for (let j = 0; j < countBallsInLine; j++) {
            balls.push(
                <Ball
                    color={color}
                    size={size}
                    x={i * (size / 3 + size / 12)}
                    y={j * (size / 3 + size / 12)}
                    key={keyValue.toString()}
                    sizeUnit={sizeUnit}
                />,
            );
            keyValue++;
        }
    }
    return balls;
};

export const GridSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBallsInLine = 3;
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
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 6}${props.sizeUnit}`};
    height: ${props => `${props.size / 6}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${motion} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`;

GridSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
    sizeUnit: "px",
};

GridSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
