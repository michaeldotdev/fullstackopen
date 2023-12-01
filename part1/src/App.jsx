import Header from "./Header";
import Total from "./Total";
import Content from "./Content";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercise1}/>
      <Content part={part2} exercise={exercise2}/>
      <Content part={part3} exercise={exercise3}/>
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
    </div>
  )
}

export default App
