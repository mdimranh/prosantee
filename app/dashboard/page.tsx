"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, MessageCircle, Star, Eye, Settings, Bell, Gift, Crown, TrendingUp, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  const stats = {
    profileViews: 127,
    interests: 23,
    messages: 8,
    matches: 12,
  }

  const recentActivity = [
    { type: "view", user: "Aisha K.", time: "2 hours ago", avatar: "/placeholder.svg?height=40&width=40" },
    { type: "interest", user: "Omar M.", time: "5 hours ago", avatar: "/placeholder.svg?height=40&width=40" },
    { type: "message", user: "Fatima A.", time: "1 day ago", avatar: "/placeholder.svg?height=40&width=40" },
    { type: "match", user: "Ahmed R.", time: "2 days ago", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const suggestions = [
    {
      id: 1,
      name: "Khadija S.",
      age: 27,
      location: "Manchester, UK",
      compatibility: 92,
      image: "/placeholder.svg?height=200&width=200",
      verified: true,
    },
    {
      id: 2,
      name: "Yusuf H.",
      age: 28,
      location: "Sydney, Australia",
      compatibility: 88,
      image: "/placeholder.svg?height=200&width=200",
      verified: true,
    },
    {
      id: 3,
      name: "Maryam T.",
      age: 25,
      location: "Istanbul, Turkey",
      compatibility: 85,
      image: "/placeholder.svg?height=200&width=200",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-emerald-800">NikahConnect</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="text-emerald-600 font-medium">
                Dashboard
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Find Matches
              </Link>
              <Link href="/matches" className="text-gray-700 hover:text-emerald-600 transition-colors">
                My Matches
              </Link>
              <Link href="/messages" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Messages
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Link href="/profile">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-emerald-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assalamu Alaikum, Ahmed!</h1>
          <p className="text-gray-600">
            Welcome back to your matrimony journey. Here's what's happening with your profile.
          </p>
        </div>

        {/* Premium Upgrade Banner */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Crown className="w-12 h-12 text-yellow-300" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Upgrade to Premium</h3>
                  <p className="text-emerald-100">Get unlimited messaging, advanced filters, and priority support</p>
                </div>
              </div>
              <Button className="bg-white text-emerald-600 hover:bg-gray-100">
                <Gift className="w-4 h-4 mr-2" />
                Upgrade Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stats.profileViews}</div>
                  <div className="text-sm text-gray-600">Profile Views</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stats.interests}</div>
                  <div className="text-sm text-gray-600">Interests</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stats.messages}</div>
                  <div className="text-sm text-gray-600">Messages</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stats.matches}</div>
                  <div className="text-sm text-gray-600">Matches</div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Profile Strength</span>
                    <span className="text-sm text-gray-600">85%</span>
                  </div>
                  <Progress value={85} className="w-full" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">✓ Basic Information</span>
                      <span className="text-green-600">Complete</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">✓ Photos Added</span>
                      <span className="text-green-600">Complete</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-600">⚠ Family Information</span>
                      <span className="text-orange-600">Incomplete</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">✓ Partner Preferences</span>
                      <span className="text-green-600">Complete</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">Complete Profile</Button>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Suggested Matches
                  </span>
                  <Link href="/search" className="text-emerald-600 hover:underline text-sm">
                    View All
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {suggestions.map((match) => (
                    <Card key={match.id} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src={match.image || "/placeholder.svg"}
                          alt={match.name}
                          width={200}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        {match.verified && (
                          <Badge className="absolute top-2 left-2 bg-emerald-600">
                            <Star className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-white text-emerald-600">{match.compatibility}% Match</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{match.name}</h4>
                        <p className="text-sm text-gray-600">
                          {match.age} years • {match.location}
                        </p>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                            <Heart className="w-3 h-3 mr-1" />
                            Interest
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image
                        src={activity.avatar || "/placeholder.svg"}
                        alt={activity.user}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                        <p className="text-xs text-gray-500">
                          {activity.type === "view" && "viewed your profile"}
                          {activity.type === "interest" && "expressed interest"}
                          {activity.type === "message" && "sent you a message"}
                          {activity.type === "match" && "matched with you"}
                        </p>
                      </div>
                      <div className="text-xs text-gray-400">{activity.time}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activity
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/search">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Find New Matches
                  </Button>
                </Link>
                <Link href="/messages">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Check Messages
                  </Button>
                </Link>
                <Link href="/islamic-guidance">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Islamic Guidance
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </Link>
                <Link href="/help">
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Get Help
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Islamic Quote */}
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6 text-center">
                <div className="text-emerald-800 mb-3">
                  <Heart className="w-8 h-8 mx-auto" />
                </div>
                <blockquote className="text-sm italic text-emerald-700 mb-2">
                  "And among His signs is that He created for you mates from among yourselves, that you may dwell in
                  tranquility with them, and He has put love and mercy between your hearts."
                </blockquote>
                <cite className="text-xs text-emerald-600">- Quran 30:21</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
