import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <nav>
      <section>
        <Link to="/home/dashboard">Dashboard</Link>
        <Link to="/home/meeting">Schedule Meeting</Link>
      </section>
    </nav>
  );
};
