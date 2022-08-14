import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      url: "https://i.ibb.co/XVcs5tB/Untitled-34.jpg",
      name: "fahim med amine",
    },
    {
      url: "https://www.investopedia.com/thmb/dKFyhSMosnpMkzF1MxY4fyvYYuM=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1036094130-cf8da629f9b44c81a0b1398311ac5787.jpg",
      name: "jeff bezoze",
    },
    {
      url: "https://www.investopedia.com/thmb/qqkSwvPma3IUVa82SVOydjHz_48=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-696695914-895a5475a7f8412c9239900be0ea5179.jpg",
      name: "Bernard Arnault",
    },
    {
      url: "https://www.investopedia.com/thmb/auuYBGtBinYnIFlDo-CzbNU1xr4=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-948065808-ba10e6df430c414fbc496dededf1db2b.jpg",
      name: "Bill Gates",
    },
    {
      url: "https://www.investopedia.com/thmb/394cLcUOcKTq5xePXpoIRi34JSo=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1215628293-c32a14bc41c34aa9adee9e41f6c7fb68.jpg",
      name: "elone musk",
    },
  ]);

  const Swiped = (direction, nameToDelete) => {
    console.log("removing :" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCard">
      <div className="card_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onswipe={(dir) => Swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url('${person.url}'` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
