import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const BallSpinner = ({ size, color, loading, sizeUnit }) => {
    const className = "ball-spinner";
    return (
        loading && (
            <div
                className={className}
                style={{
                    "--size": `${size}${sizeUnit}`,
                    "--color": `${color}`,
                }}
            >
                <div className="ball" />
            </div>
        )
    );
};

BallSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#00ff89",
    sizeUnit: "px",
};

BallSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
