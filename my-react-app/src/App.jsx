import Card from "./components/Cards/Cards";
import Student from "./components/Student/Student";

function App() {
  return (
    <>
      <Card />
      <Student 
        name="Matthew"
        email="matthewjlowe11@gmail.com"
        age={30} //If not string literal - need to enclose in curly braces
        isStudent={true}
      />
    </>
  );
}

export default App
