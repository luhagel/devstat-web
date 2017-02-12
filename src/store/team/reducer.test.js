import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  teams: [
    { name: 'TestTeam1' },
    { name: 'TestTeam2' },
    { name: 'TestTeam3' }
  ]
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles TEAM_ADD_SUCCESS', () => {
  const action = { type: actions.TEAM_ADD_SUCCESS, team: { name: 'AddedTeam' } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, teams: [{ name: 'AddedTeam' }] })
  expect(reducer(altState, action)).toEqual({ ...altState, teams: [...altState.teams, { name: 'AddedTeam' }] })
})

it('handles TEAM_INDEX_SUCCESS', () => {
  const action = { type: actions.TEAM_INDEX_SUCCESS, teams: [{ name: 'IndexTeam1' }] }
  expect(reducer(initialState, action)).toEqual({ ...initialState, teams: [{ name: 'IndexTeam1' }] })
})

it('handles TEAM_UPDATE_SUCCESS', () => {
  const action = { type: actions.TEAM_UPDATE_SUCCESS,
    teams: [
        { name: 'TestTeam1' },
        { name: 'TestTeam2' },
        { name: 'TestTeam4' }
    ] }
  expect(reducer(initialState, action)).toEqual({ ...initialState,
    teams: [{ name: 'TestTeam1' },
            { name: 'TestTeam2' },
            { name: 'TestTeam4' }]
  })
  expect(reducer(altState, action)).toEqual({ ...altState,
    teams: [
    { name: 'TestTeam1' },
    { name: 'TestTeam2' },
    { name: 'TestTeam4' }
    ] })
})

it('handles TEAM_DELETE_SUCCESS', () => {
  const action = { type: actions.TEAM_DELETE_SUCCESS,
    teams: [{ name: 'TestTeam1' },
            { name: 'TestTeam2' }] }
  expect(reducer(initialState, action)).toEqual({ ...initialState,
    teams: [{ name: 'TestTeam1' },
            { name: 'TestTeam2' }]
  })
  expect(reducer(altState, action)).toEqual({ ...altState,
    teams: [{ name: 'TestTeam1' },
            { name: 'TestTeam2' }] })
})
