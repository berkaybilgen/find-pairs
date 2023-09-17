import Box from "@/components/box";
import { useEffect, useState } from "react";

const Game = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => {
        setCities(sortRandom(data));
      });
  }, []);

  const sortRandom = (list) => {
    var newList = JSON.parse(JSON.stringify(list));

    const finalList = list.concat(newList);

    finalList.map((item, index) => {
      item.index = index;
      item.order = Math.random() * 100;
      item.isOpen = false;
      item.isDone = false;
    });

    finalList.sort((a, b) => a.order - b.order);

    return finalList;
  };

  function close() {
    setTimeout(() => {
      var newState = [...cities];

      newState.map((x) => {
        x.isOpen = false;
      });

      setCities(newState);
    }, 500);
  }

  function done(item) {
    setTimeout(() => {
      var newState = [...cities];

      newState
        .filter((x) => x.image == item.image)
        .map((x) => {
          x.isDone = true;
        });

      setCities(newState);

      var doneCount = cities.filter((x) => x.isDone === true).length;

      if (doneCount == cities.length) {
        alert("Congratulations :)");
      }
    }, 500);
  }

  async function setOpened(index) {
    const newState = [...cities];

    const openedItem = cities.find((x) => x.isOpen === true);

    const item = newState.find((x) => x.index == index);

    if (cities.filter((x) => x.isOpen === true).length < 2) {
      item.isOpen = true;

      setCities(newState);
    }

    var openedCount = cities.filter((x) => x.isOpen === true).length;

    if (openedCount > 1) {
      if (item.image == openedItem.image) {
        done(item);
      } else {
        close();
      }
    }
  }

  let boxes = "";

  boxes = cities.map((city) => {
    return (
      <Box
        index={city.index}
        image={city.image}
        isOpen={city.isOpen}
        isDone={city.isDone}
        setOpened={setOpened}
      />
    );
  });

  return <div id="box-content">{boxes}</div>;
};

export default Game;
