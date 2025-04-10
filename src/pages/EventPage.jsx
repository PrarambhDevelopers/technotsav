import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventRulesAndRegulations from '../components/Event/EventRulesAndRegulations';
import EventRegisteration from '../components/Event/EventRegisteration';
import EventOther from '../components/Event/EventOther';
import EventSponsers from '../components/Event/EventSponsers';
import EventFAQ from '../components/Event/EventFAQ';
import eventsDataPool from './eventsData.json';

const EventPage = ({ department }) => {
  const { eventname } = useParams(); // assuming you use :eventname in route
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const formattedName = eventname.replace(/-/g, ' ').toLowerCase();
  
    const foundEvent = eventsDataPool.find(
      (event) =>
        event.hostDepartment.toLowerCase() === department.toLowerCase() &&
        event.eventName.toLowerCase() === formattedName
    );
  
    console.log('🔍 Found Event:', foundEvent); // clearer logging
    setEventData(foundEvent || null);
  }, [department, eventname]);

  console.log(eventData);
  if (!eventData) {
    return <div className="text-white p-8">Loading or Event not found...</div>;
  }

  return (
    <div className="text-black p-8">
      <h1 className="text-3xl font-bold">{department.toUpperCase()} Department</h1>
      <h2 className="text-2xl mt-4">Event Name: {eventData?.eventName || 'N/A'}</h2>
      <p className="mt-4 text-black">{eventData.eventDescription}</p>

      <EventHero />

      {eventsData[0].rulesAndRegulations.length > 0 && <EventRulesAndRegulations rules={eventData.rulesAndRegulations} />}
      <EventRegisteration {...eventData} />
        <EventOther {...eventsData[0].others} />
        <EventSponsers sponsors={eventsData[0].sponsors} />
        <EventFAQ faqs={eventsData[0].faqs} />
    </div>
  );
};

const EventHero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white p-8 rounded-xl my-6 shadow-lg">
      <h1 className="text-4xl font-bold">Welcome to the Event</h1>
      <p className="mt-4">Explore everything about this event in detail.</p>
    </div>
  );
};

export default EventPage;
