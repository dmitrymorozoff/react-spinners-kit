import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fall = props => keyframes`
    0% {
        transform: translateX(${props.translatesPoints[0]}${props.sizeUnit}) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(${props.translatesPoints[1]}${props.sizeUnit}) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(${props.translatesPoints[2]}${props.sizeUnit}) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(${props.translatesPoints[3]}${props.sizeUnit}) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(${props.translatesPoints[4]}${props.sizeUnit}) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(${props.translatesPoints[5]}${props.sizeUnit}) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(${props.translatesPoints[6]}${props.sizeUnit}) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(${props.translatesPoints[7]}${props.sizeUnit}) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(${props.translatesPoints[8]}${props.sizeUnit}) rotate(74deg);
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

const getBars = ({ countBars, rotatesPoints, translatesPoints, color, size, sizeUnit }) => {
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
                sizeUnit={sizeUnit}
            />,
        );
    }
    return bars;
};

export const DominoSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = 7;
    const rotatesPoints = [0, 0, 0, 10, 40, 60, 70];
    const translatesPoints = getTranslatePositions(countBars, size);
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBars({
                    countBars,
                    rotatesPoints,
                    translatesPoints,
                    color,
                    size,
                    sizeUnit,
                })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
`;

const Bar = styled.div`
    position: absolute;
    right: 0;
    width: ${props => `${props.size / 30}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    transform-origin: 50% 100%;
    background-color: ${props => props.color};
    animation: ${fall} 3s linear infinite;
    animation-delay: ${props => props.index * -0.42}s;
    transform: translateX(${props => `${props.size - props.index * 15}${props.sizeUnit}`})
        rotate(${props => props.rotate}deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`;

DominoSpinner.defaultProps = {
    loading: true,
    size: 100,
    color: "#4b4c56",
    sizeUnit: "px",
};

DominoSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
