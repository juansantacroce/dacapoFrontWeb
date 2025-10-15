"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Navbar } from "@/components/layout/navbar";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function PromoEntradaGratisPage() {
  const ticketingUrl = "https://www.edenentradas.ar/event/46092_4FZR08UNU4MY7Z1NGTKDMUK856E2VAI289K5WW0R";
  const whatsappNumber = "543512446077";
  const whatsappMessage = encodeURIComponent("Quiero acceder a mi entrada gratis, mis ubicaciones seleccionadas son: (ubicaciones completadas por el cliente - Fila y asientos)");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramUrl = "https://www.instagram.com/dacapo.musicos/?hl=es-la";
  const youtubeUrl = "https://www.youtube.com/@DaCapo.Musicos";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Sección 1: Título y Video */}
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tight">¡Tu entrada gratis te espera!</CardTitle>
              <CardDescription className="mt-2 text-lg text-muted-foreground">
                Descubre cómo obtener tu entrada de regalo para el concierto.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <AspectRatio ratio={9 / 16}>
                  <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <p>Video explicativo vertical aquí</p>
                    {/* Placeholder para el video. Cuando esté disponible, reemplazar con:
                    <video controls playsInline autoPlay muted loop className="w-full h-full object-cover">
                      <source src="/path/to/your/vertical-video.mp4" type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                    */}
                  </div>
                </AspectRatio>
              </div>
              <p className="mt-4 text-sm text-center text-muted-foreground">
                Mira este breve video para entender cómo funciona la promoción.
              </p>
            </CardContent>
          </Card>

          {/* Sección 2: Resumen del camino y botones */}
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Pasos para tu entrada gratis</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                Sigue estos sencillos pasos para asegurar tu beneficio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                  <p className="text-base">
                    Haz click en "Ver ubicaciones disponibles" y elige tus asientos en la página del evento.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                  <p className="text-base">
                    Regresa a esta página una vez que hayas decidido tus ubicaciones.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                  <p className="text-base">
                    Presiona "Ya seleccioné mis ubicaciones" para enviarnos un mensaje con tus datos y coordinar tu entrada gratis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Button asChild className="w-full py-6 text-lg">
                  <a href={ticketingUrl} target="_blank" rel="noopener noreferrer">
                    Ver ubicaciones disponibles
                  </a>
                </Button>
                <Button asChild className="w-full py-6 text-lg" variant="secondary">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Ya seleccioné mis ubicaciones
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sección 3: Redes Sociales */}
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Síguenos en nuestras redes</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                Mantente al tanto de todas las novedades y eventos.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center space-x-6">
              <Button asChild variant="outline" className="h-12 w-12 p-0">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-7 w-7" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 w-12 p-0">
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube className="h-7 w-7" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 w-12 p-0">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp className="h-7 w-7" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
