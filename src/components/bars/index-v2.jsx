import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const getBars = countBars => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(<div className={`bar-${i}`} key={i.toString()} />);
    }
    return bars;
};

export const BarsSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = 5;
    const className = "bars-spinner";
    return (
        loading && (
            <div
                className={className}
                style={{
                    "--size": `${size}${sizeUnit}`,
                    "--color": `${color}`,
                }}
            >
                {getBars(countBars)}
            </div>
        )
    );
};

BarsSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#00ff89",
    sizeUnit: "px",
};

BarsSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
