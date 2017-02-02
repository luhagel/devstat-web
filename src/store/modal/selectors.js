export const initialState = {
  contentId: 0 // TODO: implement in a cleaner way, will bug out with multiple modals
}

export const isOpen = (state = initialState, name) => !!state[name]
export const getContentId = (state = initialState) => state.contentId
