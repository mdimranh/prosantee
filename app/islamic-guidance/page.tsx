"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, BookOpen, Search, Calendar, User, Clock, MessageCircle, Download, Play, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IslamicGuidancePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const fatwas = [
    {
      id: 1,
      title: "Guidelines for Meeting Potential Spouse",
      scholar: "Sheikh Abdullah Al-Mahmoud",
      category: "Meeting & Interaction",
      date: "2024-01-15",
      views: 2847,
      summary:
        "Detailed guidance on how to conduct meetings with potential spouses in accordance with Islamic principles, including the role of mahram and appropriate conversation topics.",
      content: "In Islam, meeting a potential spouse should be conducted with proper Islamic etiquette...",
      tags: ["Meeting", "Mahram", "Halal", "Courtship"],
    },
    {
      id: 2,
      title: "The Role of Parents in Marriage Selection",
      scholar: "Dr. Aisha Rahman",
      category: "Family Involvement",
      date: "2024-01-10",
      views: 3521,
      summary:
        "Understanding the balance between parental guidance and personal choice in selecting a life partner according to Islamic teachings.",
      content: "The Quran and Sunnah provide clear guidance on the role of parents in marriage...",
      tags: ["Parents", "Choice", "Family", "Guidance"],
    },
    {
      id: 3,
      title: "Islamic Criteria for Choosing a Spouse",
      scholar: "Imam Muhammad Hassan",
      category: "Selection Criteria",
      date: "2024-01-05",
      views: 4156,
      summary:
        "The four main criteria mentioned in Islamic teachings for selecting a spouse: religion, character, family background, and compatibility.",
      content: "The Prophet (PBUH) said: 'A woman is married for four things...'",
      tags: ["Criteria", "Religion", "Character", "Compatibility"],
    },
    {
      id: 4,
      title: "Dua and Prayers for Finding a Righteous Spouse",
      scholar: "Sheikh Omar Al-Farisi",
      category: "Duas & Prayers",
      date: "2023-12-28",
      views: 5234,
      summary:
        "Collection of authentic duas and prayers from Quran and Sunnah for those seeking a righteous life partner.",
      content: "Allah says in the Quran: 'And those who pray, Our Lord! Grant unto us wives and offspring...'",
      tags: ["Dua", "Prayer", "Seeking", "Righteous"],
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Building a Strong Islamic Marriage Foundation",
      author: "Dr. Yasmin Ahmed",
      category: "Marriage Preparation",
      date: "2024-01-20",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
      summary:
        "Essential steps to build a marriage based on Islamic principles, including communication, mutual respect, and shared spiritual goals.",
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Mahr: Rights and Responsibilities",
      author: "Sheikh Ali Mansour",
      category: "Islamic Law",
      date: "2024-01-18",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      summary:
        "Comprehensive guide to understanding mahr (dower) in Islamic marriage, its significance, and practical considerations.",
    },
    {
      id: 3,
      title: "The Sunnah of Marriage: Following Prophet's Example",
      author: "Dr. Fatima Al-Zahra",
      category: "Sunnah & Hadith",
      date: "2024-01-15",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
      summary:
        "How the Prophet Muhammad (PBUH) approached marriage and the lessons we can learn for modern Muslim couples.",
    },
    {
      id: 4,
      title: "Dealing with Family Pressure in Marriage Decisions",
      author: "Counselor Amina Hassan",
      category: "Family Dynamics",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      summary:
        "Navigating family expectations while making personal choices in marriage, maintaining respect and Islamic values.",
    },
    {
      id: 5,
      title: "Pre-Marriage Counseling: An Islamic Perspective",
      author: "Dr. Ibrahim Malik",
      category: "Counseling",
      date: "2024-01-08",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=300",
      summary:
        "The importance of pre-marriage counseling in Islam and how it can strengthen the foundation of a marriage.",
    },
    {
      id: 6,
      title: "Islamic Wedding Traditions Around the World",
      author: "Prof. Khadija Omar",
      category: "Culture & Traditions",
      date: "2024-01-05",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=300",
      summary:
        "Exploring diverse Islamic wedding traditions from different cultures while maintaining core Islamic principles.",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "Islamic Marriage: A Complete Guide",
      speaker: "Sheikh Abdullah Rahman",
      duration: "45:30",
      views: "12.5K",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Complete Guide",
    },
    {
      id: 2,
      title: "Rights and Duties of Spouses in Islam",
      speaker: "Dr. Aisha Mahmoud",
      duration: "32:15",
      views: "8.7K",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Rights & Duties",
    },
    {
      id: 3,
      title: "Preparing for Marriage: Islamic Perspective",
      speaker: "Imam Omar Hassan",
      duration: "28:45",
      views: "15.2K",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Preparation",
    },
  ]

  const categories = [
    "All Categories",
    "Meeting & Interaction",
    "Family Involvement",
    "Selection Criteria",
    "Duas & Prayers",
    "Marriage Preparation",
    "Islamic Law",
    "Sunnah & Hadith",
    "Family Dynamics",
    "Counseling",
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
              <Link href="/search" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Find Matches
              </Link>
              <Link href="/islamic-guidance" className="text-emerald-600 font-medium">
                Islamic Guidance
              </Link>
              <Link href="/premium" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Premium
              </Link>
            </nav>
            <Link href="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-6">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Islamic Guidance</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Marriage Guidance from
            <span className="text-emerald-600 block">Islamic Scholars</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access authentic Islamic guidance on marriage, relationships, and family life from renowned scholars and
            experts. Find answers to your questions and strengthen your understanding of Islamic matrimony.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search fatwas, articles, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-emerald-500"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700">
              Search
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="fatwas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="fatwas" className="text-lg py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Fatwas & Rulings
            </TabsTrigger>
            <TabsTrigger value="articles" className="text-lg py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Articles & Guides
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-lg py-3">
              <Play className="w-5 h-5 mr-2" />
              Video Lectures
            </TabsTrigger>
          </TabsList>

          {/* Fatwas Tab */}
          <TabsContent value="fatwas">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Button
                          key={index}
                          variant={index === 0 ? "default" : "ghost"}
                          className={`w-full justify-start text-left ${
                            index === 0 ? "bg-emerald-600 hover:bg-emerald-700" : ""
                          }`}
                          size="sm"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Fatwas List */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {fatwas.map((fatwa) => (
                    <Card key={fatwa.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-emerald-600 cursor-pointer">
                              {fatwa.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {fatwa.scholar}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(fatwa.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {fatwa.views.toLocaleString()} views
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-800 ml-4">{fatwa.category}</Badge>
                        </div>

                        <p className="text-gray-700 mb-4">{fatwa.summary}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {fatwa.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Button className="bg-emerald-600 hover:bg-emerald-700">Read Full Fatwa</Button>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="w-4 h-4 mr-1" />
                              Save
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <div className="space-y-8">
              {/* Featured Article */}
              <Card className="overflow-hidden border-emerald-200 bg-emerald-50">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={articles[0].image || "/placeholder.svg"}
                      alt={articles[0].title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <Badge className="bg-emerald-600 text-white mb-4">Featured Article</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{articles[0].title}</h2>
                    <p className="text-gray-700 mb-4">{articles[0].summary}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {articles[0].author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {articles[0].readTime}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(articles[0].date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
                      Read Article
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.slice(1).map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Badge className="bg-blue-100 text-blue-800 mb-3">{article.category}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-emerald-600 cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Button size="lg" className="rounded-full w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100">
                        <Play className="w-8 h-8 text-gray-800 ml-1" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="bg-purple-100 text-purple-800 mb-3">{video.category}</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>{video.speaker}</span>
                      <span>{video.views} views</span>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-emerald-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-emerald-100" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Islamic Guidance</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Subscribe to receive weekly Islamic marriage guidance, new fatwas, and expert articles directly in your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
              <Button className="bg-white text-emerald-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
