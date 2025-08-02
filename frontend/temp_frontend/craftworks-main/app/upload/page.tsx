import AccessGate from "../../components/access-gate"
import UploadPage from "../../components/upload-page"

export default function Upload() {
  return (
    <AccessGate>
      <UploadPage />
    </AccessGate>
  )
}
