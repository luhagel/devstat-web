import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ teams: [] })
})

test('getTeam', () => {
  expect(selectors.getTeams()).toEqual(selectors.initialState.teams)
  expect(selectors.getTeams(selectors.initialState)).toEqual(selectors.initialState.teams)
})
