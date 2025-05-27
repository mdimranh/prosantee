"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  Shield,
  Globe,
  Mail,
  Bell,
  DollarSign,
  Users,
  Lock,
  Database,
  Server,
  ArrowLeft,
  Save,
  RefreshCw,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "NikahConnect",
    siteDescription: "The trusted Islamic matrimony platform connecting Muslim hearts worldwide",
    siteUrl: "https://nikahconnect.com",
    adminEmail: "admin@nikahconnect.com",
    supportEmail: "support@nikahconnect.com",
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerificationRequired: true,
    phoneVerificationRequired: true,

    // Security Settings
    passwordMinLength: 8,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    twoFactorEnabled: true,
    ipWhitelist: "",
    sslEnabled: true,
    dataEncryption: true,

    // User Settings
    profileApprovalRequired: true,
    photoModerationEnabled: true,
    autoDeleteInactiveAccounts: true,
    inactivityPeriod: 365,
    maxPhotosPerProfile: 5,
    minAgeRequirement: 18,
    maxAgeLimit: 65,

    // Communication Settings
    messageModeration: true,
    profanityFilter: true,
    spamDetection: true,
    maxMessagesPerDay: 50,
    messageRetentionDays: 365,

    // Payment Settings
    paymentGateway: "stripe",
    currency: "USD",
    taxRate: 0,
    refundPolicy: 30,
    premiumPriceMonthly: 29.99,
    premiumPriceYearly: 299.99,

    // Email Settings
    smtpHost: "smtp.gmail.com",
    smtpPort: 587,
    smtpUsername: "",
    smtpPassword: "",
    emailFromName: "NikahConnect",
    emailFromAddress: "noreply@nikahconnect.com",

    // SMS Settings
    smsProvider: "twilio",
    smsApiKey: "",
    smsFromNumber: "",

    // Islamic Settings
    prayerTimesEnabled: true,
    islamicCalendarEnabled: true,
    halalCertificationRequired: false,
    islamicContentModeration: true,
    sectBasedMatching: true,

    // Analytics Settings
    googleAnalyticsId: "",
    facebookPixelId: "",
    analyticsEnabled: true,
    cookieConsentRequired: true,

    // Backup Settings
    autoBackupEnabled: true,
    backupFrequency: "daily",
    backupRetentionDays: 30,
    cloudBackupEnabled: true,
  })

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = () => {
    console.log("Saving settings:", settings)
    // Save settings to backend
  }

  const handleResetSettings = () => {
    // Reset to default settings
    console.log("Resetting settings to default")
  }

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
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600">Configure all aspects of the NikahConnect platform</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleResetSettings}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset to Default
            </Button>
            <Button onClick={handleSaveSettings} className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general">
              <Settings className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="security">
              <Lock className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="payments">
              <DollarSign className="w-4 h-4 mr-2" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="communications">
              <Mail className="w-4 h-4 mr-2" />
              Communications
            </TabsTrigger>
            <TabsTrigger value="system">
              <Server className="w-4 h-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => updateSetting("siteName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteUrl">Site URL</Label>
                    <Input
                      id="siteUrl"
                      value={settings.siteUrl}
                      onChange={(e) => updateSetting("siteUrl", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => updateSetting("siteDescription", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="adminEmail">Admin Email</Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      value={settings.adminEmail}
                      onChange={(e) => updateSetting("adminEmail", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input
                      id="supportEmail"
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) => updateSetting("supportEmail", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Site Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Maintenance Mode</Label>
                    <p className="text-sm text-gray-600">Temporarily disable site access for maintenance</p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => updateSetting("maintenanceMode", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">User Registration</Label>
                    <p className="text-sm text-gray-600">Allow new users to register</p>
                  </div>
                  <Switch
                    checked={settings.registrationEnabled}
                    onCheckedChange={(checked) => updateSetting("registrationEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Email Verification Required</Label>
                    <p className="text-sm text-gray-600">Require email verification for new accounts</p>
                  </div>
                  <Switch
                    checked={settings.emailVerificationRequired}
                    onCheckedChange={(checked) => updateSetting("emailVerificationRequired", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Phone Verification Required</Label>
                    <p className="text-sm text-gray-600">Require phone verification for new accounts</p>
                  </div>
                  <Switch
                    checked={settings.phoneVerificationRequired}
                    onCheckedChange={(checked) => updateSetting("phoneVerificationRequired", checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Islamic Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Prayer Times Integration</Label>
                    <p className="text-sm text-gray-600">Show prayer times based on user location</p>
                  </div>
                  <Switch
                    checked={settings.prayerTimesEnabled}
                    onCheckedChange={(checked) => updateSetting("prayerTimesEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Islamic Calendar</Label>
                    <p className="text-sm text-gray-600">Display Islamic dates and events</p>
                  </div>
                  <Switch
                    checked={settings.islamicCalendarEnabled}
                    onCheckedChange={(checked) => updateSetting("islamicCalendarEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Sect-Based Matching</Label>
                    <p className="text-sm text-gray-600">Enable matching based on Islamic sect preferences</p>
                  </div>
                  <Switch
                    checked={settings.sectBasedMatching}
                    onCheckedChange={(checked) => updateSetting("sectBasedMatching", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Islamic Content Moderation</Label>
                    <p className="text-sm text-gray-600">Enhanced moderation for Islamic compliance</p>
                  </div>
                  <Switch
                    checked={settings.islamicContentModeration}
                    onCheckedChange={(checked) => updateSetting("islamicContentModeration", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Authentication & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={settings.passwordMinLength}
                      onChange={(e) => updateSetting("passwordMinLength", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) => updateSetting("sessionTimeout", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={settings.maxLoginAttempts}
                      onChange={(e) => updateSetting("maxLoginAttempts", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
                  </div>
                  <Switch
                    checked={settings.twoFactorEnabled}
                    onCheckedChange={(checked) => updateSetting("twoFactorEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">SSL/TLS Encryption</Label>
                    <p className="text-sm text-gray-600">Force HTTPS connections</p>
                  </div>
                  <Switch
                    checked={settings.sslEnabled}
                    onCheckedChange={(checked) => updateSetting("sslEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Data Encryption</Label>
                    <p className="text-sm text-gray-600">Encrypt sensitive user data</p>
                  </div>
                  <Switch
                    checked={settings.dataEncryption}
                    onCheckedChange={(checked) => updateSetting("dataEncryption", checked)}
                  />
                </div>
                <div>
                  <Label htmlFor="ipWhitelist">IP Whitelist (Admin Access)</Label>
                  <Textarea
                    id="ipWhitelist"
                    placeholder="Enter IP addresses separated by commas"
                    value={settings.ipWhitelist}
                    onChange={(e) => updateSetting("ipWhitelist", e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Settings */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Profile Approval Required</Label>
                    <p className="text-sm text-gray-600">Manually approve new profiles before they go live</p>
                  </div>
                  <Switch
                    checked={settings.profileApprovalRequired}
                    onCheckedChange={(checked) => updateSetting("profileApprovalRequired", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Photo Moderation</Label>
                    <p className="text-sm text-gray-600">Review all uploaded photos before approval</p>
                  </div>
                  <Switch
                    checked={settings.photoModerationEnabled}
                    onCheckedChange={(checked) => updateSetting("photoModerationEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Auto-Delete Inactive Accounts</Label>
                    <p className="text-sm text-gray-600">Automatically remove accounts after inactivity period</p>
                  </div>
                  <Switch
                    checked={settings.autoDeleteInactiveAccounts}
                    onCheckedChange={(checked) => updateSetting("autoDeleteInactiveAccounts", checked)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="inactivityPeriod">Inactivity Period (days)</Label>
                    <Input
                      id="inactivityPeriod"
                      type="number"
                      value={settings.inactivityPeriod}
                      onChange={(e) => updateSetting("inactivityPeriod", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxPhotosPerProfile">Max Photos per Profile</Label>
                    <Input
                      id="maxPhotosPerProfile"
                      type="number"
                      value={settings.maxPhotosPerProfile}
                      onChange={(e) => updateSetting("maxPhotosPerProfile", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="minAgeRequirement">Minimum Age Requirement</Label>
                    <Input
                      id="minAgeRequirement"
                      type="number"
                      value={settings.minAgeRequirement}
                      onChange={(e) => updateSetting("minAgeRequirement", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Message Moderation</Label>
                    <p className="text-sm text-gray-600">Review messages for inappropriate content</p>
                  </div>
                  <Switch
                    checked={settings.messageModeration}
                    onCheckedChange={(checked) => updateSetting("messageModeration", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Profanity Filter</Label>
                    <p className="text-sm text-gray-600">Automatically filter inappropriate language</p>
                  </div>
                  <Switch
                    checked={settings.profanityFilter}
                    onCheckedChange={(checked) => updateSetting("profanityFilter", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Spam Detection</Label>
                    <p className="text-sm text-gray-600">Detect and prevent spam messages</p>
                  </div>
                  <Switch
                    checked={settings.spamDetection}
                    onCheckedChange={(checked) => updateSetting("spamDetection", checked)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="maxMessagesPerDay">Max Messages per Day</Label>
                    <Input
                      id="maxMessagesPerDay"
                      type="number"
                      value={settings.maxMessagesPerDay}
                      onChange={(e) => updateSetting("maxMessagesPerDay", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="messageRetentionDays">Message Retention (days)</Label>
                    <Input
                      id="messageRetentionDays"
                      type="number"
                      value={settings.messageRetentionDays}
                      onChange={(e) => updateSetting("messageRetentionDays", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Settings */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Payment Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paymentGateway">Payment Gateway</Label>
                    <Select
                      value={settings.paymentGateway}
                      onValueChange={(value) => updateSetting("paymentGateway", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stripe">Stripe</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="razorpay">Razorpay</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select value={settings.currency} onValueChange={(value) => updateSetting("currency", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                        <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                    <Input
                      id="taxRate"
                      type="number"
                      step="0.01"
                      value={settings.taxRate}
                      onChange={(e) => updateSetting("taxRate", Number.parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="refundPolicy">Refund Policy (days)</Label>
                    <Input
                      id="refundPolicy"
                      type="number"
                      value={settings.refundPolicy}
                      onChange={(e) => updateSetting("refundPolicy", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="premiumPriceMonthly">Monthly Premium Price</Label>
                    <Input
                      id="premiumPriceMonthly"
                      type="number"
                      step="0.01"
                      value={settings.premiumPriceMonthly}
                      onChange={(e) => updateSetting("premiumPriceMonthly", Number.parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="premiumPriceYearly">Yearly Premium Price</Label>
                    <Input
                      id="premiumPriceYearly"
                      type="number"
                      step="0.01"
                      value={settings.premiumPriceYearly}
                      onChange={(e) => updateSetting("premiumPriceYearly", Number.parseFloat(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Communications Settings */}
          <TabsContent value="communications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smtpHost">SMTP Host</Label>
                    <Input
                      id="smtpHost"
                      value={settings.smtpHost}
                      onChange={(e) => updateSetting("smtpHost", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPort">SMTP Port</Label>
                    <Input
                      id="smtpPort"
                      type="number"
                      value={settings.smtpPort}
                      onChange={(e) => updateSetting("smtpPort", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpUsername">SMTP Username</Label>
                    <Input
                      id="smtpUsername"
                      value={settings.smtpUsername}
                      onChange={(e) => updateSetting("smtpUsername", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPassword">SMTP Password</Label>
                    <Input
                      id="smtpPassword"
                      type="password"
                      value={settings.smtpPassword}
                      onChange={(e) => updateSetting("smtpPassword", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emailFromName">From Name</Label>
                    <Input
                      id="emailFromName"
                      value={settings.emailFromName}
                      onChange={(e) => updateSetting("emailFromName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emailFromAddress">From Email Address</Label>
                    <Input
                      id="emailFromAddress"
                      type="email"
                      value={settings.emailFromAddress}
                      onChange={(e) => updateSetting("emailFromAddress", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  SMS Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="smsProvider">SMS Provider</Label>
                  <Select value={settings.smsProvider} onValueChange={(value) => updateSetting("smsProvider", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twilio">Twilio</SelectItem>
                      <SelectItem value="nexmo">Nexmo</SelectItem>
                      <SelectItem value="aws-sns">AWS SNS</SelectItem>
                      <SelectItem value="messagebird">MessageBird</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smsApiKey">SMS API Key</Label>
                    <Input
                      id="smsApiKey"
                      type="password"
                      value={settings.smsApiKey}
                      onChange={(e) => updateSetting("smsApiKey", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="smsFromNumber">From Phone Number</Label>
                    <Input
                      id="smsFromNumber"
                      value={settings.smsFromNumber}
                      onChange={(e) => updateSetting("smsFromNumber", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Backup & Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Auto Backup</Label>
                    <p className="text-sm text-gray-600">Automatically backup database and files</p>
                  </div>
                  <Switch
                    checked={settings.autoBackupEnabled}
                    onCheckedChange={(checked) => updateSetting("autoBackupEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Cloud Backup</Label>
                    <p className="text-sm text-gray-600">Store backups in cloud storage</p>
                  </div>
                  <Switch
                    checked={settings.cloudBackupEnabled}
                    onCheckedChange={(checked) => updateSetting("cloudBackupEnabled", checked)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <Select
                      value={settings.backupFrequency}
                      onValueChange={(value) => updateSetting("backupFrequency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="backupRetentionDays">Backup Retention (days)</Label>
                    <Input
                      id="backupRetentionDays"
                      type="number"
                      value={settings.backupRetentionDays}
                      onChange={(e) => updateSetting("backupRetentionDays", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Analytics & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Analytics Enabled</Label>
                    <p className="text-sm text-gray-600">Enable website analytics tracking</p>
                  </div>
                  <Switch
                    checked={settings.analyticsEnabled}
                    onCheckedChange={(checked) => updateSetting("analyticsEnabled", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Cookie Consent Required</Label>
                    <p className="text-sm text-gray-600">Show cookie consent banner</p>
                  </div>
                  <Switch
                    checked={settings.cookieConsentRequired}
                    onCheckedChange={(checked) => updateSetting("cookieConsentRequired", checked)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                    <Input
                      id="googleAnalyticsId"
                      placeholder="GA-XXXXXXXXX-X"
                      value={settings.googleAnalyticsId}
                      onChange={(e) => updateSetting("googleAnalyticsId", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="facebookPixelId">Facebook Pixel ID</Label>
                    <Input
                      id="facebookPixelId"
                      placeholder="XXXXXXXXXXXXXXX"
                      value={settings.facebookPixelId}
                      onChange={(e) => updateSetting("facebookPixelId", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium text-yellow-800">Reset All Settings</Label>
                    <p className="text-sm text-yellow-700">This will reset all settings to their default values</p>
                  </div>
                  <Button variant="destructive" onClick={handleResetSettings}>
                    Reset All
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium text-yellow-800">Clear All Data</Label>
                    <p className="text-sm text-yellow-700">Permanently delete all user data and content</p>
                  </div>
                  <Button variant="destructive">Clear Data</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
