const date = new Date();

export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        {date.getFullYear()}/{date.getMonth()}/{date.getDay()}
      </h1>
    )
  }