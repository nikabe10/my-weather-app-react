import React from "react";

export default function WeatherSearch() {
  return (
    <form>
      <input type="search" placeholder="Type a city..." />
      <input type="submit" value="Search" />
    </form>
  );
}
