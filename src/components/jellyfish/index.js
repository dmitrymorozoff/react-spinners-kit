import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        transform: ${`translateY(${-props.size / 5}px);`};
    }
    50% {
        transform: ${`translateY(${props.size / 4}px)`};
    }
    100% {
        transform: ${`translateY(${-props.size / 5}px)`};
    }
`;

const getRings = ({ countBalls: countRings, color, size }) => {
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
            />,
        );
        keyValue++;
    }
    return rings;
};

export const JellyfishSpinner = ({ size, color, loading }) => {
    const countRings = 6;
    return (
        loading && (
            <Wrapper size={size}>
                {getRings({ countBalls: countRings, color, size })}
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

const Ring = styled.div`
    position: absolute;
    width: ${props => props.index * (props.size / props.countRings)}px;
    height: ${props => (props.index * (props.size / props.countRings)) / 2}px;
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
};

JellyfishSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
