import React from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';


import './toast.scss';

const Toast = (props) => {
  return (
    <ReduxToastr {...props} className='toast'/>
  );
};

Toast.defaultProps = {
  timeOut: 10000,
  newestOnTop: false,
  position: 'bottom-right',
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut',
  progressBar: false
  // removeOnHover: false // is not working here
};

Toast.propTypes = {
  timeOut: PropTypes.number,
  newestOnTop: PropTypes.bool,
  position: PropTypes.string,
  transitionIn: PropTypes.string,
  transitionOut: PropTypes.string,
  progressBar: PropTypes.bool
};

export default Toast;
