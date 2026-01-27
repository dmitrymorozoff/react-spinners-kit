import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        width: ${props.size / 20}${props.sizeUnit}
    }
    50% {
        width: ${props.size / 6}${props.sizeUnit}
    }
    100% {
        width: ${props.size / 20}${props.sizeUnit}
    }
`;

const getBars = (countBars, color, size, sizeUnit) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(
            <Bar
                color={color}
                size={size}
                sizeUnit={sizeUnit}
                x={i * (size / 5 + size / 25) - size / 12}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return bars;
};

export const BarsSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = 5;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBars(countBars, color, size, sizeUnit)}
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

const Bar = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 20}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    background-color: ${props => props.color};
    animation: ${motion} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

BarsSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#00ff89",
    sizeUnit: "px",
};

BarsSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
