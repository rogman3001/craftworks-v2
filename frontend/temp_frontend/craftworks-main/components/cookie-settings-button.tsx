"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function CookieSettingsButton() {
  const [showSettings, setShowSettings] = useState(false)

  const openCookieSettings = () => {
    // Clear the consent to show the banner again
    localStorage.removeItem("cookie-consent")
    window.location.reload()
  }

  return (
    <Button variant="ghost" size="sm" onClick={openCookieSettings} className="text-xs">
      <Settings className="h-3 w-3 mr-1" />
      Cookie-Einstellungen
    </Button>
  )
}
