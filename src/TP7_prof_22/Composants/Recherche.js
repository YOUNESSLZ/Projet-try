import { useState } from "react";

export default function Recherche({ chercher }) {
  const [terme, setTerme] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    chercher(terme);
  }
  return (
    <div className="my-3 w-50 mx-auto">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Chercher un tutoriel"
          onChange={(e) => setTerme(e.target.value)}
        />
      </form>
    </div>
  );
}
