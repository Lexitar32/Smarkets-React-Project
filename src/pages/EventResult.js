import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getEvents } from '../utils/api';
import '../App.css';

const EventResult = ({ match }) => {
  const {
    params: { eventId },
  } = match;
  const [eventDetails, seteventDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getEvents(eventId)
      .then((response) => {
        seteventDetails(response.data.events);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [eventId]);

  const prevPage = () => {
    history.push('/');
  };

  return (
    <>
      <div className="jumbotron bg-dark">
        <span>
          <button attribute="" className="btn btn-danger" onClick={prevPage}>
            Go Back
          </button>
        </span>
        <h1 className="display-4 text-center eventTitle">Top Event Details</h1>
      </div>
      <div className="eventDetails container text-center">
        {!isLoading
          && eventDetails.map((eventDetail) => (
            <div key={eventDetail.id}>
              <p>
                Name of Event:
                {eventDetail.name}
              </p>
              {' '}
              <hr />
              <p>
                Event Type:
                {eventDetail.type}
              </p>
              {' '}
              <hr />
              <p>
                Start Date:
                {eventDetail.start_date}
              </p>
              {' '}
              <hr />
              <p>
                State of Event:
                {eventDetail.state}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default EventResult;
