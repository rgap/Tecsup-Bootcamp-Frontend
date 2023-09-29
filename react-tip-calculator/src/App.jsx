import { Card, Header } from "./components";
import TextField from "./components/TextField";

export default function App() {
  return (
    <main className="bg-green-100 h-screen">
      <Header />
      <Card>
        <h2 className="font-semibold text-green-900">Bill</h2>
        <TextField icon="dollar"/>
      </Card>
    </main>
  );
}
