import AccessGate from "../components/access-gate"
import LandingPage from "../components/landing-page"

export default function Home() {
  return (
    <AccessGate>
      <LandingPage />
    </AccessGate>
  )
}
