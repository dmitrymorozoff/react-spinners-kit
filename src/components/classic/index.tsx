import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`;

const getBars = ({ countBars: countBars, color, size, barSize: barSize, sizeUnit }) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        const rotate = (360 / countBars) * i;
        const translate = -(size / 2);
        bars.push(
            <Bar
                countBars={countBars}
                color={color}
                barSize={barSize}
                size={size}
                rotate={rotate}
                translate={translate}
                key={i.toString()}
                index={i}
                sizeUnit={sizeUnit}
            />,
        );
    }
    return bars;
};

export const ClassicSpinner = ({ size, color, loading, sizeUnit }) => {
    const radius = size / 2;
    const countBars = 16;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBars({
                    countBars,
                    radius,
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
`;

const Bar = styled.div`
    position: absolute;
    width: ${props => `${props.size / 10}${props.sizeUnit}`};
    height: ${props => `${props.size / 4}${props.sizeUnit}`};
    background-color: ${props => props.color};
    opacity: 0.05;
    transform: ${props => `rotate(${props.rotate}deg)`}
        ${props => `translate(0, ${props.translate}${props.sizeUnit})`};
    animation: ${fade} ${props => props.countBars * 0.06}s linear infinite;
    animation-delay: ${props => props.index * 0.06}s;
`;

ClassicSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
    sizeUnit: "px",
};

ClassicSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
