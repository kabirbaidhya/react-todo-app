// Import Rollout SDK
import Rox from 'rox-browser';

// Create a Roxflag in the flags container class
export const flags = {
  enableTutorial: new Rox.Flag(),
  search: new Rox.Flag(),
  title: new Rox.Variant('Things to do', ['Things to do', 'Time ToDo', 'Get things done'])
};

export async function initRollout() {
  const API_HOST = "qa-api.rollout.io";

  const qaConfig = {
    API_HOST: API_HOST,
    CD_API_ENDPOINT: `https://${API_HOST}/device/get_configuration`,
    CD_S3_ENDPOINT: 'https://qa-conf.rollout.io/',
    SS_API_ENDPOINT: `https://${API_HOST}/device/update_state_store/`,
    SS_S3_ENDPOINT: 'https://qa-statestore.rollout.io/',
    CLIENT_DATA_CACHE_KEY: 'client_data',
    ANALYTICS_ENDPOINT: 'https://qaanalytic.rollout.io',
    NOTIFICATIONS_ENDPOINT: 'https://qa-push.rollout.io/sse'
  };


  const options = {
    configuration: qaConfig,
    // For development builds only, add this line on app startup
    devModeSecret: /* TODO - add dev mode secrect here */
  }

  // Register the flags with Rollout
  Rox.register('', flags);
  Rox.setCustomStringProperty('userId', () => window.location.href.replace(/.*?userId=/,''));

  // Setup the Rollout key
  await Rox.setup(/* TODO - add envinronment key here */, options);

  if (flags.enableTutorial.isEnabled()) {
    console.log('enableTutorial flag is true');
    // TODO:  Put your code here that needs to be gated
  }

}

