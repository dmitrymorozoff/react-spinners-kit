import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const CircleSpinner = ({ size, color, loading, sizeUnit }) => {
    const className = "circle-spinner";

    return (
        loading && (
            <div
                className={className}
                style={{
                    "--size": `${size}${sizeUnit}`,
                    "--color": `${color}`,
                }}
            />
        )
    );
};

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
