import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import SectionBanner from "../components/main/SectionBanner";
const localizer = momentLocalizer(moment);
function Calender() {
  const [events, setEvents] = useState([
    {
      title: 'Winter Holidays',
      start: new Date(2024, 0, 28, 10, 0),
      end: new Date(2024, 0, 28, 12, 0),
    },
    {
      title: 'Summer Holidays',
      start: new Date(2024, 0, 2, 5, 0),
      end: new Date(2024, 0, 30, 1, 0),
    },
    {
      title: 'Health day',
      start: new Date(2024, 0, 3, 5, 0),
      end: new Date(2024, 0, 5, 2, 0),
    },
    // Add more events as needed
  ]);

  return (
    <>
      <Header />
  

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>CALENDAR</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="editor-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">

                  <div>
  <Calendar
     localizer={localizer}
     events={events}
     startAccessor="start"
     endAccessor="end"
     style={{ height: 700 }}
   />
 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Calender
