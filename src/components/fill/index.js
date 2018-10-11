import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const fill = keyframes`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`;

export const FillSpinner = ({ size, color, loading }) => {
    return (
        loading && (
            <Wrapper size={size} color={color}>
                <Plane color={color} size={size} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: ${props => props.size / 8}px solid ${props => props.color};
    animation: ${rotate} 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`;

const Plane = styled.div`
    width: 100%;
    background-color: ${props => props.color};
    animation: ${fill} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`;

FillSpinner.defaultProps = {
    loading: true,
    size: 20,
    color: "#686769",
};

FillSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
