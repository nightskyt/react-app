import App from "../App"

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return (
    <App />
  )
}