import { app } from '@azure/functions'

app.eventHub('eventHubTrigger1', {
  connection: 'EventHubConnectionAppSetting',
  eventHubName: 'YourEventHubName',
  consumerGroup: '$Default',
  handler: (events, context) => {
    context.log('Event Hub trigger function processed messages.')
    events.forEach(event => {
      context.log(`Processed message: ${JSON.stringify(event)}`)
    })
  }
})
