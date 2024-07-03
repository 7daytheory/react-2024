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
