import { configureStore } from '@reduxjs/toolkit';

import reducer from './rockets';

export default () => configureStore({ reducer });
