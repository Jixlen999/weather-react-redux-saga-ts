import React from 'react';

function EventItem({ event }: { event: any }) {
  const { summary, start } = event;
  return (
    <div>
      <p>{summary}</p>
      <p>{start.datetime}</p>
    </div>
  );
}

export default EventItem;
