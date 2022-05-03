import React from 'react'
import FeedbackItem from './FeedbackItem'
function FeedbackLIst({feedback}) {

         if(!feedback || feedback.length ==0 ){
             return <p>No feedback</p>
         }
    return (
    <div className='feedback-list'>

        {feedback.map((item,index)=>(
            <FeedbackItem key={item.index} item ={item}/>
    ))}
        
        </div>
  )
}

export default FeedbackLIst