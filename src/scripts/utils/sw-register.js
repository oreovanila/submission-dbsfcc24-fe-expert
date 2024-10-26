import { Workbox } from 'workbox-window';
import AlertHelper from './alert-helper';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    AlertHelper.showResponse('Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    AlertHelper.showResponse(`Failed to register service worker, ${error}`);
  }
};

export default swRegister;
