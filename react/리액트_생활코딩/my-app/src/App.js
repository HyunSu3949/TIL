import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Nav({ topics }) {
  const list = [];
  topics.forEach((item) => {
    const title = item.title;
    list.push(
      <li>
        <a href={`/read/` + item.id}>{title}</a>
      </li>
    );
  });
  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
function App() {
  const mode = "WELCOME";
  const topics = [
    {
      id: 1,
      title: "html",
      body: "html is...",
    },
    {
      id: 1,
      title: "css",
      body: "css is...",
    },
    {
      id: 1,
      title: "js",
      body: "js is...",
    },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    content = <Article title="Read" body="Hello, Read"></Article>;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          alert("Header");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
