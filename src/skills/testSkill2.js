'use strict';

export default {
  skillName: 'dog',
  invocationName: 'dog',
  intents: [
    {
      intentName: 'dogPrediction',
      slots: {
        date: 'AMAZON.DATE'
      },
      utterances: [
        '{-|date}'
      ],
      response: (request, response) => {
        const date = request.slot('date');
        response.say(date);
      }
    }
  ]
};