import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import { getEvents, getPopularFootballEvents } from '../utils/api';

const EventDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topEventsId, settopEventsId] = useState(null);
  const [topEvents, settopEvents] = useState([]);
  useEffect(() => {
    getPopularFootballEvents()
      .then((response) => settopEventsId(response.data.popular_event_ids))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const getEvent = async () => {
      if (topEventsId) {
        const promises = topEventsId.map((eventId) => {
          return getEvents(eventId)
            .then((response) => {
              if (response) {
                return response;
              }
            })
        });
        const registrations = await Promise.all(promises)
          .then((values) => values)
          .catch((error) => {
            console.log(error);
          });
        settopEvents(registrations);
        setIsLoading(false);
      }
    };
    getEvent();
  }, [topEventsId]);

  return (
    <div className="eventDisplay">
      <Header eventNum={topEvents} />
      <div className="container">
        <h1 className="text-center m-4">Top Events</h1>
        <div className="row">
          {!isLoading
            && topEvents.map((top) => (
              <div
                className="card text-white bg-dark m-2"
                style={{ width: '18rem' }}
                key={top.data.events[0].id}
              >
                <div className="card-header">{top.data.events[0].short_name}</div>
                <div className="card-body">
                  <p className="card-text">{top.data.events[0].name}</p>
                  <Link
                    to={`/eventresult/${top.data.events[0].id}`}
                    className="btn btn-outline-success my-2 my-sm-0"
                  >
                    See more details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
