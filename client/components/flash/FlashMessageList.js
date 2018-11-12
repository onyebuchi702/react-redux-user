import React from 'react';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import deleteFlashMessage from '../../actions/flashMessages'

class FlashMessageList extends React.Component {
  render () {
    console.log(this.props.messages, '9909090');
    const messages = this.props.messages.map(message =>
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}/>
    );
    return (
      <div>
        {messages}
      </div>
    );
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);
