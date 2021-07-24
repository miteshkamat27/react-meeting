import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/home/dashboard">Dashboard</Link>
      <Link to="/home/meeting">Schedule Meeting</Link>
    </section>
  </nav>
);
