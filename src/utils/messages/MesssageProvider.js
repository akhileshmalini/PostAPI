import { find } from 'lodash';
import Messages from './Messages';

const isKeyExist = (key) => {
  return Messages.KEYS && key ? key in Messages.KEYS : false;
};

const messageObjectByKey = (key) => {
  if (key) {
    const message = find(Messages.DATA, { key });
    return message;
  }
  return null;
};

const messageByKey = (key) => {
  if (isKeyExist(key)) {
    const { value } = messageObjectByKey(key);
    return value || '';
  }
  return '';
};

const statusByKey = (key) => {
  if (isKeyExist(key)) {
    const { status } = messageObjectByKey(key);
    return status || '';
  }
  return 500;
};

const MesssageProvider = {
  messageByKey,
  statusByKey,
};

export default MesssageProvider;
