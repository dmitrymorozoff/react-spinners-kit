import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const CircleSpinner = ({ size, color, loading, sizeUnit }) => {
    return loading && <Wrapper size={size} color={color} sizeUnit={sizeUnit} />;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    border: ${props => `${props.size / 5}${props.sizeUnit}`} solid ${props => props.color};
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 0.75s linear infinite;
`;

CircleSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
    sizeUnit: "px",
};

CircleSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
