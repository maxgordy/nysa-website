const events = [
    {
        id: "collaging-city-0123",
        title: "Mapping the City",
        date: "26.01.23",
        time: "18:00",
        location: "Finlay's Apartment, NYC",
        description: "We will be drawing and collaging the city from memory - study your maps folks.",
        signup_url: "https://forms.gle/4z1DVyTF9hhmoz449",
        calendar: {
            start: "20260123T180000",
            end: "20260123T200000",
            timezone: "America/New_York"
        }
    }
];

function googleCalendarLink(event) {
    const base = "https://www.google.com/calendar/render?action=TEMPLATE";

    const params = new URLSearchParams({
        text: event.title,
        dates: `${event.calendar.start}/${event.calendar.end}`,
        details: event.description,
        location: event.location,
        ctz: event.calendar.timezone
    });

    return `${base}&${params.toString()}`;
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("events-container");
    if (!container) return;

    events.forEach(event => {
        const div = document.createElement("div");
        div.className = "event-card";

        div.innerHTML = `
        <div class="event-image">
    <img src="images/nysalogo.sq.1.png" alt="NYSA Event">
  </div>

  <div class="event-content">
    <h3>${event.title}</h3>
      <p class="event-meta">
        ${event.date} · ${event.time}<br>
        ${event.location}
      </p>
      <p>${event.description}</p>
      <div class="event-actions">
        <a href="${event.signup_url}" target="_blank">RSVP / get updates</a>
        <a href="${googleCalendarLink(event)}" target="_blank">
          Add to Google Calendar
        </a>
      </div>
    `;

        container.appendChild(div);
    });
});
