import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import './styles.css';

import {
  MultiViewCalendar,
  MultiViewCalendarProps,
} from '@progress/kendo-react-dateinputs';

const CustomCalendar = (props) => {
  return <MultiViewCalendar {...props} views={1} />;
};

const App = () => {
  return (
    <>
      <DatePicker placeholder="Choose a date..." />
      <DatePicker calendar={CustomCalendar} />
    </>
  );
};

const domNode = document.querySelector('my-app');
const root = createRoot(domNode);
root.render(<App />);
