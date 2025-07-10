import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Music,
  Menu,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Music2,
  Music3,
  Music4,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Image src="/images/logoDacapo.webp" alt="Dacapo Logo" width={80} height={80} />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#la-escuela" className="text-sm font-medium hover:text-primary transition-colors">
              La Escuela
            </Link>
            <Link href="#clases" className="text-sm font-medium hover:text-primary transition-colors">
              Clases
            </Link>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Formamos músicos que buscan trascender</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              El Arte de la Música, 
              <span className="text-primary">
                la Pasión de Enseñar
              </span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              En Dacapo, cultivamos la excelencia musical a través de la enseñanza de violín y piano, inspirados en la filosofía Suzuki para nutrir el talento y la pasión en cada alumno.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mt-8">
              <Link href="https://wa.me/543512446077?text=Hola,%20quiero%20inscribirme%20en%20Dacapo." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Quiero inscribirme
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="container px-4 md:px-6 mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/40 hover:border-primary/60 transition-colors">
              <CardHeader>
                <Image
                  src="/images/violin.webp"
                  alt="Clases de Violín"
                  width={400}
                  height={150}
                  className="rounded-t-lg object-cover"
                />
                <CardTitle className="text-2xl pt-4">Violín</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Clases individuales y grupales para todos los niveles, desde iniciación hasta perfeccionamiento técnico y expresivo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-primary/60 transition-colors">
              <CardHeader>
                <Image
                  src="/images/piano.webp"
                  alt="Clases de Piano"
                  width={400}
                  height={150}
                  className="rounded-t-lg object-cover"
                />
                <CardTitle className="text-2xl pt-4">Piano</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Un repertorio que abarca desde las grandes obras clásicas hasta los arreglos más modernos de música popular.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-primary/60 transition-colors">
              <CardHeader>
                <Image
                  src="/images/metodoSuzuki.webp"
                  alt="Método Suzuki"
                  width={400}
                  height={150}
                  className="rounded-t-lg object-cover"
                />
                <CardTitle className="text-2xl pt-4">Método Suzuki</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fomentamos el aprendizaje musical como un lenguaje, en un ambiente de apoyo y respeto mutuo entre alumnos y familias.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="clases" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Una formación integral para el músico de hoy
            </h2>
            <p className="text-xl text-muted-foreground">
              Ofrecemos todo lo que necesitas para crecer, desde clases personalizadas hasta ensambles grupales y conciertos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Music2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Clases Online</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Participa en nuestras clases sincrónicas desde cualquier parte del mundo con la misma calidad que una clase presencial.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Music3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Repertorio Diverso</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Explora desde Bach hasta los Beatles. Nuestro enfoque abarca tanto la música clásica como la popular.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Music4 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Clases Grupales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Aprende y crece junto a otros músicos en nuestros ensambles y clases de teoría musical grupales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Conciertos y Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Demuestra tu progreso y comparte tu talento en nuestros conciertos y eventos semestrales.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="la-escuela" className="bg-card text-foreground py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-4 mb-4">
                <Image src="/images/logoDacapo.webp" alt="Dacapo Logo" width={70} height={70} />
              </div>
              <p className="text-muted-foreground mb-6">
                Formamos músicos que buscan trascender.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Music className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-1 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">La Escuela</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Nuestra Historia
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Ubicación
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Inscripciones
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Clases</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Violín
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Piano
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Clases Online
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Ensambles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="border-t border-border/40 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Dacapo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
