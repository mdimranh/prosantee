"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Heart,
  MessageCircle,
  Share2,
  Flag,
  MapPin,
  GraduationCap,
  Briefcase,
  Calendar,
  Shield,
  Phone,
  Video,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfileDetailsPage({ params }: { params: { id: string } }) {
  const [showContact, setShowContact] = useState(false)
  const [proposalSent, setProposalSent] = useState(false)
  const [proposalMessage, setProposalMessage] = useState("")

  // Mock profile data
  const profile = {
    id: params.id,
    name: "Aisha Rahman",
    age: 26,
    location: "London, UK",
    education: "Master's in Computer Science",
    profession: "Software Engineer",
    sect: "Sunni",
    madhab: "Hanafi",
    height: "165 cm",
    maritalStatus: "Never Married",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    verified: true,
    lastActive: "Online now",
    profileViews: 234,
    compatibility: 92,

    // Personal Information
    personalInfo: {
      dateOfBirth: "1998-03-15",
      languages: ["English", "Arabic", "Urdu"],
      nationality: "British",
      ethnicity: "Pakistani",
      willingToRelocate: "Yes",
      children: "None",
      wantsChildren: "Yes, 2-3",
    },

    // Islamic Background
    islamicInfo: {
      prayerFrequency: "5 times daily",
      hijabWearing: "Always",
      islamicEducation: "Moderate (Islamic courses)",
      halalFoodStrictness: "Very Strict",
      mosqueAttendance: "Regularly",
      quranRecitation: "Daily",
      islamicKnowledge: "Intermediate",
      islamicActivities: "Regularly participates",
    },

    // Family Information
    familyInfo: {
      fatherOccupation: "Engineer",
      motherOccupation: "Teacher",
      siblings: "2 sisters, 1 brother",
      familyType: "Nuclear Family",
      familyIslamicPractice: "Very Practicing",
      familyOpenness: "Open to different cultures",
      familyFinancialStatus: "Comfortable",
    },

    // Lifestyle
    lifestyle: {
      hobbies: ["Reading", "Cooking", "Photography", "Traveling", "Islamic studies"],
      exerciseHabits: "Regularly",
      smokingDrinking: "Never",
      dietaryPreferences: "Halal only",
      personalityTraits: ["Kind", "Ambitious", "Family-oriented", "Spiritual"],
    },

    // Partner Preferences
    partnerPreferences: {
      ageRange: "25-32",
      education: "Bachelor's or above",
      profession: "Any professional field",
      location: "UK or willing to relocate",
      islamicKnowledge: "Moderate to extensive",
      familyBackground: "Practicing Muslim family",
      personalityTraits: "Kind, respectful, family-oriented",
    },

    // About sections
    aboutMe:
      "Assalamu Alaikum! I'm a practicing Muslim software engineer who values both my faith and career. I believe in maintaining a balance between modern life and Islamic principles. I'm looking for a life partner who shares similar values and is ready to build a beautiful Islamic family together. I enjoy learning about Islam, cooking traditional foods, and spending time with family.",

    lookingFor:
      "I'm seeking a practicing Muslim brother who is kind, respectful, and family-oriented. Someone who prays regularly, has good Islamic knowledge, and wants to grow together in faith. Education and profession are important, but character and Islamic values matter most to me. I hope to find someone who will be my best friend and partner in both this life and the hereafter, InshaAllah.",

    // Contact preferences
    contactPreferences: {
      preferredContact: "Through family",
      familyInvolvement: "Required",
      meetingPreference: "With mahram present",
      communicationStyle: "Respectful and Islamic",
    },
  }

  const handleSendProposal = () => {
    setProposalSent(true)
    // Here you would typically send the proposal to the backend
    console.log("Proposal sent:", proposalMessage)
  }

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
            <div className="flex items-center space-x-4">
              <Link href="/search">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <Image
                      src={profile.images[0] || "/placeholder.svg"}
                      alt={profile.name}
                      width={200}
                      height={200}
                      className="w-48 h-48 object-cover rounded-lg mx-auto"
                    />
                    {profile.verified && (
                      <Badge className="absolute top-2 left-2 bg-emerald-600">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                        <p className="text-lg text-gray-600">{profile.age} years old</p>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800 text-lg px-3 py-1">
                        {profile.compatibility}% Match
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span>{profile.education}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{profile.profession}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{profile.maritalStatus}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <Eye className="w-4 h-4" />
                      <span>{profile.profileViews} profile views</span>
                      <span>•</span>
                      <span>{profile.lastActive}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {profile.lifestyle.personalityTraits.map((trait, index) => (
                        <Badge key={index} variant="secondary">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="islamic">Islamic</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{profile.aboutMe}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What I'm Looking For</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{profile.lookingFor}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Languages</Label>
                        <p className="text-gray-900">{profile.personalInfo.languages.join(", ")}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Nationality</Label>
                        <p className="text-gray-900">{profile.personalInfo.nationality}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Ethnicity</Label>
                        <p className="text-gray-900">{profile.personalInfo.ethnicity}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Willing to Relocate</Label>
                        <p className="text-gray-900">{profile.personalInfo.willingToRelocate}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Children</Label>
                        <p className="text-gray-900">{profile.personalInfo.children}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Wants Children</Label>
                        <p className="text-gray-900">{profile.personalInfo.wantsChildren}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="islamic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Islamic Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Sect</Label>
                        <p className="text-gray-900">{profile.sect}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Madhab</Label>
                        <p className="text-gray-900">{profile.madhab}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Prayer Frequency</Label>
                        <p className="text-gray-900">{profile.islamicInfo.prayerFrequency}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Hijab Wearing</Label>
                        <p className="text-gray-900">{profile.islamicInfo.hijabWearing}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Islamic Education</Label>
                        <p className="text-gray-900">{profile.islamicInfo.islamicEducation}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Halal Food Strictness</Label>
                        <p className="text-gray-900">{profile.islamicInfo.halalFoodStrictness}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Mosque Attendance</Label>
                        <p className="text-gray-900">{profile.islamicInfo.mosqueAttendance}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Quran Recitation</Label>
                        <p className="text-gray-900">{profile.islamicInfo.quranRecitation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="family" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Family Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Father's Occupation</Label>
                        <p className="text-gray-900">{profile.familyInfo.fatherOccupation}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Mother's Occupation</Label>
                        <p className="text-gray-900">{profile.familyInfo.motherOccupation}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Siblings</Label>
                        <p className="text-gray-900">{profile.familyInfo.siblings}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Family Type</Label>
                        <p className="text-gray-900">{profile.familyInfo.familyType}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Family's Islamic Practice</Label>
                        <p className="text-gray-900">{profile.familyInfo.familyIslamicPractice}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Cultural Openness</Label>
                        <p className="text-gray-900">{profile.familyInfo.familyOpenness}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lifestyle" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lifestyle & Interests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Hobbies & Interests</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {profile.lifestyle.hobbies.map((hobby, index) => (
                            <Badge key={index} variant="secondary">
                              {hobby}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Exercise Habits</Label>
                          <p className="text-gray-900">{profile.lifestyle.exerciseHabits}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Smoking/Drinking</Label>
                          <p className="text-gray-900">{profile.lifestyle.smokingDrinking}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Dietary Preferences</Label>
                          <p className="text-gray-900">{profile.lifestyle.dietaryPreferences}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Partner Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Preferred Age Range</Label>
                        <p className="text-gray-900">{profile.partnerPreferences.ageRange} years</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Education</Label>
                        <p className="text-gray-900">{profile.partnerPreferences.education}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Profession</Label>
                        <p className="text-gray-900">{profile.partnerPreferences.profession}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Location</Label>
                        <p className="text-gray-900">{profile.partnerPreferences.location}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Islamic Knowledge</Label>
                        <p className="text-gray-900">{profile.partnerPreferences.islamicKnowledge}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Family Background</Label>
                        <p className="text-gray-900">{profile.partnerPreferences.familyBackground}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Preferred Contact Method</Label>
                        <p className="text-gray-900">{profile.contactPreferences.preferredContact}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Family Involvement</Label>
                        <p className="text-gray-900">{profile.contactPreferences.familyInvolvement}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Meeting Preference</Label>
                        <p className="text-gray-900">{profile.contactPreferences.meetingPreference}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Communication Style</Label>
                        <p className="text-gray-900">{profile.contactPreferences.communicationStyle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" disabled={proposalSent}>
                      <Heart className="w-4 h-4 mr-2" />
                      {proposalSent ? "Proposal Sent" : "Send Proposal"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Send Marriage Proposal</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="message">Personal Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Write a respectful message introducing yourself and your intentions..."
                          value={proposalMessage}
                          onChange={(e) => setProposalMessage(e.target.value)}
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={handleSendProposal} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                          Send Proposal
                        </Button>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            Cancel
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full" size="lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <Button variant="outline" className="w-full" size="lg" onClick={() => setShowContact(!showContact)}>
                  {showContact ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  {showContact ? "Hide Contact" : "View Contact"}
                </Button>

                {showContact && (
                  <Card className="bg-emerald-50 border-emerald-200">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                          <span className="text-sm">+44 7XXX XXXXXX</span>
                        </div>
                        <div className="flex items-center">
                          <Video className="w-4 h-4 mr-2 text-emerald-600" />
                          <span className="text-sm">Video call available</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Contact information is only visible to verified members
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Flag className="w-4 h-4 mr-2" />
                    Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {profile.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${profile.name} photo ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compatibility Score */}
            <Card>
              <CardHeader>
                <CardTitle>Compatibility Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{profile.compatibility}%</div>
                    <p className="text-sm text-gray-600">Overall Compatibility</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Islamic Values</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lifestyle</span>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Family Background</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Education & Career</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Islamic Quote */}
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6 text-center">
                <div className="text-emerald-800 mb-3">
                  <Heart className="w-8 h-8 mx-auto" />
                </div>
                <blockquote className="text-sm italic text-emerald-700 mb-2">
                  "When someone whose religion and character you are pleased with proposes to you, then marry him."
                </blockquote>
                <cite className="text-xs text-emerald-600">- Prophet Muhammad (PBUH)</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
