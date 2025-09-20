"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "../context/auth-context"

export function CardSignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await signIn(email, password)
      navigate("/")
    } catch (err) {
      setError("E-mail ou senha inválidos")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl border bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="h-2 bg-primary"></div>

        <CardHeader className="space-y-3 pb-6 pt-8 px-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          <CardTitle className="text-3xl font-bold text-center text-foreground">Entrar na sua conta</CardTitle>
          <CardDescription className="text-center text-muted-foreground text-base leading-relaxed">
            Insira seu e-mail abaixo para acessar sua conta
          </CardDescription>
          <CardAction className="text-center">
            <Link to={"/auth/sign-up"}>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                Criar conta
              </Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent className="px-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@dominio.com"
                    required
                    className="pl-11 h-12 rounded-xl border-2 border-input focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-200 bg-background"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                    Senha
                  </Label>
                  <a
                    href="#"
                    className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-11 pr-11 h-12 rounded-xl border-2 border-input focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-200 bg-background"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <p className="text-destructive text-sm font-medium">{error}</p>
                </div>
              )}
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 p-8 pt-4">
          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
