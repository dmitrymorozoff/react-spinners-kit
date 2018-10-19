import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fall = props => keyframes`
    0% {
        transform: translateX(${props.translatesPoints[0]}px) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(${props.translatesPoints[1]}px) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(${props.translatesPoints[2]}px) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(${props.translatesPoints[3]}px) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(${props.translatesPoints[4]}px) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(${props.translatesPoints[5]}px) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(${props.translatesPoints[6]}px) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(${props.translatesPoints[7]}px) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(${props.translatesPoints[8]}px) rotate(74deg);
        opacity: 0;
    }
`;

const getTranslatePositions = (countBars, size) => {
    const translates = [];
    for (let i = 0; i <= countBars + 1; i++) {
        translates.push(-i * (size / 8));
    }
    return translates;
};

const getBars = ({
    countBars,
    rotatesPoints,
    translatesPoints,
    color,
    size,
}) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(
            <Bar
                color={color}
                size={size}
                translatesPoints={translatesPoints}
                rotate={rotatesPoints[i]}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return bars;
};

export const DominoSpinner = ({ size, color, loading }) => {
    const countBars = 7;
    const rotatesPoints = [0, 0, 0, 10, 40, 60, 70];
    const translatesPoints = getTranslatePositions(countBars, size);
    return (
        loading && (
            <Wrapper size={size}>
                {getBars({
                    countBars,
                    rotatesPoints,
                    translatesPoints,
                    color,
                    size,
                })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => props.size}px;
    height: ${props => props.size / 5}px;
`;

const Bar = styled.div`
    position: absolute;
    right: 0;
    width: ${props => props.size / 30}px;
    height: ${props => props.size / 5}px;
    transform-origin: 50% 100%;
    background-color: ${props => props.color};
    animation: ${fall} 3s linear infinite;
    animation-delay: ${props => props.index * -0.42}s;
    transform: translateX(${props => props.size - props.index * 15}px)
        rotate(${props => props.rotate}deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`;

DominoSpinner.defaultProps = {
    loading: true,
    size: 100,
    color: "#4b4c56",
};

DominoSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
