"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Fala dekoracyjna */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-gray-100"
        >
          <path d="M0,0V46.29c47.36,22,104.42,29.14,158,17C230,44,284,4,339.09,2.25c50.6-1.63,95.5,28.47,146,35.54,63.28,8.83,117.81-17.66,178-28.91,82.52-14.69,168.39,7.27,245,33.88V0Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Lewa strona */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-2">PsiStyl</h3>
            <p className="mb-4 max-w-md">
              Miejsce, gdzie każdy pies staje się gwiazdą. Profesjonalna pielęgnacja z pasją od 2019 roku.
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-2xl hover:opacity-70 transition">📘</a>
              <a href="#" aria-label="Instagram" className="text-2xl hover:opacity-70 transition">📷</a>
              <a href="#" aria-label="Twitter" className="text-2xl hover:opacity-70 transition">🐦</a>
            </div>
          </div>

          {/* Prawa strona */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            {/* Nawigacja */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Nawigacja</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#about" className="hover:underline">O nas</a></li>
                <li><a href="#services" className="hover:underline">Usługi</a></li>
                <li><a href="#contact" className="hover:underline">Kontakt</a></li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Kontakt</h4>
              <ul className="space-y-1 text-sm">
                <li>ul. Psich Przyjaciół 123</li>
                <li>+48 123 456 789</li>
                <li>kontakt@psistyl.pl</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dolna stopka */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-sm text-center">
          &copy; 2025 PsiStyl. Wszystkie prawa zastrzeżone.{' '}
          <a href="/" className="underline hover:text-gray-600">Polityka prywatności</a> <br></br>

          <Link href={"https://rumcajzdev.netlify.app"} className="underline " target="_blank">
            Developed and designed by rumcajzdev
          </Link>
        </div>
      </div>
    </footer>
  )
}
