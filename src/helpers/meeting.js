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

export const generateStep = (action, loading, question, stats, playerStepAnswers) => {
  return {
    action,
    loading,
    question,
    stats,
    playerStepAnswers
  }
}
