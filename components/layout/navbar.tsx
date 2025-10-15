"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/logoDacapo.webp"
              alt="Dacapo Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#nuestra-historia"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            La Escuela
          </Link>
          <Link
            href="/#clases"
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
                  href="/#nuestra-historia"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  La Escuela
                </Link>
                <Link
                  href="/#clases"
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
  );
}
