import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({feedback}) => {

    //calcutate average

    let average = feedback.reduce((occ,cur)=>{
        return occ + cur.rating

    }, 0) / feedback.length
    average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating:{isNaN(average) ? 0:average}</h4>
    </div>
  )
}

FeedbackStats.PropTypes = {
    feedback:PropTypes.array.isRequired
}

export default FeedbackStats