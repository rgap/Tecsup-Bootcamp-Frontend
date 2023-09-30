import { useState } from "react";
import {
  Card,
  Header,
  ItemPercentage,
  Summary,
  TextField,
  Title,
} from "./components";

export default function App() {
  const [percentages, setPercetanges] = useState([
    {
      value: "5%",
      isActive: false,
    },
    {
      value: "10%",
      isActive: false,
    },
    {
      value: "15%",
      isActive: false,
    },
    {
      value: "25%",
      isActive: false,
    },
    {
      value: "50%",
      isActive: false,
    },
  ]);

  const [customValue, setCustomValue] = useState("");
  const [inputBill, setInputBill] = useState("");
  const [inputPeople, setInputPeople] = useState("");
  const [valuePercetange, setValuePercetange] = useState(0);

  // const handleInputBillOnChange = (event) => {
  //   setInputBill(event.target.value);
  // };
  // const handleInputPeopleOnChange = (event) => {
  //   setInputPeople(event.target.value);
  // };

  // const handlePercetangeActive = (value) => {
  //   const item = percentages.map((percentage) => {
  //     return {
  //       isActive: value && !percentage.isActive && percentage.value === value,
  //       value: percentage.value,
  //     };
  //   });
  //   setPercetanges(item);
  //   setCustomValue("");
  // };

  // const handleInputOnChange = (event) => {
  //   const item = percentages.map((percentage) => {
  //     return {
  //       isActive: false,
  //       value: percentage.value,
  //     };
  //   });
  //   setPercetanges(item);

  //   setCustomValue(event.target.value);
  // };

  const handleMapPercentage = (value) => {
    return percentages.map((percentage) => {
      return {
        isActive: value && !percentage.isActive && percentage.value === value,
        value: percentage.value,
      };
    });
  };

  const handlePercetangeActive = (value) => {
    setPercetanges(handleMapPercentage(value));
    setCustomValue("");
    setValuePercetange(Number(value.replace("%", "")));
    // console.log(Number(value.replace("%", "")));
  };

  const handleInputOnChange = (event) => {
    setPercetanges(handleMapPercentage());
    setCustomValue(event.target.value);
    setValuePercetange(Number(event.target.value));
  };

  const handleInputBillOnChange = (event) => setInputBill(event.target.value);

  const handleInputPeopleOnChange = (event) => {
    if (!valuePercetange || !inputBill) {
      alert("Debes completar los valores para el calculo");
      return;
    }

    const inputPeople = event.target.value;
    setInputPeople(inputPeople);

    // calculos
    const bill = Number(inputBill);

    const totalTipPerPerson = (bill * valuePercetange) / Number(inputPeople);
    console.log(totalTipPerPerson);
    const totalPerPerson = bill / Number(inputPeople) + totalTipPerPerson;
    console.log(totalPerPerson);
  };

  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <Title text="Bill" />
        <TextField
          icon="dollar"
          placeholder="0.0"
          name="input-dollar"
          value={inputBill}
          onChange={handleInputBillOnChange}
        />
        <Title text="Select Tip %" />
        <div className="grid grid-cols-2 gap-3 mt-3">
          {percentages.map((percentage) => (
            <ItemPercentage
              key={percentage.value}
              value={percentage.value}
              isActive={percentage.isActive}
              onElementClick={handlePercetangeActive}
            />
          ))}
          <TextField
            placeholder="Custom"
            name="input-custom"
            value={customValue}
            onChange={handleInputOnChange}
          />
        </div>
        <Title text="Number of people" />
        <TextField
          icon="person"
          placeholder="0"
          name="input-people"
          value={inputPeople}
          onChange={handleInputPeopleOnChange}
        />
        <Summary />
      </Card>
    </main>
  );
}

/* <TextField icon="person" placeholder="0" name="input-person"/>
<TextField placeholder="custom" name="input-custom"/> */

// title to replace h2

// no se usan ids en react pero si keys

// {} so as to write js inside html

// when iterating there has to be a key

// astro build: para crear interfaces de forma dinamica

/* <ItemPercentage value="5%" />
          <ItemPercentage value="10%" />
          <ItemPercentage value="15%" />
          <ItemPercentage value="25%" />
          <ItemPercentage value="50%" /> */
