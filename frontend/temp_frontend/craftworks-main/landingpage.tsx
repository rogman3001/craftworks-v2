import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, Users, Zap, Shield, ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CookieBanner from "./components/cookie-banner"
import CookieSettingsButton from "./components/cookie-settings-button"

export default function DeutscheLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="ml-2 text-xl font-bold">DigitalFlow</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#preise" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Preise
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Bewertungen
          </Link>
          <Link href="#kontakt" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Kontakt
          </Link>
        </nav>
        <Button variant="ghost" size="sm" className="ml-4 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-200">
                    🚀 Neu: KI-gestützte Automatisierung
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Digitalisierung leicht gemacht
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Transformieren Sie Ihr Unternehmen mit unserer innovativen Plattform. Automatisieren Sie Prozesse,
                    steigern Sie die Effizienz und wachsen Sie schneller als je zuvor.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Kostenlos starten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Demo ansehen
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>14 Tage kostenlos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Keine Kreditkarte nötig</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Dashboard Vorschau"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Alles was Sie brauchen</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unsere Plattform bietet alle Tools, die Sie für eine erfolgreiche Digitalisierung benötigen.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Blitzschnell</h3>
                      <p className="text-sm text-gray-600">Automatisierte Prozesse sparen bis zu 80% Ihrer Zeit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Sicher</h3>
                      <p className="text-sm text-gray-600">DSGVO-konform mit höchsten Sicherheitsstandards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Teamwork</h3>
                      <p className="text-sm text-gray-600">Nahtlose Zusammenarbeit für Ihr gesamtes Team</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Kundenstimmen</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Was unsere Kunden sagen</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "DigitalFlow hat unsere Produktivität um 300% gesteigert. Einfach unglaublich!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <div>
                      <p className="font-semibold">Sarah Mueller</p>
                      <p className="text-sm text-gray-600">CEO, TechStart GmbH</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Der beste Invest, den wir je gemacht haben. ROI nach nur 2 Monaten!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-blue-400" />
                    <div>
                      <p className="font-semibold">Michael Weber</p>
                      <p className="text-sm text-gray-600">Geschäftsführer, Weber & Co</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Endlich eine Lösung, die wirklich funktioniert. Sehr empfehlenswert!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    <div>
                      <p className="font-semibold">Anna Schmidt</p>
                      <p className="text-sm text-gray-600">Marketing Direktorin</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bereit für die Zukunft?</h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Starten Sie noch heute und erleben Sie, wie einfach Digitalisierung sein kann.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button type="submit" variant="secondary">
                    Starten
                  </Button>
                </form>
                <p className="text-xs text-blue-100">
                  Kostenlos registrieren. Keine Kreditkarte erforderlich.{" "}
                  <Link href="/datenschutz" className="underline underline-offset-2 hover:text-white">
                    Datenschutz
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} DigitalFlow. Alle Rechte vorbehalten.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/impressum" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Datenschutz
          </Link>
          <Link href="/agb" className="text-xs hover:underline underline-offset-4 text-gray-600">
            AGB
          </Link>
          <CookieSettingsButton />
        </nav>
      </footer>
      <CookieBanner />
    </div>
  )
}
