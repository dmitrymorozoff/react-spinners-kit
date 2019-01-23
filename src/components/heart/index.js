import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const resize = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`;

export const HeartSpinner = ({ size, color, loading, sizeUnit }) => {
    return loading && <Wrapper size={size} color={color} sizeUnit={sizeUnit} />;
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size - props.size / 10}${props.sizeUnit}`};
    animation: ${resize} 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: ${props => `${props.size / 20}${props.sizeUnit}`};
        left: ${props => `${props.size / 2}${props.sizeUnit}`};
        width: ${props => `${props.size / 2}${props.sizeUnit}`};
        height: ${props => `${props.size - props.size / 5}${props.sizeUnit}`};
        background-color: ${props => props.color};
        border-radius: ${props => `${props.size / 2}${props.sizeUnit}`}
            ${props => `${props.size / 2}${props.sizeUnit}`} 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`;

HeartSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
    sizeUnit: "px",
};

HeartSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
