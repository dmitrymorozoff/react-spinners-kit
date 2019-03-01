import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`;

export const CubeSpinner = ({ size, backColor, frontColor, loading, sizeUnit }) => {
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                <CubeWrapper x={0} y={0} sizeUnit={sizeUnit}>
                    <Cube size={size} sizeUnit={sizeUnit}>
                        <Side front={true} size={size} color={frontColor} sizeUnit={sizeUnit} />
                        <Side back={true} size={size} color={frontColor} sizeUnit={sizeUnit} />
                        <Side bottom={true} size={size} color={backColor} sizeUnit={sizeUnit} />
                        <Side top={true} size={size} color={backColor} sizeUnit={sizeUnit} />
                        <Side left={true} size={size} color={backColor} sizeUnit={sizeUnit} />
                        <Side right={true} size={size} color={backColor} sizeUnit={sizeUnit} />
                    </Cube>
                </CubeWrapper>
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
    perspective: ${props => `${props.size * 4}${props.sizeUnit}`};
`;

const CubeWrapper = styled.div`
    sposition: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: inherit;
    height: inherit;
`;

const Cube = styled.div`
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    transform-style: preserve-3d;
    animation: ${rotate} 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

const rotateXCube = props => {
    if (props.top) {
        return 90;
    }
    if (props.bottom) {
        return -90;
    }
    return 0;
};

const rotateYCube = props => {
    if (props.left) {
        return 90;
    }
    if (props.right) {
        return -90;
    }
    if (props.back) {
        return 180;
    }
    return 0;
};

const Side = styled.div`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${props => props.color};
    transform: rotateX(${props => rotateXCube(props)}deg) rotateY(${props => rotateYCube(props)}deg)
        translateZ(${props => `${props.size / 2}${props.sizeUnit}`});
`;

CubeSpinner.defaultProps = {
    loading: true,
    size: 25,
    frontColor: "#00ff89",
    backColor: "#4b4c56",
    sizeUnit: "px",
};

CubeSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
