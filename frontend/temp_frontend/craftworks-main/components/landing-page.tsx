import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, CheckCircle, Shield, Zap, FileText, Euro, Award } from "lucide-react"
import Link from "next/link"
import CookieSettingsButton from "./cookie-settings-button"
import CookieBanner from "./cookie-banner"
import OfferEvaluator from "@/components/OfferEvaluator";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold">Handwerkskosten.de</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link href="#preise" className="text-sm font-medium hover:text-green-600 transition-colors">
            Preise
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-green-600 transition-colors">
            Bewertungen
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-4 w-full">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">🤖 KI-gestützte Analyse</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Handwerkerangebote in Sekunden prüfen lassen
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-[600px] leading-relaxed">
                  Laden Sie Ihr Handwerkerangebot hoch und erhalten Sie sofort eine KI-Bewertung: Ist der Preis fair?
                  Gibt es versteckte Kosten? Ist eine Förderung möglich?
                </p>
              <div className="mt-8 w-full max-w-lg mx-auto">
                <OfferEvaluator />
              </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-md">
                <Link href="/upload" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 py-3"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Angebot jetzt prüfen
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 py-3 bg-transparent">
                  Demo ansehen
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Kostenlose Sofortbewertung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>DSGVO-konform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary">So funktioniert's</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  In 3 einfachen Schritten
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Upload className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">1. Angebot hochladen</h3>
                  <p className="text-sm text-gray-600">
                    PDF, Foto oder Screenshot Ihres Handwerkerangebots einfach per Drag & Drop hochladen
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">2. KI-Analyse</h3>
                  <p className="text-sm text-gray-600">
                    Unsere KI analysiert Preise, erkennt versteckte Kosten und prüft Fördermöglichkeiten
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                      <Award className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">3. Ergebnis erhalten</h3>
                  <p className="text-sm text-gray-600">
                    Sofortige Ampelbewertung + optional detaillierter Premium-Report mit allen Details
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Was wir für Sie prüfen</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Euro className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Preisfairness</h3>
                      <p className="text-sm text-gray-600">
                        Vergleich mit aktuellen Marktpreisen und regionalen Durchschnittswerten für Ihre Gewerke
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Versteckte Kosten</h3>
                      <p className="text-sm text-gray-600">
                        Erkennung von unklaren Posten, Pauschalpreisen ohne Details und versteckten Zusatzkosten
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Fördermöglichkeiten</h3>
                      <p className="text-sm text-gray-600">
                        Prüfung auf KfW-, BAFA- und regionale Förderprogramme für Ihre geplanten Maßnahmen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Detailanalyse</h3>
                      <p className="text-sm text-gray-600">
                        Aufschlüsselung aller Positionen mit Materialkosten, Arbeitszeit und Gewinnmargen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="preise" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary">Preise</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent und fair</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Kostenlose Bewertung</h3>
                    <div className="text-4xl font-bold text-green-600 mb-1">0€</div>
                    <p className="text-sm text-gray-600 mb-6">immer kostenlos</p>
                    <ul className="space-y-3 text-left mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Sofortige Ampel-Bewertung</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Grundlegende Preiseinschätzung</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">KI-generierter Kurzkommentar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Übersicht versteckter Kosten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Hinweise auf Fördermöglichkeiten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">DSGVO-konform & sicher</span>
                      </li>
                    </ul>
                    <Link href="/upload">
                      <Button variant="outline" className="w-full bg-transparent">
                        Kostenlos starten
                      </Button>
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">Keine Registrierung erforderlich</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative border-2 border-blue-200">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">Beliebt</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Premium-Report</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-1">9,99€</div>
                    <p className="text-sm text-gray-600 mb-6">pro Angebot</p>
                    <ul className="space-y-3 text-left mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Alles aus der kostenlosen Bewertung</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Detaillierte Preisanalyse aller Positionen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Marktvergleich mit regionalen Daten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Fördermittel-Beratung (KfW, BAFA)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Versteckte Kosten aufgedeckt</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Professioneller PDF-Report</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Optimierungsvorschläge</span>
                      </li>
                    </ul>
                    <Link href="/upload">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Premium-Report erhalten
                      </Button>
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">30 Tage Geld-zurück-Garantie</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="testimonials">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary">Kundenstimmen</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Was unsere Nutzer sagen</h2>
                <p className="max-w-[600px] text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mx-auto">
                  Über 10.000 Handwerkerangebote bereits erfolgreich geprüft
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Unglaublich! Handwerkgskosten.de hat mir 2.800€ gespart. Das Angebot für meine Heizung war völlig
                    überteuert - hätte ich ohne die Analyse nie erkannt."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                      SM
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Müller</p>
                      <p className="text-sm text-gray-600">Hausbesitzerin, München</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Als Vermieter prüfe ich alle Handwerkerangebote mit dem Tool. Die KI erkennt versteckte Kosten, die
                    mir früher entgangen sind. Absolute Empfehlung!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                      MK
                    </div>
                    <div>
                      <p className="font-semibold">Michael Klein</p>
                      <p className="text-sm text-gray-600">Immobilienbesitzer, Hamburg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Der Premium-Report ist jeden Cent wert! Detaillierte Analyse, Fördermittel-Hinweise und konkrete
                    Spartipps. Meine Badrenovierung wurde 30% günstiger."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                      AW
                    </div>
                    <div>
                      <p className="font-semibold">Anna Weber</p>
                      <p className="text-sm text-gray-600">Eigenheimbesitzerin, Berlin</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Endlich ein Tool, das wirklich hilft! Die KI hat sofort erkannt, dass in meinem Dachausbau-Angebot
                    unrealistische Materialpreise standen."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center text-white font-semibold">
                      TS
                    </div>
                    <div>
                      <p className="font-semibold">Thomas Schmidt</p>
                      <p className="text-sm text-gray-600">Hausbesitzer, Köln</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Perfekt für Laien wie mich! Die Ampel-Bewertung ist sofort verständlich und der Premium-Report
                    erklärt alles bis ins Detail. Sehr professionell."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-semibold">
                      JH
                    </div>
                    <div>
                      <p className="font-semibold">Julia Hoffmann</p>
                      <p className="text-sm text-gray-600">Erstvermieterin, Frankfurt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Die Fördermittel-Analyse ist genial! Ich hätte nie gewusst, dass für meine Wärmepumpe 8.000€
                    KfW-Förderung möglich sind. Das Tool hat sich 800-fach amortisiert."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                      RB
                    </div>
                    <div>
                      <p className="font-semibold">Robert Bauer</p>
                      <p className="text-sm text-gray-600">Eigenheimbesitzer, Stuttgart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-3 text-center items-center justify-center">
                <div className="space-y-2 flex flex-col items-center">
                  <div className="text-3xl font-bold text-green-600">10.000+</div>
                  <p className="text-sm text-gray-600">Angebote geprüft</p>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600">€2.1M</div>
                  <p className="text-sm text-gray-600">Gesamt gespart</p>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <div className="text-3xl font-bold text-purple-600">4.9/5</div>
                  <p className="text-sm text-gray-600">Kundenbewertung</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">Handwerkskosten.de</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ihre vertrauensvolle KI-Plattform für die intelligente Bewertung von Handwerkerangeboten. Sparen Sie
                Zeit und Geld mit unserer professionellen Analyse.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-5 h-5 bg-gray-400 hover:bg-white rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-5 h-5 bg-gray-400 hover:bg-white rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-5 h-5 bg-gray-400 hover:bg-white rounded"></div>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/upload" className="text-gray-300 hover:text-white transition-colors">
                    Angebot prüfen
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Premium-Report
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Fördermittel-Check
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Preisvergleich
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Hilfe & FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@handwerkskosten.de"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    support@handwerkskosten.de
                  </a>
                </li>
                <li>
                  <a href="tel:+4930123456789" className="text-gray-300 hover:text-white transition-colors">
                    +49 30 123 456 789
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Unternehmen</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Karriere
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Presse
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Partner werden
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <a href="/impressum" className="text-gray-300 hover:text-white transition-colors">
                  Impressum
                </a>
                <a href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">
                  Datenschutzerklärung
                </a>
                <a href="/agb" className="text-gray-300 hover:text-white transition-colors">
                  AGB
                </a>
                <a href="/widerruf" className="text-gray-300 hover:text-white transition-colors">
                  Widerrufsrecht
                </a>
                <CookieSettingsButton />
              </div>

              {/* Copyright */}
              <div className="text-sm text-gray-400 text-center md:text-right">
                <p>© {new Date().getFullYear()} Handwerkskosten.de GmbH. Alle Rechte vorbehalten.</p>
                <p className="mt-1">Handwerkskosten.de GmbH • Musterstraße 123 • 10115 Berlin • Deutschland</p>
                <p className="mt-1">
                  Geschäftsführer: Max Mustermann • Amtsgericht Berlin HRB 123456 • USt-IdNr.: DE123456789
                </p>
              </div>
            </div>
          </div>

          {/* DSGVO Notice */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p className="font-medium text-white mb-1">Datenschutz & Sicherheit</p>
                <p>
                  Ihre Daten werden verschlüsselt übertragen und DSGVO-konform verarbeitet. Hochgeladene Angebote werden
                  nach der Analyse automatisch gelöscht. Wir verwenden deutsche Server und erfüllen höchste
                  Sicherheitsstandards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}
