import PropTypes from 'prop-types';
import { Button } from './FeedbackOption.styled';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (options.map(option => (
    <Button
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Button>
  )))
}

FeedbackOptions.propTypes ={
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}