import React from "react";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import { eventsData } from "../static/data"; // import static events

const EventsPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      {false ? ( // change this to your real isLoading if needed
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {eventsData.map((event) => (
            <EventCard key={event._id} active={true} data={event} />
          ))}
        </div>
      )}
    </>
  );
};

export default EventsPage;
