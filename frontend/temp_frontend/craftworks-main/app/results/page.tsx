import AccessGate from "../../components/access-gate"
import ResultsPage from "../../components/results-page"

export default function Results() {
  return (
    <AccessGate>
      <ResultsPage />
    </AccessGate>
  )
}
