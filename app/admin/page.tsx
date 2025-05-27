"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  UserCheck,
  Heart,
  Flag,
  DollarSign,
  TrendingUp,
  Shield,
  Settings,
  BarChart3,
  FileText,
  Bell,
  Crown,
  BookOpen,
  Calendar,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 125847,
    activeUsers: 89234,
    verifiedUsers: 67891,
    premiumUsers: 23456,
    totalProposals: 45678,
    successfulMatches: 12345,
    monthlyRevenue: 234567,
    pendingVerifications: 234,
    reportedProfiles: 45,
    activeSupport: 12,
  })

  const recentActivity = [
    { type: "user_registration", user: "Aisha Rahman", time: "2 minutes ago", status: "pending" },
    { type: "proposal_sent", user: "Omar Hassan", time: "5 minutes ago", status: "active" },
    { type: "profile_reported", user: "Ahmed Malik", time: "10 minutes ago", status: "urgent" },
    { type: "premium_upgrade", user: "Fatima Al-Zahra", time: "15 minutes ago", status: "completed" },
    { type: "verification_request", user: "Yusuf Rahman", time: "20 minutes ago", status: "pending" },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_registration":
        return <Users className="w-4 h-4" />
      case "proposal_sent":
        return <Heart className="w-4 h-4" />
      case "profile_reported":
        return <Flag className="w-4 h-4" />
      case "premium_upgrade":
        return <Crown className="w-4 h-4" />
      case "verification_request":
        return <UserCheck className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
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
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts ({stats.reportedProfiles})
              </Button>
              <Link href="/">
                <Button variant="outline">View Site</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-xs text-green-600 mt-2">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-xs text-green-600 mt-2">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Premium Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.premiumUsers.toLocaleString()}</p>
                </div>
                <Crown className="w-8 h-8 text-yellow-500" />
              </div>
              <p className="text-xs text-green-600 mt-2">+15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Successful Matches</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.successfulMatches.toLocaleString()}</p>
                </div>
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-xs text-green-600 mt-2">+22% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.monthlyRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-xs text-green-600 mt-2">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Admin Navigation */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Admin Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/admin/users">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <Users className="w-6 h-6 mb-2" />
                      <span>User Management</span>
                      <Badge className="mt-1 bg-blue-100 text-blue-800">{stats.pendingVerifications} pending</Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/profiles">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <UserCheck className="w-6 h-6 mb-2" />
                      <span>Profile Verification</span>
                      <Badge className="mt-1 bg-yellow-100 text-yellow-800">{stats.pendingVerifications} pending</Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/proposals">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <Heart className="w-6 h-6 mb-2" />
                      <span>Proposals & Matches</span>
                      <Badge className="mt-1 bg-green-100 text-green-800">{stats.totalProposals} total</Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/reports">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <Flag className="w-6 h-6 mb-2" />
                      <span>Reports & Moderation</span>
                      <Badge className="mt-1 bg-red-100 text-red-800">{stats.reportedProfiles} reports</Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/payments">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <DollarSign className="w-6 h-6 mb-2" />
                      <span>Payments & Billing</span>
                      <Badge className="mt-1 bg-emerald-100 text-emerald-800">
                        ${stats.monthlyRevenue.toLocaleString()}
                      </Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/content">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <BookOpen className="w-6 h-6 mb-2" />
                      <span>Content Management</span>
                      <Badge className="mt-1 bg-purple-100 text-purple-800">Islamic Content</Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/analytics">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <BarChart3 className="w-6 h-6 mb-2" />
                      <span>Analytics & Reports</span>
                      <Badge className="mt-1 bg-indigo-100 text-indigo-800">Live Data</Badge>
                    </Button>
                  </Link>

                  <Link href="/admin/settings">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <Settings className="w-6 h-6 mb-2" />
                      <span>System Settings</span>
                      <Badge className="mt-1 bg-gray-100 text-gray-800">Configuration</Badge>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                        <p className="text-xs text-gray-500">{activity.type.replace("_", " ")}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge className={`text-xs ${getStatusColor(activity.status)}`}>{activity.status}</Badge>
                        <span className="text-xs text-gray-400 mt-1">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
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
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Send System Notification
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Update Site Settings
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Maintenance
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Status</span>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Gateway</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email Service</span>
                    <Badge className="bg-green-100 text-green-800">Running</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SMS Service</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Limited</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
