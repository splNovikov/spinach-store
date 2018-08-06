import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import { withStateHandlers } from 'recompose';

import FlexCardView from './FlexCardView';

const initialState = {
  isExpanded: false
};
const handleToggle = (state) => () => ({ isExpanded: !state.isExpanded });

@withStateHandlers(
  initialState,
  { handleToggle }
)
class FlexCard extends PureComponent {

  static propTypes = {
    isExpanded: PropTypes.bool,
    item: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dateModified: PropTypes.string.isRequired,
      content: PropTypes.string
    }),
    handleToggle: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.memorizedContent = this.memoizeContent(props.item.content);
  }

  memoizeContent(content) {
    const sanitizedContent = sanitizeHtml(content);
    const trimContent = sanitizedContent.length >= 200;

    return {
      sanitizedContent,
      trimmedSanitizedContent: trimContent
        ? `${sanitizedContent.substring(0, 200)}...`
        : sanitizedContent,
      isTrimmed: trimContent
    };
  }

  swapItemContent(item, isExpanded) {
    return {
      ...item,
      content: isExpanded
        ? this.memorizedContent.sanitizedContent
        : this.memorizedContent.trimmedSanitizedContent,
      isTrimmed: this.memorizedContent.isTrimmed
    };
  }

  render() {
    const item = this.swapItemContent(this.props.item, this.props.isExpanded);

    return (
      <FlexCardView {...this.props} item={item}/>
    );
  }

}

export default FlexCard;
