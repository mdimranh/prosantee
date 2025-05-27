"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Heart, Search, Filter, MapPin, GraduationCap, Briefcase, Star, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SearchPage() {
  const [filters, setFilters] = useState({
    ageRange: [22, 35],
    location: "",
    education: "",
    profession: "",
    sect: "",
    maritalStatus: "",
    height: "",
  })

  const [showFilters, setShowFilters] = useState(false)

  // Mock profile data
  const profiles = [
    {
      id: 1,
      name: "Aisha K.",
      age: 26,
      location: "London, UK",
      education: "Master's in Computer Science",
      profession: "Software Engineer",
      sect: "Sunni",
      height: "165 cm",
      image: "/placeholder.svg?height=300&width=300",
      verified: true,
      lastActive: "Online now",
      bio: "Practicing Muslim seeking a life partner who shares Islamic values and loves technology.",
      interests: ["Technology", "Reading", "Traveling", "Cooking"],
    },
    {
      id: 2,
      name: "Omar M.",
      age: 29,
      location: "Toronto, Canada",
      education: "Bachelor's in Medicine",
      profession: "Doctor",
      sect: "Sunni",
      height: "178 cm",
      image: "/placeholder.svg?height=300&width=300",
      verified: true,
      lastActive: "2 hours ago",
      bio: "Medical professional looking for a caring and understanding life partner.",
      interests: ["Medicine", "Sports", "Volunteering", "Family time"],
    },
    {
      id: 3,
      name: "Fatima A.",
      age: 24,
      location: "Dubai, UAE",
      education: "Bachelor's in Business",
      profession: "Marketing Manager",
      sect: "Sunni",
      height: "160 cm",
      image: "/placeholder.svg?height=300&width=300",
      verified: true,
      lastActive: "1 day ago",
      bio: "Family-oriented person seeking someone who values Islamic traditions and modern life.",
      interests: ["Business", "Art", "Photography", "Islamic studies"],
    },
    {
      id: 4,
      name: "Ahmed R.",
      age: 31,
      location: "New York, USA",
      education: "Master's in Engineering",
      profession: "Civil Engineer",
      sect: "Sunni",
      height: "182 cm",
      image: "/placeholder.svg?height=300&width=300",
      verified: true,
      lastActive: "3 hours ago",
      bio: "Engineer with strong Islamic values looking for a life partner to build a family.",
      interests: ["Engineering", "Islamic history", "Hiking", "Community service"],
    },
    {
      id: 5,
      name: "Khadija S.",
      age: 27,
      location: "Manchester, UK",
      education: "Master's in Education",
      profession: "Teacher",
      sect: "Sunni",
      height: "162 cm",
      image: "/placeholder.svg?height=300&width=300",
      verified: true,
      lastActive: "5 hours ago",
      bio: "Educator passionate about Islamic values and seeking a partner for a blessed marriage.",
      interests: ["Education", "Children", "Reading Quran", "Community work"],
    },
    {
      id: 6,
      name: "Yusuf H.",
      age: 28,
      location: "Sydney, Australia",
      education: "Bachelor's in Finance",
      profession: "Financial Analyst",
      sect: "Sunni",
      height: "175 cm",
      image: "/placeholder.svg?height=300&width=300",
      verified: true,
      lastActive: "1 hour ago",
      bio: "Finance professional seeking a practicing Muslim partner for a halal relationship.",
      interests: ["Finance", "Fitness", "Travel", "Islamic finance"],
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
              <Link href="/dashboard" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/matches" className="text-gray-700 hover:text-emerald-600 transition-colors">
                My Matches
              </Link>
              <Link href="/messages" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Messages
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Profile
              </Link>
            </nav>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Upgrade to Premium</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Search Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Age Range</Label>
                  <Slider
                    value={filters.ageRange}
                    onValueChange={(value) => setFilters({ ...filters, ageRange: value })}
                    max={60}
                    min={18}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{filters.ageRange[0]} years</span>
                    <span>{filters.ageRange[1]} years</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="education">Education</Label>
                  <Select
                    value={filters.education}
                    onValueChange={(value) => setFilters({ ...filters, education: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any education</SelectItem>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="profession">Profession</Label>
                  <Input
                    id="profession"
                    placeholder="Any profession"
                    value={filters.profession}
                    onChange={(e) => setFilters({ ...filters, profession: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="sect">Islamic Sect</Label>
                  <Select value={filters.sect} onValueChange={(value) => setFilters({ ...filters, sect: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any sect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any sect</SelectItem>
                      <SelectItem value="sunni">Sunni</SelectItem>
                      <SelectItem value="shia">Shia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select
                    value={filters.maritalStatus}
                    onValueChange={(value) => setFilters({ ...filters, maritalStatus: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any status</SelectItem>
                      <SelectItem value="never-married">Never Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Search className="w-4 h-4 mr-2" />
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Search Results ({profiles.length} profiles found)</h1>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="active">Recently Active</SelectItem>
                  <SelectItem value="age-asc">Age: Low to High</SelectItem>
                  <SelectItem value="age-desc">Age: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profiles.map((profile) => (
                <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={profile.image || "/placeholder.svg"}
                      alt={profile.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {profile.verified && (
                      <Badge className="absolute top-3 left-3 bg-emerald-600">
                        <Star className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3">
                      <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        {profile.lastActive}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{profile.name}</h3>
                      <span className="text-lg font-medium text-emerald-600">{profile.age} years</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{profile.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="text-sm">{profile.education}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="text-sm">{profile.profession}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{profile.bio}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {profile.interests.slice(0, 3).map((interest, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                      {profile.interests.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{profile.interests.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        <Heart className="w-4 h-4 mr-2" />
                        Express Interest
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
