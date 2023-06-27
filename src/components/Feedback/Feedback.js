import PropTypes from 'prop-types';

import css from './feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <h1 className={css.feedback_title}>Please leave your feedback</h1>
      <ul className={css.feedback_btns}>
        {options.map(option => (
          <li className={css.good} key={option}>
            <button onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
