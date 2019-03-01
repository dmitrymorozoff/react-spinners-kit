import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const firstPulse = props => keyframes`
    0% { 
        box-shadow: inset 0 0 0 ${props.size / 10}${props.sizeUnit} ${props.color};
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 ${props.color};
        opacity: 0;
    }
`;

const secondPulse = props => keyframes`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 ${props.color};
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 ${props.size / 10}${props.sizeUnit} ${props.color};
        opacity: 1;
    }
`;

export const RingSpinner = ({ size, color, loading, sizeUnit }) => {
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                <Circle size={size} color={color} sizeUnit={sizeUnit} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
`;

const Circle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: ${props => `inset 0 0 0 ${props.size / 10}${props.sizeUnit} ${props.color}`};
        animation-name: ${firstPulse};
    }
    &:after {
        box-shadow: 0 0 0 0 ${props => props.color};
        animation-name: ${secondPulse};
    }
`;

RingSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#00ff89",
    sizeUnit: "px",
};

RingSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
