"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Users,
  Heart,
  DollarSign,
  Download,
  ArrowLeft,
  Shield,
  Eye,
  MessageCircle,
  Crown,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  // Mock analytics data
  const analytics = {
    overview: {
      totalUsers: 125847,
      activeUsers: 89234,
      newUsersToday: 234,
      successfulMatches: 12345,
      totalRevenue: 2345678,
      conversionRate: 12.5,
    },
    userGrowth: [
      { month: "Jan", users: 85000, active: 65000 },
      { month: "Feb", users: 92000, active: 71000 },
      { month: "Mar", users: 98000, active: 76000 },
      { month: "Apr", users: 105000, active: 82000 },
      { month: "May", users: 112000, active: 87000 },
      { month: "Jun", users: 125847, active: 89234 },
    ],
    demographics: {
      ageGroups: [
        { range: "18-25", count: 35000, percentage: 28 },
        { range: "26-30", count: 45000, percentage: 36 },
        { range: "31-35", count: 30000, percentage: 24 },
        { range: "36-40", count: 12000, percentage: 9 },
        { range: "40+", count: 3847, percentage: 3 },
      ],
      locations: [
        { country: "United Kingdom", users: 45000, percentage: 36 },
        { country: "United States", users: 35000, percentage: 28 },
        { country: "Canada", users: 20000, percentage: 16 },
        { country: "Australia", users: 15000, percentage: 12 },
        { country: "Others", users: 10847, percentage: 8 },
      ],
      education: [
        { level: "Bachelor's", count: 55000, percentage: 44 },
        { level: "Master's", count: 40000, percentage: 32 },
        { level: "High School", count: 20000, percentage: 16 },
        { level: "PhD", count: 8000, percentage: 6 },
        { level: "Other", count: 2847, percentage: 2 },
      ],
    },
    engagement: {
      dailyActiveUsers: 25000,
      averageSessionTime: "24 minutes",
      profileViews: 450000,
      messagesExchanged: 125000,
      proposalsSent: 8500,
      successRate: 18.5,
    },
    revenue: {
      monthlyRevenue: 234567,
      premiumSubscriptions: 23456,
      averageRevenuePerUser: 45.67,
      churnRate: 5.2,
      lifetimeValue: 567.89,
    },
  }

  const topMetrics = [
    {
      title: "Total Users",
      value: analytics.overview.totalUsers.toLocaleString(),
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "blue",
    },
    {
      title: "Active Users",
      value: analytics.overview.activeUsers.toLocaleString(),
      change: "+8%",
      trend: "up",
      icon: TrendingUp,
      color: "green",
    },
    {
      title: "Successful Matches",
      value: analytics.overview.successfulMatches.toLocaleString(),
      change: "+22%",
      trend: "up",
      icon: Heart,
      color: "red",
    },
    {
      title: "Monthly Revenue",
      value: `$${analytics.revenue.monthlyRevenue.toLocaleString()}`,
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "emerald",
    },
  ]

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
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
            <p className="text-gray-600">Comprehensive insights into platform performance and user behavior</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className={`text-xs ${metric.trend === "up" ? "text-green-600" : "text-red-600"} mt-1`}>
                      {metric.change} from last month
                    </p>
                  </div>
                  <metric.icon className={`w-8 h-8 text-${metric.color}-500`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analytics.userGrowth.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{data.month}</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">Total: {data.users.toLocaleString()}</span>
                          <span className="text-sm text-green-600">Active: {data.active.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Performance Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-lg font-bold text-green-600">{analytics.overview.conversionRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Success Rate</span>
                      <span className="text-lg font-bold text-blue-600">{analytics.engagement.successRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Churn Rate</span>
                      <span className="text-lg font-bold text-red-600">{analytics.revenue.churnRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">ARPU</span>
                      <span className="text-lg font-bold text-emerald-600">
                        ${analytics.revenue.averageRevenuePerUser}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Registered</span>
                      <span className="font-bold">{analytics.overview.totalUsers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Active Users</span>
                      <span className="font-bold text-green-600">
                        {analytics.overview.activeUsers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">New Today</span>
                      <span className="font-bold text-blue-600">{analytics.overview.newUsersToday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Premium Users</span>
                      <span className="font-bold text-yellow-600">
                        {analytics.revenue.premiumSubscriptions.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Daily Active</span>
                      <span className="font-bold">{analytics.engagement.dailyActiveUsers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Avg. Session Time</span>
                      <span className="font-bold">{analytics.engagement.averageSessionTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Profile Views</span>
                      <span className="font-bold">{analytics.engagement.profileViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Messages Sent</span>
                      <span className="font-bold">{analytics.engagement.messagesExchanged.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Matching Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Proposals Sent</span>
                      <span className="font-bold">{analytics.engagement.proposalsSent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Successful Matches</span>
                      <span className="font-bold text-green-600">
                        {analytics.overview.successfulMatches.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Success Rate</span>
                      <span className="font-bold text-blue-600">{analytics.engagement.successRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Engagement Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Profile Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Total Profile Views</span>
                      <span className="font-bold">{analytics.engagement.profileViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Average Views per Profile</span>
                      <span className="font-bold">234</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Profile Completion Rate</span>
                      <span className="font-bold text-green-600">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Communication Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Messages Exchanged</span>
                      <span className="font-bold">{analytics.engagement.messagesExchanged.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Response Rate</span>
                      <span className="font-bold text-blue-600">67%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Average Response Time</span>
                      <span className="font-bold">2.5 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Revenue Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Revenue Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">
                        ${analytics.revenue.monthlyRevenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Revenue</span>
                      <span className="font-bold">${analytics.overview.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Growth Rate</span>
                      <span className="font-bold text-green-600">+18%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    Subscription Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Premium Subscribers</span>
                      <span className="font-bold">{analytics.revenue.premiumSubscriptions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Conversion Rate</span>
                      <span className="font-bold text-blue-600">{analytics.overview.conversionRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Churn Rate</span>
                      <span className="font-bold text-red-600">{analytics.revenue.churnRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ARPU</span>
                      <span className="font-bold">${analytics.revenue.averageRevenuePerUser}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Lifetime Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">${analytics.revenue.lifetimeValue}</div>
                      <div className="text-sm text-gray-600">Average LTV</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Payback Period</span>
                      <span className="font-bold">3.2 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Retention Rate</span>
                      <span className="font-bold text-green-600">94.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Demographics Tab */}
          <TabsContent value="demographics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analytics.demographics.ageGroups.map((group, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{group.range}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${group.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{group.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Geographic Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analytics.demographics.locations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{location.country}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${location.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{location.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analytics.demographics.education.map((edu, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{edu.level}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${edu.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{edu.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
