import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const TrianglesSpinner = ({ size, color }) => {
    const center = size / 2;
    return (
        <StyledSpinnerWrapper
            width={`${size}px`}
            height={`${size}px`}
            size={size}
            color={color}
            viewBox={`0 0 ${size} ${size}`}
        >
            <g>
                <polygon points="0 50,50 50,25 0" />
            </g>
        </StyledSpinnerWrapper>
    );
};

const StyledSpinnerWrapper = styled.svg`
    /* animation: rotate 2s linear infinite; */
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    & .circle {
        stroke: ${props => props.color};
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, ${props => props.size * 3};
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, ${props => props.size * 3};
            stroke-dashoffset: -25;
        }
        100% {
            stroke-dasharray: 50, ${props => props.size * 3};
            stroke-dashoffset: -${props => props.size * 3 - props.size / 2};
        }
    }
`;

TrianglesSpinner.defaultProps = {
    size: 50,
    color: "#ada1fb",
};

TrianglesSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
