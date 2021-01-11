const api = require('./api');

function * values (obj) {
  for (let prop of Object.keys(obj)) { yield obj[prop] }
}

const platformType = platform => api.newPlatformType(platform);

const getfifa21ClubIdByName = async query => {
  const res = await api.getfifa21(`clubsComplete/${query}`);
  return res.clubId
};

const getfifa21ClubMembers = async clubId => {
  const res = await api.getfifa21(`clubs/${clubId}/members`);
  return Array.from(values(res))
};

const getfifa21ClubMemberStats = clubId => api.get(`clubs/${clubId}/membersComplete`);

const getfifa21ClubSeasonRank = clubId => api.get(`clubs/${clubId}/seasonRank`);

const getfifa21ClubSeasonStats = clubId => api.get(`clubs/${clubId}/seasonalStats`);

const getfifa21ClubStats = clubId => api.get(`clubs/${clubId}/stats`);

const getfifa21ClubMatchHistory = clubId => api.get(`clubs/${clubId}/matches`);

const getfifa21ClubInfo = clubId => api.get(`clubs/${clubId}/info`);

const getClubIdByName = async query => {
  const res = await api.getParam(`clubs/search`,`&clubName=${query}&maxResultCount=20&offset=0`);
  return res.clubId
};

const getClubMembers = async clubId => {
  const res = await api.getParam(`members/stats`,`&clubIds=${clubId}`);
  return Array.from(values(res))
};

const getClubMemberStats = clubId => api.getParam(`members/career/stats`,`&clubIds=${clubId}`);

const getClubSeasonRank = clubId => api.getParam(`clubs/seasonRank`,`&clubIds=${clubId}`);

const getClubSeasonStats = clubId => api.getParam(`clubs/seasonalStats`,`&clubIds=${clubId}`);

const getClubStats = clubId => api.getParam(`clubs/stats`,`&clubIds=${clubId}&matchType=gameType9&maxResultCount=5`);

const getClubMatchHistory = clubId => api.getParam(`clubs/matches`,`&clubIds=${clubId}&`);

const getClubInfo = clubId => api.getParam(`clubs/info`,`&clubIds=${clubId}`);

module.exports = {
  platformType,
  getClubIdByName,
  getClubMembers,
  getClubMemberStats,
  getClubSeasonRank,
  getClubSeasonStats,
  getClubStats,
  getClubMatchHistory,
  getClubInfo,
  getfifa21ClubIdByName,
  getfifa21ClubMembers,
  getfifa21ClubMemberStats,
  getfifa21ClubSeasonRank,
  getfifa21ClubSeasonStats,
  getfifa21ClubStats,
  getfifa21ClubMatchHistory,
  getfifa21ClubInfo,
};
