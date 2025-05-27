"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Heart, Crown, Check, Star, MessageCircle, Eye, Shield, Zap, Users, Phone, Video, Filter } from "lucide-react"
import Link from "next/link"

export default function PremiumPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started",
      features: [
        "Create detailed profile",
        "Browse limited profiles",
        "Send 5 interests per month",
        "Basic search filters",
        "Community support",
      ],
      limitations: ["Limited profile views", "Basic matching algorithm", "No priority support"],
      popular: false,
      color: "gray",
    },
    {
      name: "Gold",
      price: { monthly: 29, yearly: 290 },
      description: "Most popular choice for serious seekers",
      features: [
        "Everything in Basic",
        "Unlimited profile views",
        "Advanced search filters",
        "Send unlimited interests",
        "See who viewed your profile",
        "Priority customer support",
        "Enhanced profile visibility",
        "Islamic compatibility matching",
      ],
      limitations: [],
      popular: true,
      color: "emerald",
    },
    {
      name: "Platinum",
      price: { monthly: 49, yearly: 490 },
      description: "Premium experience with exclusive features",
      features: [
        "Everything in Gold",
        "Dedicated relationship advisor",
        "Video call scheduling",
        "Family introduction assistance",
        "Profile verification priority",
        "Exclusive events access",
        "Advanced Islamic matching",
        "Marriage preparation courses",
        "Nikah ceremony planning assistance",
      ],
      limitations: [],
      popular: false,
      color: "purple",
    },
  ]

  const premiumFeatures = [
    {
      icon: Eye,
      title: "Advanced Profile Analytics",
      description: "See detailed insights about who viewed your profile and when",
    },
    {
      icon: Filter,
      title: "Enhanced Search Filters",
      description: "Filter by Islamic practices, family background, and lifestyle preferences",
    },
    {
      icon: MessageCircle,
      title: "Unlimited Messaging",
      description: "Connect with unlimited matches without restrictions",
    },
    {
      icon: Video,
      title: "Video Introduction",
      description: "Create video profiles and schedule chaperoned video calls",
    },
    {
      icon: Shield,
      title: "Priority Verification",
      description: "Get your profile verified faster with priority processing",
    },
    {
      icon: Users,
      title: "Family Portal Access",
      description: "Special portal for family members to participate in the process",
    },
    {
      icon: Star,
      title: "Islamic Compatibility AI",
      description: "Advanced algorithm matching based on Islamic values and practices",
    },
    {
      icon: Phone,
      title: "Relationship Counseling",
      description: "Access to Islamic marriage counselors and relationship experts",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-emerald-800">NikahConnect</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Find Matches
              </Link>
              <Link href="/islamic-guidance" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Islamic Guidance
              </Link>
            </nav>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Crown className="w-8 h-8 text-yellow-500" />
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Premium Plans</Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Match
            <span className="text-emerald-600 block">Faster & Better</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Upgrade to premium and unlock advanced Islamic matching, unlimited messaging, and exclusive features
            designed to help you find your ideal life partner.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? "text-emerald-600 font-semibold" : "text-gray-600"}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-emerald-600" />
            <span className={`text-lg ${isYearly ? "text-emerald-600 font-semibold" : "text-gray-600"}`}>Yearly</span>
            {isYearly && <Badge className="bg-green-100 text-green-800 ml-2">Save 17%</Badge>}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular ? "border-emerald-500 shadow-xl scale-105" : "border-gray-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-emerald-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.color === "emerald"
                      ? "bg-emerald-100"
                      : plan.color === "purple"
                        ? "bg-purple-100"
                        : "bg-gray-100"
                  }`}
                >
                  {plan.color === "emerald" ? (
                    <Crown className="w-8 h-8 text-emerald-600" />
                  ) : plan.color === "purple" ? (
                    <Star className="w-8 h-8 text-purple-600" />
                  ) : (
                    <Heart className="w-8 h-8 text-gray-600" />
                  )}
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-900">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-lg font-normal text-gray-600">/{isYearly ? "year" : "month"}</span>
                </div>
                {isYearly && plan.price.yearly > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    Save ${plan.price.monthly * 12 - plan.price.yearly} per year
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full mt-6 ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : plan.color === "purple"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-600 hover:bg-gray-700"
                  }`}
                  size="lg"
                >
                  {plan.name === "Basic" ? "Current Plan" : `Choose ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the exclusive features that make finding your soulmate easier and more meaningful
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-emerald-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how premium features helped these couples find their perfect match
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Crown className="w-6 h-6 text-yellow-500 mr-2" />
                  <Badge className="bg-yellow-100 text-yellow-800">Premium Success</Badge>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "The Islamic compatibility matching was incredible. We found each other through the advanced filters
                  and our families connected through the family portal. Alhamdulillah!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Ahmed & Fatima</p>
                    <p className="text-sm text-gray-600">Married 2024 • Gold Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-purple-500 mr-2" />
                  <Badge className="bg-purple-100 text-purple-800">Platinum Success</Badge>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "The relationship advisor guided us through the entire process. The video calls with family
                  supervision made everything so comfortable and halal."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Omar & Aisha</p>
                    <p className="text-sm text-gray-600">Married 2024 • Platinum Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Is the premium subscription halal?</h3>
                <p className="text-gray-600">
                  Yes, absolutely. Our premium features are designed to facilitate halal interactions and family
                  involvement in the matrimony process, following Islamic guidelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. Your premium features will remain active until the
                  end of your billing period.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely with
                  industry-standard encryption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-emerald-600 rounded-2xl p-12 text-white">
          <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Soulmate?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of premium members who have found their perfect match through our advanced Islamic matrimony
            platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Upgrade to Gold
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-emerald-700 text-lg px-8 py-4"
            >
              <Star className="w-5 h-5 mr-2" />
              Try Platinum
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
