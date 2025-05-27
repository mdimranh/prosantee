"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Ban,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Crown,
  ArrowLeft,
  Download,
  Upload,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedUser, setSelectedUser] = useState<any>(null)

  // Mock users data
  const users = [
    {
      id: 1,
      name: "Aisha Rahman",
      email: "aisha.rahman@email.com",
      phone: "+44 7123 456789",
      age: 26,
      location: "London, UK",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      status: "active",
      verified: true,
      premium: true,
      profileCompletion: 95,
      totalProposals: 12,
      successfulMatches: 2,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Omar Hassan",
      email: "omar.hassan@email.com",
      phone: "+1 416 123 4567",
      age: 29,
      location: "Toronto, Canada",
      joinDate: "2024-01-10",
      lastActive: "1 day ago",
      status: "active",
      verified: true,
      premium: false,
      profileCompletion: 88,
      totalProposals: 8,
      successfulMatches: 1,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Ahmed Malik",
      email: "ahmed.malik@email.com",
      phone: "+44 7987 654321",
      age: 31,
      location: "Manchester, UK",
      joinDate: "2024-01-05",
      lastActive: "3 days ago",
      status: "suspended",
      verified: false,
      premium: false,
      profileCompletion: 65,
      totalProposals: 3,
      successfulMatches: 0,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      name: "Fatima Al-Zahra",
      email: "fatima.alzahra@email.com",
      phone: "+971 50 123 4567",
      age: 24,
      location: "Dubai, UAE",
      joinDate: "2023-12-20",
      lastActive: "5 hours ago",
      status: "pending",
      verified: false,
      premium: true,
      profileCompletion: 78,
      totalProposals: 15,
      successfulMatches: 3,
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>
      case "banned":
        return <Badge className="bg-red-600 text-white">Banned</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
    }
  }

  const handleUserAction = (action: string, userId: number) => {
    console.log(`${action} user ${userId}`)
    // Implement user actions
  }

  const UserDetailsModal = ({ user }: { user: any }) => (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>User Details - {user.name}</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        {/* User Header */}
        <div className="flex items-center space-x-4">
          <Image
            src={user.image || "/placeholder.svg"}
            alt={user.name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <div className="flex items-center space-x-2 mt-2">
              {getStatusBadge(user.status)}
              {user.verified && (
                <Badge className="bg-blue-100 text-blue-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
              {user.premium && (
                <Badge className="bg-yellow-100 text-yellow-800">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{user.profileCompletion}%</div>
              <div className="text-sm text-gray-600">Profile Complete</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{user.totalProposals}</div>
              <div className="text-sm text-gray-600">Total Proposals</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{user.successfulMatches}</div>
              <div className="text-sm text-gray-600">Successful Matches</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">4.8</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* User Information */}
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-600">Phone</Label>
                <p className="text-gray-900">{user.phone}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Age</Label>
                <p className="text-gray-900">{user.age} years</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Location</Label>
                <p className="text-gray-900">{user.location}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Join Date</Label>
                <p className="text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Last login</span>
                <span className="text-gray-600">{user.lastActive}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Profile views (this month)</span>
                <span className="text-gray-600">234</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Messages sent</span>
                <span className="text-gray-600">45</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Proposals sent</span>
                <span className="text-gray-600">{user.totalProposals}</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Current Plan</span>
                <span className="text-gray-600">{user.premium ? "Premium" : "Basic"}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Total Spent</span>
                <span className="text-gray-600">$299</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Next Billing</span>
                <span className="text-gray-600">Feb 15, 2024</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Reports against user</span>
                <span className="text-red-600">2</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Reports by user</span>
                <span className="text-gray-600">0</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Account warnings</span>
                <span className="text-yellow-600">1</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t">
          <Button
            onClick={() => handleUserAction("verify", user.id)}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={user.verified}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            {user.verified ? "Verified" : "Verify User"}
          </Button>
          <Button
            onClick={() => handleUserAction("suspend", user.id)}
            variant="outline"
            className="border-yellow-600 text-yellow-600"
          >
            <Ban className="w-4 h-4 mr-2" />
            Suspend
          </Button>
          <Button onClick={() => handleUserAction("ban", user.id)} variant="destructive">
            <XCircle className="w-4 h-4 mr-2" />
            Ban User
          </Button>
          <Button onClick={() => handleUserAction("message", user.id)} variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </div>
    </DialogContent>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-emerald-800">NikahConnect</span>
                <Badge className="ml-2 bg-red-600">Admin Panel</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin">
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
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage all users, verifications, and account statuses</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Users
            </Button>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import Users
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search users by name, email, or phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="banned">Banned</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                All Users ({users.length})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">User</th>
                    <th className="text-left p-4">Contact</th>
                    <th className="text-left p-4">Location</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Activity</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={user.image || "/placeholder.svg"}
                            alt={user.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{user.name}</span>
                              {user.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                              {user.premium && <Crown className="w-4 h-4 text-yellow-500" />}
                            </div>
                            <span className="text-sm text-gray-600">Age: {user.age}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-1" />
                            {user.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="w-3 h-3 mr-1" />
                            {user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {user.location}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {getStatusBadge(user.status)}
                          <div className="text-xs text-gray-500">Profile: {user.profileCompletion}%</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            Joined: {new Date(user.joinDate).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-gray-500">Last active: {user.lastActive}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedUser(user)}>
                                <Eye className="w-3 h-3 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            {selectedUser && <UserDetailsModal user={selectedUser} />}
                          </Dialog>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
