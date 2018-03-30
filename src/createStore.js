export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  // call dispatch and pass in the action {type: '@@INIT'}
  dispatch({ type: '@@INIT' });

  return {
    getState,
    dispatch
  };
}

function render() {
  const container = document.getElementById('container');
}
