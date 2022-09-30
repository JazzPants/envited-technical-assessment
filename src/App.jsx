import CreateEvent from "./components/createEvent/createEvent";
import EventDetails from "./components/eventDetails/eventDetails";
import Landing from "./components/landing/landing";

const App = () => {
  return (
    <>
      <Landing />
      <CreateEvent />
      <EventDetails />
    </>
  );
};

export default App;
