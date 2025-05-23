
import { createRoot } from "react-dom/client"

//1. Create a root
import App from "./App"

//2. Redner some markup to the root

const root = createRoot(document.getElementById("root"))
root.render(<h1>Hello, React</h1>)

