import React from "react";
import { createRoot } from "react-dom/client";
import LikeButton from "./src/LikeButton";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <main>
      <LikeButton />
    </main>
  </React.StrictMode>,
);
