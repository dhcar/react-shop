import React, { PropTypes, Component } from 'react';
import styles from './TextBox.scss';
import withStyles from '../../../common/decorators/withStyles';

class TextBox extends Component {

  static propTypes = {
    maxLines: PropTypes.number
  };

  static defaultProps = {
    maxLines: 1
  };

  render() {
    return (
      <div className="TextBox">
        {this.props.maxLines > 1 ?
          <textarea {...this.props} className="TextBox-input" ref="input" key="input" rows={this.props.maxLines} /> :
          <input {...this.props} className="TextBox-input" ref="input" key="input" />}
      </div>
    );
  }

}

export default TextBox;
