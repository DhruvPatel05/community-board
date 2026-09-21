import "./App.css";
import Card from "./components/Card";

import library from "./assets/Library.png";
import gym from "./assets/Gym.png";
import campus from "./assets/Campus.png";
import hero from "./assets/hero.png";

function App() {
  return (
    <div className="App">
      <h1>ASU Student Resources</h1>
      <h2>Your guide to helpful resources at Arizona State University</h2>
     <div className="card-container">
 <Card
image={library}
title="Hayden Library"
description="Find books, study rooms, and research support."
link="https://lib.asu.edu/"
/>

<Card
image={gym}
title="Sun Devil Fitness"
description="Gym, fitness classes, and recreation."
link="https://fitness.asu.edu/"
/>

<Card
image={campus}
title="Career Services"
description="Resume reviews and career coaching."
link="https://career.asu.edu/"
/>

<Card
image={hero}
title="Handshake"
description="Find internships and job opportunities."
link="https://asu.joinhandshake.com/"
/>
    </div>
    </div>
  );
}

export default App;