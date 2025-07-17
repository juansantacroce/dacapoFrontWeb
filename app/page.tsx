"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Music, Menu, Music2, Music3, Music4 } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logoDacapo.webp"
              alt="Dacapo Logo"
              width={80}
              height={80}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#nuestra-historia"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              La Escuela
            </Link>
            <Link
              href="#clases"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Clases
            </Link>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link
                    href="#nuestra-historia"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    La Escuela
                  </Link>
                  <Link
                    href="#clases"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Clases
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-10 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Formamos músicos que buscan trascender
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              El Arte de la Música,
              <span className="text-primary">la Pasión de Enseñar</span>
            </h1>
            <h3 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
              Donde la música se aprende, se comparte y se ama.
            </h3>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              En Dacapo, enseñamos violín y piano con excelencia, compromiso y
              emoción. Formamos músicos sensibles y seguros, inspirados en la
              Filosofía Suzuki y guiados por un equipo docente apasionado.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mt-8">
              <Link
                href="https://wa.me/543512446077?text=Hola,%20quiero%20inscribirme%20en%20Dacapo."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6">
                  Sumate a Dacapo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Cards */}
        <div  className="container px-4 md:px-6 mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1: Violín */}
            <Card className="border-border/40 hover:border-primary/60 transition-colors flex flex-col md:flex-row">
              <div id="violin" className="md:w-1/3">
                <Image
                  src="/images/violin.webp"
                  alt="Clases de Violín"
                  width={400}
                  height={250}
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover h-full"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-2xl pt-4">Violín</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Clases individuales y grupales para todas las edades y
                    niveles. Aprendé a tocar el violín desde cero o perfeccioná
                    tu técnica con un enfoque musical, expresivo y progresivo.
                  </CardDescription>
                </CardContent>
              </div>
            </Card>

            {/* Card 2: Piano */}
            <Card className="border-border/40 hover:border-primary/60 transition-colors flex flex-col md:flex-row">
              <div id="piano" className="md:w-1/3">
                <Image
                  src="/images/piano.webp"
                  alt="Clases de Piano"
                  width={400}
                  height={250}
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover h-full"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-2xl pt-4">Piano</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Explorá el piano a través de un repertorio amplio: desde
                    Bach hasta Coldplay. Clases dinámicas que combinan técnica,
                    interpretación y disfrute
                  </CardDescription>
                </CardContent>
              </div>
            </Card>

            {/* Card 3: Clases Online */}
            <Card className="border-border/40 hover:border-primary/60 transition-colors flex flex-col md:flex-row">
              <div id="clases-online" className="md:w-1/3">
                <Image
                  src="/images/ilustracion5.webp"
                  alt="Clases Online"
                  width={400}
                  height={250}
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover h-full"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-2xl pt-4">Clases Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Estés donde estés, podés ser parte de Dacapo. Nuestras
                    clases online en vivo ofrecen la misma calidez, calidad y
                    cercanía que las clases presenciales.
                  </CardDescription>
                </CardContent>
              </div>
            </Card>

            {/* Card 4: Ensambles */}
            <Card className="border-border/40 hover:border-primary/60 transition-colors flex flex-col md:flex-row">
              <div id="ensambles" className="md:w-1/3">
                <Image
                  src="/images/ilustracion2.webp"
                  alt="Ensambles"
                  width={400}
                  height={250}
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover h-full"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-2xl pt-4">Ensambles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tocá en grupo, escuchá al otro, crecé con la música
                    compartida. En Dacapo, cada alumno tiene su lugar desde el
                    comienzo: siempre hay un ensamble adaptado a tu nivel. Las
                    clases grupales fortalecen el oído, el ritmo, la confianza y
                    el vínculo musical.
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestra Historia Section */}
      <section id="nuestra-historia" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image on left */}
            <div className="relative">
              <Image
                src="/images/nuestraHistoria.webp"
                alt="Nuestra Historia"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Text on right with gradient overlay */}
            <div className="relative p-8 -ml-8 md:-ml-16 bg-background md:bg-gradient-to-l from-background to-transparent">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Nuestra Historia y Trayectoria
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Dacapo es el resultado de más de 35 años de experiencia en la
                enseñanza del violín con Método Suzuki, respaldados por la
                docente Licenciada Leila Airut, reconocida por su amplia
                trayectoria en la formación musical y académica. Desde 2024, el
                estudio donde Leila ha dictado sus clases durante todos estos
                años se transforma y crece para consolidarse como Dacapo, un
                proyecto que nace a partir de una idea familiar y el compromiso
                de quienes colaboraron desde sus inicios.{" "}
              </p>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Gracias a esta base sólida, hoy contamos con un equipo de
                maestros comprometidos, profesionales y en constante
                crecimiento, que trabajan con pasión y dedicación para acompañar
                a cada alumno en su camino artístico y personal.
              </p>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                En nuestra escuela, la excelencia técnica se combina con un
                ambiente cálido y motivador, donde cada estudiante encuentra su
                propia voz y crece con alegría y confianza. Dacapo es un espacio
                pensado para quienes desean formarse con calidad, pero también
                para quienes buscan disfrutar y compartir la música.
              </p>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Te invitamos a formar parte de esta comunidad musical, donde
                aprender es un placer y cada nota es un paso hacia un
                crecimiento único.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación Section */}
      <section id="ubicacion" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              ¡Encuéntranos!
            </h2>
          </div>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.3822644539923!2d-64.2261889!3d-31.458669099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3e68c4ce8a9%3A0xbd767e29ff9ab636!2sDacapo!5e0!3m2!1ses!2sar!4v1752247306915!5m2!1ses!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Una formación integral para el músico de hoy
            </h2>
            <p className="text-xl text-muted-foreground">
              Ofrecemos todo lo que necesitas para crecer, desde clases
              personalizadas hasta ensambles grupales y conciertos.
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
                  Participa en nuestras clases sincrónicas desde cualquier parte
                  del mundo con la misma calidad que una clase presencial.
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
                  Explora desde Bach hasta los Beatles. Nuestro enfoque abarca
                  tanto la música clásica como la popular.
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
                  Aprende y crece junto a otros músicos en nuestros ensambles y
                  clases de teoría musical grupales.
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
                  Demuestra tu progreso y comparte tu talento en nuestros
                  conciertos y eventos semestrales.
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
                <Image
                  src="/images/logoDacapo.webp"
                  alt="Dacapo Logo"
                  width={70}
                  height={70}
                />
              </div>
              <p className="text-muted-foreground mb-6">
                Formamos músicos que buscan trascender.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaTiktok className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaFacebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaYoutube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaEnvelope className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-1 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">La Escuela</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link
                      href="#nuestra-historia"
                      className="hover:text-primary transition-colors"
                    >
                      Nuestra Historia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#ubicacion"
                      className="hover:text-primary transition-colors"
                    >
                      Ubicación
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/543512446077?text=Hola,%20quiero%20inscribirme%20en%20Dacapo."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Inscripciones
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Clases</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link
                      href="#violin"
                      className="hover:text-primary transition-colors"
                    >
                      Violín
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#piano"
                      className="hover:text-primary transition-colors"
                    >
                      Piano
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#clases-online"
                      className="hover:text-primary transition-colors"
                    >
                      Clases Online
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#ensambles"
                      className="hover:text-primary transition-colors"
                    >
                      Ensambles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 mt-12 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://sauren.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Sauren
              </a>
              . Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
