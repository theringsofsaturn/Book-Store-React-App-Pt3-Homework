
import "./App.css";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import WarningSign from "./Components/WarningSign";
import fantasy from "./Data/fantasy.json";
import BookList from "./Components/BookList";




function App() {
  return (
    <div class="container-fluid">
      {/* <WarningSign text="your books available" variant="danger" />
        <MyBadge text="whatever" color="primary" /> */}
      
      {/* <SingleBook book={fantasy[0]} /> */}
      <BookList books={fantasy} />
    </div>
  );
}

export default App;
