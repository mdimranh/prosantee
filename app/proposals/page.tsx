"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Heart,
  CheckCircle,
  XCircle,
  Clock,
  MessageCircle,
  Eye,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowLeft,
  Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProposalsPage() {
  const [responseMessage, setResponseMessage] = useState("")
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null)

  // Mock proposals data
  const receivedProposals = [
    {
      id: 1,
      from: {
        name: "Omar Hassan",
        age: 29,
        location: "Toronto, Canada",
        education: "Master's in Engineering",
        profession: "Civil Engineer",
        image: "/placeholder.svg?height=100&width=100",
        verified: true,
      },
      message:
        "Assalamu Alaikum Sister. I came across your profile and was impressed by your Islamic values and professional achievements. I would like to express my interest in getting to know you better for the purpose of marriage. My family and I are serious about this proposal. May Allah guide us both.",
      sentDate: "2024-01-20",
      status: "pending",
      compatibility: 88,
    },
    {
      id: 2,
      from: {
        name: "Ahmed Malik",
        age: 31,
        location: "London, UK",
        education: "PhD in Medicine",
        profession: "Doctor",
        image: "/placeholder.svg?height=100&width=100",
        verified: true,
      },
      message:
        "Assalamu Alaikum. After reviewing your profile, I believe we share similar values and life goals. I am looking for a practicing Muslim sister who values family and faith. I would be honored if you would consider my proposal for marriage. JazakAllahu Khair.",
      sentDate: "2024-01-18",
      status: "pending",
      compatibility: 92,
    },
    {
      id: 3,
      from: {
        name: "Yusuf Rahman",
        age: 27,
        location: "Manchester, UK",
        education: "Bachelor's in Business",
        profession: "Business Analyst",
        image: "/placeholder.svg?height=100&width=100",
        verified: false,
      },
      message:
        "Assalamu Alaikum. I am interested in your profile and would like to propose for marriage. Please let me know if you are interested.",
      sentDate: "2024-01-15",
      status: "accepted",
      compatibility: 75,
    },
  ]

  const sentProposals = [
    {
      id: 4,
      to: {
        name: "Fatima Al-Zahra",
        age: 24,
        location: "Dubai, UAE",
        education: "Master's in Psychology",
        profession: "Counselor",
        image: "/placeholder.svg?height=100&width=100",
        verified: true,
      },
      message:
        "Assalamu Alaikum Sister. I hope this message finds you in good health and Iman. After carefully reviewing your profile, I am impressed by your dedication to Islam and your professional achievements. I would like to express my sincere interest in getting to know you for the purpose of marriage.",
      sentDate: "2024-01-22",
      status: "pending",
      compatibility: 90,
    },
    {
      id: 5,
      to: {
        name: "Khadija Omar",
        age: 26,
        location: "Birmingham, UK",
        education: "Bachelor's in Education",
        profession: "Teacher",
        image: "/placeholder.svg?height=100&width=100",
        verified: true,
      },
      message:
        "Assalamu Alaikum. I came across your profile and was impressed by your Islamic values and dedication to education. I believe we share similar life goals and would like to propose for marriage. May Allah guide us both in this important decision.",
      sentDate: "2024-01-19",
      status: "declined",
      compatibility: 85,
    },
  ]

  const handleAcceptProposal = (proposalId: number) => {
    // Handle accept proposal logic
    console.log("Accepting proposal:", proposalId, "Response:", responseMessage)
    setResponseMessage("")
    setSelectedProposal(null)
  }

  const handleDeclineProposal = (proposalId: number) => {
    // Handle decline proposal logic
    console.log("Declining proposal:", proposalId, "Response:", responseMessage)
    setResponseMessage("")
    setSelectedProposal(null)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      case "accepted":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Accepted
          </Badge>
        )
      case "declined":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Declined
          </Badge>
        )
      default:
        return null
    }
  }

  const ProposalCard = ({ proposal, type }: { proposal: any; type: "received" | "sent" }) => {
    const person = type === "received" ? proposal.from : proposal.to

    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative">
              <Image
                src={person.image || "/placeholder.svg"}
                alt={person.name}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-lg"
              />
              {person.verified && (
                <Badge className="absolute -top-1 -right-1 bg-emerald-600 text-xs p-1">
                  <CheckCircle className="w-3 h-3" />
                </Badge>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800">{proposal.compatibility}% Match</Badge>
                  {getStatusBadge(proposal.status)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {person.age} years
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {person.location}
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  {person.education}
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-3 h-3 mr-1" />
                  {person.profession}
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{proposal.message}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {type === "received" ? "Received" : "Sent"} on {new Date(proposal.sentDate).toLocaleDateString()}
                </span>

                <div className="flex gap-2">
                  <Link href={`/profile/${proposal.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="w-3 h-3 mr-1" />
                      View Profile
                    </Button>
                  </Link>

                  {type === "received" && proposal.status === "pending" && (
                    <>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => setSelectedProposal(proposal.id)}
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Accept
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Accept Marriage Proposal</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-gray-600">
                              You are about to accept the marriage proposal from {person.name}. You can include a
                              personal message with your response.
                            </p>
                            <div>
                              <Label htmlFor="acceptMessage">Response Message (Optional)</Label>
                              <Textarea
                                id="acceptMessage"
                                placeholder="Write a respectful response message..."
                                value={responseMessage}
                                onChange={(e) => setResponseMessage(e.target.value)}
                                rows={3}
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => handleAcceptProposal(proposal.id)}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Accept Proposal
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

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedProposal(proposal.id)}>
                            <XCircle className="w-3 h-3 mr-1" />
                            Decline
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Decline Marriage Proposal</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-gray-600">
                              You are about to decline the marriage proposal from {person.name}. Please be respectful in
                              your response.
                            </p>
                            <div>
                              <Label htmlFor="declineMessage">Response Message (Optional)</Label>
                              <Textarea
                                id="declineMessage"
                                placeholder="Write a respectful decline message..."
                                value={responseMessage}
                                onChange={(e) => setResponseMessage(e.target.value)}
                                rows={3}
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => handleDeclineProposal(proposal.id)}
                                variant="destructive"
                                className="flex-1"
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Decline Proposal
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
                    </>
                  )}

                  {type === "received" && proposal.status === "accepted" && (
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Message
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
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
              <Link href="/dashboard">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Marriage Proposals</h1>
            <p className="text-gray-600">
              Manage your marriage proposals and responses in accordance with Islamic principles.
            </p>
          </div>

          <Tabs defaultValue="received" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="received" className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Received ({receivedProposals.length})
              </TabsTrigger>
              <TabsTrigger value="sent" className="flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Sent ({sentProposals.length})
              </TabsTrigger>
            </TabsList>

            {/* Received Proposals */}
            <TabsContent value="received" className="space-y-6">
              {receivedProposals.length > 0 ? (
                <div className="space-y-4">
                  {receivedProposals.map((proposal) => (
                    <ProposalCard key={proposal.id} proposal={proposal} type="received" />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Proposals Yet</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't received any marriage proposals yet. Keep your profile active and complete to attract
                      potential matches.
                    </p>
                    <Link href="/search">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Browse Profiles</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Sent Proposals */}
            <TabsContent value="sent" className="space-y-6">
              {sentProposals.length > 0 ? (
                <div className="space-y-4">
                  {sentProposals.map((proposal) => (
                    <ProposalCard key={proposal.id} proposal={proposal} type="sent" />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Send className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Proposals Sent</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't sent any marriage proposals yet. Browse profiles and send proposals to potential
                      matches.
                    </p>
                    <Link href="/search">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Find Matches</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Islamic Guidance */}
          <Card className="mt-8 bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                    Islamic Guidance on Marriage Proposals
                  </h3>
                  <div className="space-y-2 text-emerald-700">
                    <p className="text-sm">• Always involve your wali (guardian) in the proposal process</p>
                    <p className="text-sm">• Respond to proposals with kindness and respect, even if declining</p>
                    <p className="text-sm">• Make Istikhara (consultation prayer) before making important decisions</p>
                    <p className="text-sm">• Focus on Islamic character and compatibility over material aspects</p>
                  </div>
                  <Link href="/islamic-guidance" className="inline-block mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-100"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
