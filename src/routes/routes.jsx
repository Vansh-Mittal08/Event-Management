// src/routes/routes.jsx

import EventList from "../pages/EventList/EventList.jsx";
import EventDetails from "../pages/EventDetails/EventDetails.jsx";
import FilterEvents from "../pages/FilterEvents/FilterEvents.jsx";
import { createRoutesFromElements, Route } from 'react-router-dom';

// Define routes
const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<EventList />} />
    <Route path="/events/:id" element={<EventDetails />} />
    <Route path="/find-events" element={<FilterEvents />} />
  </>
);

export { routes };
