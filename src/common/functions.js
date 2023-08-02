const successAction = (actionType) => `${actionType}_SUCCESS`;
const failedAction = (actionType) => `${actionType}_FAILED`;
const pendingAction = (actionType) => `${actionType}_PENDING`;

export { successAction, failedAction, pendingAction };