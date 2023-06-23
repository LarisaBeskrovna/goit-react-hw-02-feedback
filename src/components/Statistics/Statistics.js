import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import css from './statistics.module.css';

const Statistics = ({good, neutral, bad, percentage, total}) => {
    if(good > 0 || neutral > 0 || bad > 0) {
        return (
            <div className={css.statistics}>
                <h2 className={css.statistics_title}>Statistics</h2>
                <ul className={css.rank}>
                    <li className={css.rank_good}>Good: {good}</li>
                    <li className={css.rank_neutral}>Neutral: {neutral}</li>
                    <li className={css.rank_bad}>Bad: {bad}</li>
                </ul>
                <h2 className={css.total}>Total: {total}</h2>
                <h3 className={css.percent}>Positive feedback: {percentage}%</h3>
            </div>
        )
    } else {
        return <Notification />    
    }    
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default Statistics;