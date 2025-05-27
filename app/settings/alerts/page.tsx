"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Bell, Mail, MessageCircle, Star, Settings, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AlertSettingsPage() {
  const [settings, setSettings] = useState({
    // Email Notifications
    emailNewMatches: true,
    emailProposals: true,
    emailMessages: true,
    emailProfileViews: false,
    emailWeeklyDigest: true,
    emailIslamicContent: true,
    emailPromotions: false,

    // Push Notifications
    pushNewMatches: true,
    pushProposals: true,
    pushMessages: true,
    pushProfileViews: false,
    pushReminders: true,

    // SMS Notifications
    smsProposals: true,
    smsImportantUpdates: true,
    smsSecurityAlerts: true,

    // Frequency Settings
    matchNotificationFrequency: "immediate",
    digestFrequency: "weekly",
    reminderFrequency: "daily",

    // Privacy Settings
    profileViewNotifications: "verified-only",
    messageNotifications: "all",
    proposalNotifications: "all",

    // Islamic Reminders
    prayerReminders: true,
    islamicQuotes: true,
    islamicEvents: true,
    marriageAdvice: true,
  })

  const updateSetting = (key: string, value: boolean | string) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = () => {
    // Save settings to backend
    console.log("Saving settings:", settings)
    // Show success message
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Alert Settings</h1>
            <p className="text-gray-600">
              Customize your notification preferences to stay updated on what matters most to you.
            </p>
          </div>

          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="notifications">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Settings className="w-4 h-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="islamic">
                <Star className="w-4 h-4 mr-2" />
                Islamic
              </TabsTrigger>
              <TabsTrigger value="frequency">
                <MessageCircle className="w-4 h-4 mr-2" />
                Frequency
              </TabsTrigger>
            </TabsList>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              {/* Email Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNewMatches" className="text-base font-medium">
                        New Matches
                      </Label>
                      <p className="text-sm text-gray-600">Get notified when new compatible profiles are found</p>
                    </div>
                    <Switch
                      id="emailNewMatches"
                      checked={settings.emailNewMatches}
                      onCheckedChange={(checked) => updateSetting("emailNewMatches", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailProposals" className="text-base font-medium">
                        Marriage Proposals
                      </Label>
                      <p className="text-sm text-gray-600">Receive emails when someone sends you a proposal</p>
                    </div>
                    <Switch
                      id="emailProposals"
                      checked={settings.emailProposals}
                      onCheckedChange={(checked) => updateSetting("emailProposals", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailMessages" className="text-base font-medium">
                        New Messages
                      </Label>
                      <p className="text-sm text-gray-600">Get notified about new messages from matches</p>
                    </div>
                    <Switch
                      id="emailMessages"
                      checked={settings.emailMessages}
                      onCheckedChange={(checked) => updateSetting("emailMessages", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailProfileViews" className="text-base font-medium">
                        Profile Views
                      </Label>
                      <p className="text-sm text-gray-600">Know when someone views your profile</p>
                    </div>
                    <Switch
                      id="emailProfileViews"
                      checked={settings.emailProfileViews}
                      onCheckedChange={(checked) => updateSetting("emailProfileViews", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailWeeklyDigest" className="text-base font-medium">
                        Weekly Digest
                      </Label>
                      <p className="text-sm text-gray-600">Summary of your activity and new matches</p>
                    </div>
                    <Switch
                      id="emailWeeklyDigest"
                      checked={settings.emailWeeklyDigest}
                      onCheckedChange={(checked) => updateSetting("emailWeeklyDigest", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailIslamicContent" className="text-base font-medium">
                        Islamic Content
                      </Label>
                      <p className="text-sm text-gray-600">New articles, fatwas, and marriage guidance</p>
                    </div>
                    <Switch
                      id="emailIslamicContent"
                      checked={settings.emailIslamicContent}
                      onCheckedChange={(checked) => updateSetting("emailIslamicContent", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailPromotions" className="text-base font-medium">
                        Promotions & Offers
                      </Label>
                      <p className="text-sm text-gray-600">Special offers and premium features</p>
                    </div>
                    <Switch
                      id="emailPromotions"
                      checked={settings.emailPromotions}
                      onCheckedChange={(checked) => updateSetting("emailPromotions", checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Push Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Push Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushNewMatches" className="text-base font-medium">
                        New Matches
                      </Label>
                      <p className="text-sm text-gray-600">Instant notifications for new compatible profiles</p>
                    </div>
                    <Switch
                      id="pushNewMatches"
                      checked={settings.pushNewMatches}
                      onCheckedChange={(checked) => updateSetting("pushNewMatches", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushProposals" className="text-base font-medium">
                        Marriage Proposals
                      </Label>
                      <p className="text-sm text-gray-600">Immediate alerts for new proposals</p>
                    </div>
                    <Switch
                      id="pushProposals"
                      checked={settings.pushProposals}
                      onCheckedChange={(checked) => updateSetting("pushProposals", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushMessages" className="text-base font-medium">
                        New Messages
                      </Label>
                      <p className="text-sm text-gray-600">Real-time message notifications</p>
                    </div>
                    <Switch
                      id="pushMessages"
                      checked={settings.pushMessages}
                      onCheckedChange={(checked) => updateSetting("pushMessages", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushReminders" className="text-base font-medium">
                        Activity Reminders
                      </Label>
                      <p className="text-sm text-gray-600">Gentle reminders to stay active on the platform</p>
                    </div>
                    <Switch
                      id="pushReminders"
                      checked={settings.pushReminders}
                      onCheckedChange={(checked) => updateSetting("pushReminders", checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* SMS Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    SMS Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsProposals" className="text-base font-medium">
                        Marriage Proposals
                      </Label>
                      <p className="text-sm text-gray-600">SMS alerts for important proposals</p>
                    </div>
                    <Switch
                      id="smsProposals"
                      checked={settings.smsProposals}
                      onCheckedChange={(checked) => updateSetting("smsProposals", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsImportantUpdates" className="text-base font-medium">
                        Important Updates
                      </Label>
                      <p className="text-sm text-gray-600">Critical account and platform updates</p>
                    </div>
                    <Switch
                      id="smsImportantUpdates"
                      checked={settings.smsImportantUpdates}
                      onCheckedChange={(checked) => updateSetting("smsImportantUpdates", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsSecurityAlerts" className="text-base font-medium">
                        Security Alerts
                      </Label>
                      <p className="text-sm text-gray-600">Login attempts and security notifications</p>
                    </div>
                    <Switch
                      id="smsSecurityAlerts"
                      checked={settings.smsSecurityAlerts}
                      onCheckedChange={(checked) => updateSetting("smsSecurityAlerts", checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Visibility Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">Profile View Notifications</Label>
                    <Select
                      value={settings.profileViewNotifications}
                      onValueChange={(value) => updateSetting("profileViewNotifications", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All members</SelectItem>
                        <SelectItem value="verified-only">Verified members only</SelectItem>
                        <SelectItem value="premium-only">Premium members only</SelectItem>
                        <SelectItem value="none">No notifications</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">Choose who can trigger profile view notifications</p>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">Message Notifications</Label>
                    <Select
                      value={settings.messageNotifications}
                      onValueChange={(value) => updateSetting("messageNotifications", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All members</SelectItem>
                        <SelectItem value="matches-only">Matches only</SelectItem>
                        <SelectItem value="verified-only">Verified members only</SelectItem>
                        <SelectItem value="premium-only">Premium members only</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">Control who can send you message notifications</p>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">Proposal Notifications</Label>
                    <Select
                      value={settings.proposalNotifications}
                      onValueChange={(value) => updateSetting("proposalNotifications", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All members</SelectItem>
                        <SelectItem value="verified-only">Verified members only</SelectItem>
                        <SelectItem value="premium-only">Premium members only</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">Choose who can send you proposal notifications</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Islamic Tab */}
            <TabsContent value="islamic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Islamic Reminders & Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="prayerReminders" className="text-base font-medium">
                        Prayer Time Reminders
                      </Label>
                      <p className="text-sm text-gray-600">Get notified about prayer times based on your location</p>
                    </div>
                    <Switch
                      id="prayerReminders"
                      checked={settings.prayerReminders}
                      onCheckedChange={(checked) => updateSetting("prayerReminders", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="islamicQuotes" className="text-base font-medium">
                        Daily Islamic Quotes
                      </Label>
                      <p className="text-sm text-gray-600">Receive inspirational quotes from Quran and Hadith</p>
                    </div>
                    <Switch
                      id="islamicQuotes"
                      checked={settings.islamicQuotes}
                      onCheckedChange={(checked) => updateSetting("islamicQuotes", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="islamicEvents" className="text-base font-medium">
                        Islamic Events & Dates
                      </Label>
                      <p className="text-sm text-gray-600">Reminders for Islamic holidays and important dates</p>
                    </div>
                    <Switch
                      id="islamicEvents"
                      checked={settings.islamicEvents}
                      onCheckedChange={(checked) => updateSetting("islamicEvents", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marriageAdvice" className="text-base font-medium">
                        Marriage Advice
                      </Label>
                      <p className="text-sm text-gray-600">Weekly Islamic marriage guidance and tips</p>
                    </div>
                    <Switch
                      id="marriageAdvice"
                      checked={settings.marriageAdvice}
                      onCheckedChange={(checked) => updateSetting("marriageAdvice", checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Frequency Tab */}
            <TabsContent value="frequency" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Frequency</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">Match Notifications</Label>
                    <Select
                      value={settings.matchNotificationFrequency}
                      onValueChange={(value) => updateSetting("matchNotificationFrequency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="hourly">Hourly digest</SelectItem>
                        <SelectItem value="daily">Daily digest</SelectItem>
                        <SelectItem value="weekly">Weekly digest</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">How often you want to receive match notifications</p>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">Activity Digest</Label>
                    <Select
                      value={settings.digestFrequency}
                      onValueChange={(value) => updateSetting("digestFrequency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">Summary of your profile activity and statistics</p>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">Activity Reminders</Label>
                    <Select
                      value={settings.reminderFrequency}
                      onValueChange={(value) => updateSetting("reminderFrequency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">Reminders to stay active and check your matches</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-emerald-600 hover:bg-emerald-700" size="lg">
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
