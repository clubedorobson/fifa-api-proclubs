const api = require('./api');

const platformType = platform => api.newPlatformType(platform);
const getSeasonLeaderboard = () => api.get(`seasonRankLeaderboard`);
const getOverallLeaderboard = () => api.get(`clubRankLeaderboard`);
const getfifa21SeasonLeaderboard = () => api.getfifa21(`seasonRankLeaderboard`);
const getfifa21OverallLeaderboard = () => api.getfifa21(`clubRankLeaderboard`);


module.exports = {
    platformType,
    getOverallLeaderboard,
    getSeasonLeaderboard,
    getfifa21OverallLeaderboard,
    getfifa21SeasonLeaderboard
};
