"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, AlertTriangle, CheckCircle2, Gift, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResultsPage() {
  // Mock analysis results
  const analysisResult = {
    overallRating: "yellow", // green, yellow, red
    priceScore: 75,
    totalAmount: 8500,
    marketAverage: 7200,
    hiddenCosts: 2,
    fundingOpportunities: 1,
    comment:
      "Das Angebot liegt leicht über dem Marktdurchschnitt, enthält aber faire Preise für die meisten Positionen.",
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "green":
        return "text-green-600 bg-green-100"
      case "yellow":
        return "text-yellow-600 bg-yellow-100"
      case "red":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getRatingText = (rating: string) => {
    switch (rating) {
      case "green":
        return "Fairer Preis"
      case "yellow":
        return "Leicht überteuert"
      case "red":
        return "Deutlich überteuert"
      default:
        return "Unbekannt"
    }
  }

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case "green":
        return <CheckCircle2 className="h-8 w-8" />
      case "yellow":
        return <AlertTriangle className="h-8 w-8" />
      case "red":
        return <AlertTriangle className="h-8 w-8" />
      default:
        return <AlertTriangle className="h-8 w-8" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold">Handwerkskosten.de</span>
        </Link>
        <nav className="ml-auto">
          <Link href="/upload">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Neues Angebot prüfen
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Analyse-Ergebnis
          </h1>
          <p className="text-gray-600">Hier ist die KI-Bewertung Ihres Handwerkerangebots</p>
        </div>

        <div className="space-y-6">
          {/* Main Rating Card */}
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div
                  className={`h-20 w-20 rounded-full flex items-center justify-center ${getRatingColor(analysisResult.overallRating)}`}
                >
                  {getRatingIcon(analysisResult.overallRating)}
                </div>
              </div>
              <CardTitle className="text-2xl">{getRatingText(analysisResult.overallRating)}</CardTitle>
              <p className="text-gray-600 mt-2">{analysisResult.comment}</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {analysisResult.totalAmount.toLocaleString("de-DE")}€
                  </div>
                  <p className="text-sm text-gray-600">Angebotssumme</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {analysisResult.marketAverage.toLocaleString("de-DE")}€
                  </div>
                  <p className="text-sm text-gray-600">Marktdurchschnitt</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{analysisResult.priceScore}%</div>
                  <p className="text-sm text-gray-600">Fairness-Score</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Preis-Fairness</span>
                  <span>{analysisResult.priceScore}%</span>
                </div>
                <Progress value={analysisResult.priceScore} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Details Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Hidden Costs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Versteckte Kosten
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analysisResult.hiddenCosts > 0 ? (
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {analysisResult.hiddenCosts} gefunden
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Wir haben {analysisResult.hiddenCosts} unklare Position(en) in Ihrem Angebot identifiziert.
                    </p>
                  </div>
                ) : (
                  <div>
                    <Badge className="bg-green-100 text-green-700 mb-2">Keine gefunden</Badge>
                    <p className="text-sm text-gray-600">Alle Positionen sind klar und transparent aufgeführt.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Funding Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-blue-600" />
                  Fördermöglichkeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analysisResult.fundingOpportunities > 0 ? (
                  <div>
                    <Badge className="bg-blue-100 text-blue-700 mb-2">
                      {analysisResult.fundingOpportunities} verfügbar
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Für Ihr Projekt sind Fördermittel verfügbar. Bis zu 20% Ersparnis möglich.
                    </p>
                  </div>
                ) : (
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Keine verfügbar
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Für dieses Projekt sind aktuell keine Fördermittel verfügbar.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Premium Report CTA */}
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Detaillierter Premium-Report</h3>
                <p className="text-gray-600 mb-4">
                  Erhalten Sie eine ausführliche Analyse mit Preisvergleichen, Fördermittel-Details und
                  Optimierungsvorschlägen
                </p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">9,99€</div>
                    <p className="text-sm text-gray-600">Einmalzahlung</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Premium-Report kaufen
                </Button>
                <p className="text-xs text-gray-500 mt-2">Sofortiger Download • 30 Tage Geld-zurück-Garantie</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
