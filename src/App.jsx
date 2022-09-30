import CreateEvent from "./components/createEvent/createEvent";
import EventDetails from "./components/eventDetails/eventDetails";
import Landing from "./components/landing/landing";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="create" element={<CreateEvent />} />
        <Route path="event" element={<EventDetails />} />
      </Routes>
    </>
  );
};

export default App;
