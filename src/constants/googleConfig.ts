import paths from './apiPaths';
import apiKeys from './apiKeys';

const { googleScope, googleDiscoveryDocs } = paths;
const { googleCliendId, googleKey } = apiKeys;

const config = {
  clientId: googleCliendId,
  apiKey: googleKey,
  scope: googleScope,
  discoveryDocs: googleDiscoveryDocs,
};

export default config;
