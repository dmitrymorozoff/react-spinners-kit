import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    50% {
        transform: scale(0);
        background-color: ${props.backColor};
    }
`;

const getBalls = ({ countBallsInLine, frontColor, backColor, size }) => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBallsInLine; i++) {
        for (let j = 0; j < countBallsInLine; j++) {
            balls.push(
                <Ball
                    frontColor={frontColor}
                    backColor={backColor}
                    size={size}
                    x={i * (size / 3 + size / 15)}
                    y={j * (size / 3 + size / 15)}
                    key={keyValue.toString()}
                    index={keyValue}
                />,
            );
            keyValue++;
        }
    }
    return balls;
};

export const SwishSpinner = ({ size, frontColor, backColor, loading }) => {
    const countBallsInLine = 3;
    return (
        loading && (
            <Wrapper size={size}>
                {getBalls({ countBallsInLine, frontColor, backColor, size })}
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
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 5}px;
    height: ${props => props.size / 5}px;
    border-radius: 3px;
    background-color: ${props => props.frontColor};
    animation: ${motion} 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: ${props => props.index * 0.1}s;
`;

SwishSpinner.defaultProps = {
    loading: true,
    size: 40,
    frontColor: "#4b4c56",
    backColor: "#fff",
};

SwishSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
};
