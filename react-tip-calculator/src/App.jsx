import { Card, Header, ItemPercentage, Summary, TextField, Title } from "./components";

export default function App() {

  const percentages = ["5%", "10%", "15%", "25%", "50%"]
  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <Title text="Bill"/>
        <TextField icon="dollar" placeholder="0.0" name="input-dollar" />
        <Title text="Select Tip %"/>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {/* <ItemPercentage value="5%" />
          <ItemPercentage value="10%" />
          <ItemPercentage value="15%" />
          <ItemPercentage value="25%" />
          <ItemPercentage value="50%" /> */}
          {percentages.map((percentage) => (
            <ItemPercentage key={percentage} value={percentage}/>)) 
          }
          <TextField placeholder="Custom" name="input-custom"/>
        </div>
        <Title text="Number of people"/>
        <TextField icon="person" placeholder="0" name="input-people"/>
        <Summary/>
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