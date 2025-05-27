import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Search, MessageCircle, Star, CheckCircle, Globe, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-emerald-800">NikahConnect</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/search" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Find Matches
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="/success-stories" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Success Stories
              </Link>
              <Link href="/islamic-guidance" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Islamic Guidance
              </Link>
              <Link href="/help" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Help
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Join Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              Trusted by 500,000+ Muslims Worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect
              <span className="text-emerald-600 block">Halal Match</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with compatible Muslim singles in a safe, Islamic environment. Start your journey towards a
              blessed marriage with complete privacy and family involvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4"
                >
                  Browse Profiles
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Halal</h3>
                <p className="text-gray-600">Islamic principles guide every interaction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Family Involvement</h3>
                <p className="text-gray-600">Wali and family participation encouraged</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Privacy</h3>
                <p className="text-gray-600">Your information is secure and protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose NikahConnect?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the importance of finding a life partner who shares your faith and values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Search className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Advanced Matching</h3>
                <p className="text-gray-600">
                  Filter by Islamic practices, sect, education, profession, and family background
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Chaperoned Communication</h3>
                <p className="text-gray-600">Secure messaging with family oversight options and Islamic guidelines</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
                <p className="text-gray-600">
                  All profiles are manually verified for authenticity and Islamic compliance
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Community</h3>
                <p className="text-gray-600">Connect with Muslims worldwide while respecting cultural differences</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Islamic Guidance</h3>
                <p className="text-gray-600">Access to Islamic marriage counselors and relationship guidance</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
                <p className="text-gray-600">Join thousands of couples who found their soulmate through our platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real couples, real love stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Couple"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Ahmed & Fatima</h4>
                    <p className="text-sm text-gray-600">Married 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Alhamdulillah, we found each other through NikahConnect. The platform's Islamic approach made our
                  families comfortable with the process."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Couple"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Omar & Aisha</h4>
                    <p className="text-sm text-gray-600">Married 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The detailed profiles helped us understand each other's Islamic practices and family values before
                  meeting."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Couple"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Yusuf & Khadija</h4>
                    <p className="text-sm text-gray-600">Married 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "May Allah bless this platform. We're grateful for the halal way to find our life partner with family
                  involvement."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Soulmate?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims who have found their perfect match through our Islamic matrimony platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
                Create Free Profile
              </Button>
            </Link>
            <Link href="/search">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-emerald-700 text-lg px-8 py-4"
              >
                Browse Matches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">NikahConnect</span>
              </div>
              <p className="text-gray-400 mb-4">
                The trusted Islamic matrimony platform connecting Muslim hearts worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/search" className="hover:text-white transition-colors">
                    Find Matches
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white transition-colors">
                    Join Free
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/islamic-guidelines" className="hover:text-white transition-colors">
                    Islamic Guidelines
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">Email: support@nikahconnect.com</p>
              <p className="text-gray-400 mb-4">Phone: +1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">
                "And among His signs is that He created for you mates from among yourselves, that you may dwell in
                tranquility with them" - Quran 30:21
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NikahConnect. All rights reserved. Built with Islamic values at heart.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
