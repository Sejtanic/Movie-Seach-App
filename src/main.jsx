import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { SiteProvider } from "./State/siteContext"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SiteProvider>
  </React.StrictMode>
)
