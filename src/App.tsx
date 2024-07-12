// import './App.css'

function App() {
  const handleClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("Hello from my extension!");
      }
    })
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Say Hello</button>
    </div>

  )
}

export default App
