import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './FeedBack.module';

const options = ['good', 'neutral', 'bad'];

export const Feedback = ({ onLeaveFeedback }) => (
  <FeedbackWrapper>
    {options.map((option, index) => (
      <FeedbackButton
        key={index}
        name={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackWrapper>
);

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
