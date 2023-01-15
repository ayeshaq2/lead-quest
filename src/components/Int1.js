import React from 'react'
import ReactDOM from 'react-dom'
import {Buffer} from 'buffer';

export function generateResult(){
  const API_KEY = 'nWTE0Y96tMf1zqDYfntwZs1IzibO1YA7jpmNPReI'; //replace with your own api key here 
  const cohere = require('cohere-ai'); 
  cohere.init(API_KEY);
  (async () => {
    const response = await cohere.generate({
      model: 'xlarge',
      prompt: 'You will be evaluating the quality of an answer to a question. Write a grade in the end. Only write what is necessary for the evaluation part. Write like a teacher. Here is an example:\n--\nQuestion: A small technology startup is looking for a business consultant to help them with their growth strategy. They need assistance with creating an effective marketing plan, optimizing customer acquisition, developing a pricing strategy, and creating a customer loyalty program. The consultant must have a strong background in the technology industry and be familiar with CRM software and analytics. They are expecting the consultant to deliver a comprehensive growth strategy and plan within three months that will result in increased customer acquisition, customer engagement, and revenue.\n\nAnswer: CGI is well-positioned to help this technology startup reach their goals with our wide range of services and expertise. We have a proven track record in the industry, with experience optimizing customer acquisition strategies, developing pricing plans that align with market trends and desired objectives, creating innovative loyalty programs for customers so they feel valued as part of your business family, and designing comprehensive marketing plans tailored specifically to each client\'s needs. Our team would work collaboratively alongside yours throughout the entire process from start to finish; providing real time feedback on progress while ensuring all metrics are met within three months – resulting in increased revenue through improved customer engagement levels..\n\n\nEvaluation: 1. Does it include an in-depth analysis? Yes 2. Does it provide details relating to the problem of how they may solve it and what measures they will take to solve the problem?Yes 3.Does it align with any of CGI\'s core values: Partnership & Quality; Objectivity & Criteria Intrapreneurship & Sharing; Respect; Financial Strength; Corporate Responsibility ? yes . The answer meets the criteria given in that it includes an in-depth analysis, provides details relating to problem solving measures, and aligns with CGI\'s core values of Intrapreneurship & Sharing (working collaboratively alongside the technology startup’s team), Respect (real time feedback on progress) as well as Financial Strength and Corporate Responsibility. The only critique is that more detail could be provided about how this strategy would lead specifically to increased customer acquisition levels, engagement rates and revenue. Grade : A\n___\nQuestion: A small technology startup is looking for a business consultant to help them with their growth strategy. They need assistance with creating an effective marketing plan, optimizing customer acquisition, developing a pricing strategy, and creating a customer loyalty program. The consultant must have a strong background in the technology industry and be familiar with CRM software and analytics. They are expecting the consultant to deliver a comprehensive growth strategy and plan within three months that will result in increased customer acquisition, customer engagement, and revenue.\n\nAnswer: The consultant will simply create a marketing plan and pricing strategy with customer loyalty program within three months. They will not do any in-depth analysis or provide details on how they may solve the problem, nor does this align to CGI\'s core values of partnership & quality; objectivity & criteria intrapreneurship & sharing; respect; financial strength; corporate responsibility (contributing to continuous improvement of economic, social and environmental well-being). \n\n\nEvaluation:  1. Does it include an in-depth analysis? No 2. Does it provide details relating to the problem of how they may solve it and what measures they will take to solve the problem?No  3.Does it align with any of CGI\'s core values: Partnership & Quality; Objectivity & Criteria Intrapreneurship & Sharing; Respect; Financial Strength; Corporate Responsibility ? No . This answer does not meet the criteria as it does not include an in-depth analysis, provide details relating to the problem of how they may solve it and what measures they will take to solve the problem, nor align with any of CGI\'s core values. Grade: C-\n---\nQuestion: You have been assigned the task of developing a new web-based application for a client. However, the client is unhappy with the progress of the project and has asked for a meeting to discuss the issues. Your task is to communicate the client\'s concerns and come up with a solution that meets their needs, while staying within the budget and timeline requirements. Specifically, you need to reduce the timeline by 25%, redesign the user interface, and stay within the initial budget. You must present a convincing solution to the client during the meeting to make them feel that their concerns have been taken into consideration. \n\nAnswer: I understand that the client is unhappy with progress on the project and would like to discuss it. My solution would be to reduce timeline by 25%, redesign user interface, and stay within initial budget. This should address their concerns while still meeting our requirements for this project.\n\nEvaluation:\n\n=',
      max_tokens: 250,
      temperature: 0,
      k: 0,
      p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ["--", "=", "Question:"],
      return_likelihoods: 'NONE'
    });
    console.log(`Prediction: ${response.body.generations[0].text}`);
  })();
}

export default function Int(){

    return (

        <div className='int--body'>
            <section className='int--section'><h5 className='int--question' > You have been assigned the task of developing a new web-based application for a client. However, the client is unhappy with the progress of the project and has asked for a meeting to discuss the issues. Your task is to communicate the client's concerns and come up with a solution that meets their needs, while staying within the budget and timeline requirements. Specifically, you need to reduce the timeline by 25%, redesign the user interface, and stay within the initial budget. You must present a convincing solution to the client during the meeting to make them feel that their concerns have been taken into consideration. </h5>
            
            <input className='text-input' type="text" id="name" name="name" minlength="4"  size="10"></input>
            <button className='start--btn' onClick={generateResult}> Start 
            
            </button></section>
            
        </div>



    )
}