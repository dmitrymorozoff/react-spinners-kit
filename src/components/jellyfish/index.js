import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        transform: ${`translateY(${-props.size / 5}${props.sizeUnit});`};
    }
    50% {
        transform: ${`translateY(${props.size / 4}${props.sizeUnit})`};
    }
    100% {
        transform: ${`translateY(${-props.size / 5}${props.sizeUnit})`};
    }
`;

const getRings = ({ countBalls: countRings, color, size, sizeUnit }) => {
    const rings = [];
    let keyValue = 0;
    for (let i = 0; i < countRings; i++) {
        rings.push(
            <Ring
                color={color}
                size={size}
                countRings={countRings}
                key={keyValue.toString()}
                index={i}
                sizeUnit={sizeUnit}
            />,
        );
        keyValue++;
    }
    return rings;
};

export const JellyfishSpinner = ({ size, color, loading, sizeUnit }) => {
    const countRings = 6;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getRings({ countBalls: countRings, color, size, sizeUnit })}
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

const Ring = styled.div`
    position: absolute;
    width: ${props => `${props.index * (props.size / props.countRings)}${props.sizeUnit}`};
    height: ${props => `${(props.index * (props.size / props.countRings)) / 2}${props.sizeUnit}`};
    border: 2px solid ${props => props.color};
    border-radius: 50%;
    background-color: transparent;
    animation: ${motion} 2.5s ease infinite;
    animation-delay: ${props => props.index * 100}ms;
`;

JellyfishSpinner.defaultProps = {
    loading: true,
    size: 60,
    color: "#4b4c56",
    sizeUnit: "px",
};

JellyfishSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
