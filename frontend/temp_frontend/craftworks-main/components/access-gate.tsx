"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, EyeOff } from "lucide-react"

interface AccessGateProps {
  children: React.ReactNode
}

export default function AccessGate({ children }: AccessGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const CORRECT_CODE = "1987"

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("access-granted")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (accessCode === CORRECT_CODE) {
      setIsAuthenticated(true)
      localStorage.setItem("access-granted", "true")
    } else {
      setError("Ungültiger Zugangscode. Bitte versuchen Sie es erneut.")
      setAccessCode("")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4) // Only numbers, max 4 digits
    setAccessCode(value)
    if (error) setError("") // Clear error when user starts typing
  }

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    )
  }

  // Show access gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Zugangsschutz
            </CardTitle>
            <p className="text-gray-600 text-sm mt-2">Diese Anwendung befindet sich in der Entwicklung</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="accessCode" className="text-sm font-medium text-gray-700">
                  Bitte Zugangscode eingeben
                </label>
                <div className="relative">
                  <Input
                    id="accessCode"
                    type={showPassword ? "text" : "password"}
                    value={accessCode}
                    onChange={handleInputChange}
                    placeholder="••••"
                    className={`text-center text-2xl tracking-widest ${error ? "border-red-500" : ""}`}
                    maxLength={4}
                    autoComplete="off"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    {error}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                disabled={accessCode.length !== 4}
              >
                Zugang freischalten
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Shield className="h-3 w-3" />
                <span>Sicherer Zugang • Nur für autorisierte Nutzer</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show main content if authenticated
  return <>{children}</>
}
