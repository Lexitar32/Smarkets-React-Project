import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.smarkets.com/v3',
  timeout: 80000,
});

export const getEvents = async (eventId) => {
  try {
    return await axios.get(`events/${eventId}`);
  } catch (err) {
    return err;
  }
};

export const getPopularFootballEvents = async () => {
  try {
    return await axios.get('/popular/event_ids/sport/football/');
  } catch (err) {
    return err;
  }
};
