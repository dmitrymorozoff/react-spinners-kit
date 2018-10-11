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

export const CircleSpinner = ({ size, color, loading }) => {
    return loading && <Wrapper size={size} color={color} />;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: ${props => props.size / 5}px solid ${props => props.color};
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 0.75s linear infinite;
`;

CircleSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
};

CircleSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
