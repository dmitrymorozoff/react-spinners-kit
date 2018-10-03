import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const resize = props => keyframes`
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

export const HeartSpinner = ({ size, color }) => {
    return <Wrapper size={size} color={color} />;
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => props.size}px;
    height: ${props => props.size - props.size / 10}px;
    animation: ${resize} 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: ${props => props.size / 20}px;
        left: ${props => props.size / 2}px;
        width: ${props => props.size / 2}px;
        height: ${props => props.size - props.size / 5}px;
        background-color: ${props => props.color};
        border-radius: ${props => props.size / 2}px ${props => props.size / 2}px
            0 0;
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
    size: 40,
    color: "#fff",
};

HeartSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
