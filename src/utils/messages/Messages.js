const KEYS = {
  ERROR_FETCHING_DATA: 'ERROR_FETCHING_DATA',
  DELETED_DATA_SUCCESS: 'DELETED_DATA_SUCCESS',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
};

const DATA = [
  {
    key: KEYS.ERROR_FETCHING_DATA,
    value: 'Error Fetching Data',
    status: 500,
  },
  {
    key: KEYS.DELETED_DATA_SUCCESS,
    value: 'Deleted Data Successfully',
    status: 200,
  },
  {
    key: KEYS.VALIDATION_ERROR,
    value: 'Validation Error',
    status: 400,
  },
];

const Messages = {
  KEYS,
  DATA,
};

export default Messages;
