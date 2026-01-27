import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = () => keyframes`
    to {
        transform: rotate(450deg);
    }
`;

const getBars = ({ countBars, color, size, sizeUnit }) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(<Bar color={color} size={size} key={i.toString()} sizeUnit={sizeUnit} index={i} />);
    }
    return bars;
};

export const CombSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = size / 9;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBars({
                    countBars,
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
    left: 0;
    width: ${props => `${props.size / 60}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    left: ${props => `${props.index * 9}${props.sizeUnit}`};
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: ${props => props.color};
    animation: ${rotate} 3s ease infinite;
    animation-delay: ${props => props.index * 0.05}s;
`;

CombSpinner.defaultProps = {
    loading: true,
    size: 100,
    color: "#fff",
    sizeUnit: "px",
};

CombSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
