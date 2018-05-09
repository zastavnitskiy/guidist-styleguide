import React from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import "./style.css";

export default class Button extends React.Component {

    static propTypes = {
        'buiVariant': PropTypes.oneOf(['primary', 'secondary']),
        'buiSize': PropTypes.oneOf(['large', 'wide'])
    }

    static defaultProps = {
        'buiVariant': 'primary'
    }

    render() {
        const {buiVariant, buiSize} = this.props;

        const className = classnames({
            'bui-button': true,
            [`bui-button--${buiVariant}`]: Boolean(buiVariant),
            [`bui-button--${buiSize}`]: Boolean(buiSize)
        })

        return (
            <button className={className} type="button">
              <span className="bui-button__text">{this.props.children}</span>
            </button>
          )
    }
};
