import React from "react";
import Radium from 'radium';

class Footer extends React.Component {
    render() {
        return (
            <footer className="Site-footer">
                <div className="Footer">
                </div>
            </footer>
        );
  }
}

var styles = {
    base: {
        padding: "1.5rem 1.5rem",
        background: "#404040",
        color: "#999",
        "text-align": "center"
    }
};

export default Radium(Footer);
