"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { X, Settings, Shield, BarChart3, Target, Wrench, Cookie } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      const savedPreferences = JSON.parse(cookieConsent)
      setPreferences(savedPreferences)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettings(false)

    // Here you would typically initialize your tracking scripts based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics, etc.
      console.log("Analytics cookies enabled")
    }
    if (prefs.marketing) {
      // Initialize marketing pixels, etc.
      console.log("Marketing cookies enabled")
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log("Functional cookies enabled")
    }
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
  }

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    })
  }

  const saveCustomSettings = () => {
    savePreferences(preferences)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-2xl animate-in slide-in-from-bottom duration-500">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Cookie className="h-5 w-5 text-blue-600" />
                <h3 className="font-bold text-gray-900 text-lg">🍪 Cookie-Einstellungen</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website
                zu bieten.
                <strong> Notwendige Cookies</strong> sind für die Grundfunktionen erforderlich.
                <strong> Optionale Cookies</strong> helfen uns, die Website zu verbessern und Ihnen personalisierte
                Inhalte anzuzeigen.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  DSGVO-konform
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Deutsche Server
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Jederzeit widerrufbar
                </Badge>
              </div>
              <p className="text-xs text-gray-600">
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-blue-600 hover:underline font-medium">
                  Datenschutzerklärung
                </Link>{" "}
                und unseren{" "}
                <Link href="/cookie-richtlinie" className="text-blue-600 hover:underline font-medium">
                  Cookie-Richtlinien
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="whitespace-nowrap border-gray-300 hover:bg-gray-50"
              >
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 border-gray-300"
              >
                Nur notwendige
              </Button>
              <Button size="sm" onClick={acceptAll} className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
              <div>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-blue-600" />
                  Cookie-Einstellungen verwalten
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">Bestimmen Sie selbst, welche Cookies Sie zulassen möchten</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Ihre Privatsphäre ist uns wichtig:</strong> Sie können Ihre Einstellungen jederzeit ändern.
                  Ihre Auswahl wird für 12 Monate gespeichert und kann über den Link im Footer angepasst werden.
                </p>
              </div>

              {/* Necessary Cookies */}
              <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">Notwendige Cookies</h4>
                      <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                        Immer aktiv
                      </Badge>
                    </div>
                  </div>
                  <Switch checked={true} disabled className="data-[state=checked]:bg-green-600" />
                </div>
                <p className="text-sm text-green-800 ml-9">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert
                  werden. Sie speichern keine persönlichen Informationen und werden nach dem Schließen des Browsers
                  gelöscht.
                </p>
                <div className="ml-9 text-xs text-green-700">
                  <strong>Beispiele:</strong> Session-ID, Spracheinstellungen, Sicherheits-Token
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Funktionale Cookies</h4>
                      <Badge variant="outline" className="mt-1">
                        Optional
                      </Badge>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, functional: checked }))}
                  />
                </div>
                <p className="text-sm text-gray-700 ml-9">
                  Ermöglichen erweiterte Funktionen wie Chat-Support, personalisierte Inhalte und verbesserte
                  Benutzerführung. Diese Cookies verbessern Ihr Nutzererlebnis erheblich.
                </p>
                <div className="ml-9 text-xs text-gray-600">
                  <strong>Beispiele:</strong> Chat-Verlauf, Formular-Eingaben, Präferenzen
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                      <Badge variant="outline" className="mt-1">
                        Optional
                      </Badge>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, analytics: checked }))}
                  />
                </div>
                <p className="text-sm text-gray-700 ml-9">
                  Helfen uns zu verstehen, wie Besucher unsere Website nutzen. Alle Daten werden anonymisiert erfasst
                  und dienen nur der Verbesserung unseres Services. Keine persönlichen Daten werden gespeichert.
                </p>
                <div className="ml-9 text-xs text-gray-600">
                  <strong>Anbieter:</strong> Google Analytics (anonymisiert), Hotjar
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Marketing-Cookies</h4>
                      <Badge variant="outline" className="mt-1">
                        Optional
                      </Badge>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketing: checked }))}
                  />
                </div>
                <p className="text-sm text-gray-700 ml-9">
                  Werden verwendet, um Ihnen relevante Werbung zu zeigen und die Effektivität unserer Kampagnen zu
                  messen. Sie können diese Cookies jederzeit deaktivieren, ohne die Funktionalität der Website zu
                  beeinträchtigen.
                </p>
                <div className="ml-9 text-xs text-gray-600">
                  <strong>Anbieter:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button variant="outline" onClick={rejectAll} className="order-3 sm:order-1 bg-transparent">
                    Nur notwendige
                  </Button>
                  <Button variant="outline" onClick={acceptAll} className="order-2 bg-transparent">
                    Alle akzeptieren
                  </Button>
                  <Button onClick={saveCustomSettings} className="bg-blue-600 hover:bg-blue-700 order-1 sm:order-3">
                    Auswahl speichern
                  </Button>
                </div>
              </div>

              <div className="text-xs text-gray-500 border-t pt-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Rechtliche Hinweise:</p>
                    <p className="mb-2">
                      Gemäß Art. 6 Abs. 1 lit. a DSGVO basiert die Verarbeitung auf Ihrer Einwilligung. Sie können diese
                      jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
                      berührt wird.
                    </p>
                    <p>
                      Weitere Informationen zu unserem Umgang mit Ihren Daten finden Sie in unserer{" "}
                      <Link href="/datenschutz" className="text-blue-600 hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      und unseren{" "}
                      <Link href="/cookie-richtlinie" className="text-blue-600 hover:underline">
                        Cookie-Richtlinien
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
