const NextGame = () => {
    let currentSeason;

    const getCurrentSeason = async () => {
      try {
        //Get current season
        const response = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=6e37ff89ebcc4f2d869431d34911bf4d');
        if (!response.ok) {
          throw new Error('Network Response error.');
        }
        const data = await response.json();
        currentSeason = data;
      } catch (error) {
        //If there's an issue - just use the current year
        const currentDate = new Date();
        currentSeason = currentDate.getFullYear();
        console.error('Error fetching current season, using current year', error);
      }
    };
    
    //Get Current Season
    getCurrentSeason();

    return (
    <div className="flex justify-center w-450px">
    <div className="game-card bg-white p-6 rounded-lg shadow-lg border border-gray-300 text-center">
        <h2 className="text-2xl font-bold mb-4">Next Kansas City Game</h2>
        <p className="text-lg mb-2">vs Opponent Team</p>
        <p className="text-gray-700">Date and Time</p>
    </div>
    </div>
    )
}

export default NextGame