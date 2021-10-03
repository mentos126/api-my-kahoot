export const meetingStatus = {
  INITIALIZED: 0,
  STARTED: 1,
  FINISHED: 2
}

export const playerInPlayers = (players, token) => {
  for (const p of players) {
    if (p._id === token) {
      return true
    }
  }

  return false
}

export const generateStep = (writer, to, message, action = false, player = null, players = null, resume = null, percent = 0, done = []) => {
  return { writer, to, message, action, percent, done, player, players, resume }
}
