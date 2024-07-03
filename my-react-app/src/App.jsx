import Card from "./components/Cards/Cards";
import Student from "./components/Student/Student";

//propTypes : a mechanism that ensures that the passeed value is of the correct datatype - age: propTypes.number

function App() {
  return (
    <>
      <Card />
      <Student 
        name="Matthew"
        email="matthewjlowe11@gmail.com"
        age={30} // Not string literal (number) - requiires curly braces
        isStudent={true} // Not string literal (boolean) - requires curly braces
      />
      <Student 
        name="Marco"
        email="marco27@gmail.com"
        age={42}
        isStudent={false}
      />
      <Student 
        name="Brittany"
        email="brittany.example@hotmail.com"
        age={27}
        isStudent={true}
      />
      <Student 
        name="Aman"
        email="example.aman@hotmail.com"
        age={42}
        isStudent={true}
      />
    </>
  );
}

export default App
