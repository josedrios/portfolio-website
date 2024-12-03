import * as React from 'react'
import Info from './info.json'

function FAQ() {
    return (
        <div id='faq-section' className='content-item'>
            <h1 className='content-item-header'>FAQ</h1>
            <div id='faq-container'>
              {Info.faqContent.map((faqContent, index) => (
                <div className="faq-pair" key={index}>
                    <h1 className='question-header'>{faqContent.question}</h1>
                    <div className='answer-header'>{faqContent.answer}</div>
                </div>
              ))}
            </div>
        </div>
    )
}

export default FAQ