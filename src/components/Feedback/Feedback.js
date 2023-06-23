import PropTypes from 'prop-types';

import css from './feedback.module.css';

const Feedback = ({addGoodRank, addNeutralRank, addBadRank}) => {

    
 return (
    <div className={css.feedback}>
    <h1 className={css.feedback_title}>Please leave your feedback</h1>
    <ul className={css.feedback_btns}>
    <li className={css.good}>
    <button onClick={addGoodRank}>Good</button></li>
    <li className={css.neutral}>
    <button onClick={addNeutralRank}>Neutral</button></li>
    <li className={css.bad}>
    <button onClick={addBadRank}>Bad</button></li>
    </ul>
    </div>
    )
};

Feedback.propTypes = {
    addGoodRank: PropTypes.func.isRequired,
    addNeutralRank: PropTypes.func.isRequired,
    addBadRank: PropTypes.func.isRequired
};

export default Feedback;