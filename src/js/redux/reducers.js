import initialState from './initialState';

async function fetchImage() {
    const resp = await fetch('https://imagesapi.osora.ru/');
    const json = await resp.json();
    console.log(json);
}

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO: {
        const { content } = action.payload;
        console.log(content);
        return {
        //   ...state,
        //   allIds: [...state.allIds, id],
        //   byIds: {
        //     ...state.byIds,
        //     [id]: {
        //       content,
        //       completed: false
        //     }
        //   }
        };
      }
      default:
        return state;
    }
  }