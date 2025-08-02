"use client"

import type React from "react"

import { useState, useCallback, useRef } from "react" //NEU
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, ImageIcon, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()
  const fileInputRef =useRef<HTMLInputElement>(null) //NEU

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (isValidFileType(file)) {
        setUploadedFile(file)
      }
    }
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (isValidFileType(file)) {
        setUploadedFile(file)
      }
    }
  }

  const isValidFileType = (file: File) => {
    const validTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"]
    return validTypes.includes(file.type)
  }

  const getFileIcon = (file: File) => {
    if (file.type === "application/pdf") {
      return <FileText className="h-8 w-8 text-red-500" />
    }
    return <ImageIcon className="h-8 w-8 text-blue-500" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleAnalyze = async () => {
    if (!uploadedFile) return

    setIsAnalyzing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Redirect to results page
    router.push("/results")
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
          <Link href="/">
            <Button variant="ghost" size="sm">
              Zurück zur Startseite
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Handwerkerangebot hochladen
          </h1>
          <p className="text-gray-600">
            Laden Sie Ihr Angebot als PDF, JPG oder PNG hoch und erhalten Sie eine sofortige KI-Bewertung
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upload Area */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Datei hochladen
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!uploadedFile ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300 hover:border-green-400 hover:bg-green-50/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Datei hier ablegen</h3>
                  <p className="text-gray-600 mb-4">oder klicken Sie hier zum Auswählen</p>
                  <input
                    ref={fileInputRef} //NEU
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-upload"
                  />
                    <Button 
                      variant="outline" 
                      className="cursor-pointer bg-transparent"
                      onClick={()=> fileInputRef.current?.click()}
                    >
                      Datei auswählen
                    </Button>
                  <div className="mt-4 flex justify-center gap-2">
                    <Badge variant="secondary">PDF</Badge>
                    <Badge variant="secondary">JPG</Badge>
                    <Badge variant="secondary">PNG</Badge>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    {getFileIcon(uploadedFile)}
                    <div className="flex-1">
                      <h4 className="font-medium">{uploadedFile.name}</h4>
                      <p className="text-sm text-gray-600">{formatFileSize(uploadedFile.size)}</p>
                    </div>
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      {isAnalyzing ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          Analysiere...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Jetzt analysieren
                        </>
                      )}
                    </Button>
                    <Button variant="outline" onClick={() => setUploadedFile(null)} disabled={isAnalyzing}>
                      Andere Datei wählen
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Cards */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Was wird geprüft?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Preisfairness</p>
                  <p className="text-sm text-gray-600">Vergleich mit Marktpreisen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Versteckte Kosten</p>
                  <p className="text-sm text-gray-600">Unklare Positionen erkennen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Fördermöglichkeiten</p>
                  <p className="text-sm text-gray-600">KfW, BAFA und mehr</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Datenschutz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm">
                    Ihre Daten werden verschlüsselt übertragen und nach der Analyse automatisch gelöscht.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm">DSGVO-konform und sicher auf deutschen Servern gehostet.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
