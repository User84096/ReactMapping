import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(term) {
  return (
    <Entry
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      meaning={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
