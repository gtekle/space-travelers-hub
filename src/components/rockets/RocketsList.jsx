import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../../store/rockets';
import Rocket from './Rocket';

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
            <Rocket key={rocket.id} rocket={rocket} />
          ))
        }
      </ul>
    </div>
  );
};

export default RocketsList;
