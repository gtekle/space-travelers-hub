import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../../store/rockets';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state);
  useEffect(async () => {
    dispatch(fetchRockets());
    console.log(rockets);
  }, []);

  return (
    <div>
      <ul>
        {
          rockets.map((rocket) => (
            <div key={rocket.id}>
              <img src={rocket.rocketImage} alt="rocket" />
              <h2>{rocket.rocketName}</h2>
              <p>{rocket.description}</p>
            </div>
          ))
        }
      </ul>
    </div>
  );
};

export default RocketsList;
