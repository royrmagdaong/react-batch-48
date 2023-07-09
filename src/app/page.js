import HelloWorld from "./components/HelloWorld"
import Cat from "./components/Cat"

export default function Home() {
  return (
    <main className="">
      {/* <HelloWorld></HelloWorld> */}
      {/* <HelloWorld /> */}
      <Cat name="Meow" age="2"></Cat>
      <Cat name="Meow 2" age="5"></Cat>
      <Cat name="Meow 3" age="3"></Cat>
    </main>
  )
}
