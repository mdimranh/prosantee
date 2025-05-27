"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    // Islamic Info
    sect: "",
    madhab: "", // For Sunni users
    shiaSectDetails: "", // For Shia users
    prayerFrequency: "",
    hijabWearing: "",
    beardKeeping: "",
    islamicEducation: "",
    halalFoodStrictness: "",
    islamicDressCode: "",
    mosqueAttendance: "",

    // Personal Info
    height: "",
    education: "",
    profession: "",
    income: "",
    maritalStatus: "",
    children: "",
    languagesSpoken: "",
    willingToRelocate: "",
    smokingDrinking: "",
    exerciseFitness: "",
    hobbiesInterests: "",

    // Family Info
    fatherOccupation: "",
    motherOccupation: "",
    siblings: "",
    familyType: "",
    familyIslamicPractice: "",
    familyOpenness: "",
    extendedFamilyStructure: "",
    familyFinancialStatus: "",
    familyEducationBackground: "",

    // Partner Preferences
    preferredAgeMin: "",
    preferredAgeMax: "",
    preferredEducation: "",
    preferredProfession: "",
    preferredLocation: "",
    preferredIslamicKnowledge: "",
    preferredFamilyBackground: "",
    dealBreakers: "",
    importanceOfAppearance: "",
    preferredCommunicationStyle: "",

    // Additional
    aboutMe: "",
    lookingFor: "",
    agreeToTerms: false,

    // Islamic Lifestyle
    quranRecitationFrequency: "",
    islamicKnowledgeLevel: "",
    islamicActivitiesParticipation: "",
    preferredIslamicLifestyle: "",
    willingnessToLearnFaith: "",
  })

  const handleNext = () => {
    if (step < 6) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-emerald-800">NikahConnect</span>
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Step {step} of 6</span>
              <span className="text-sm text-gray-600">{Math.round((step / 6) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {step === 1 && "Basic Information"}
                {step === 2 && "Islamic Background"}
                {step === 3 && "Personal Details"}
                {step === 4 && "Family Information"}
                {step === 5 && "Partner Preferences"}
                {step === 6 && "Islamic Lifestyle"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Password *</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => updateFormData("password", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label>Gender *</Label>
                        <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Islamic Background */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="sect">Islamic Sect *</Label>
                      <Select value={formData.sect} onValueChange={(value) => updateFormData("sect", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your sect" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sunni">Sunni</SelectItem>
                          <SelectItem value="shia">Shia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.sect === "sunni" && (
                      <div>
                        <Label htmlFor="madhab">Madhab (School of Thought)</Label>
                        <Select value={formData.madhab} onValueChange={(value) => updateFormData("madhab", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your Madhab" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hanafi">Hanafi</SelectItem>
                            <SelectItem value="maliki">Maliki</SelectItem>
                            <SelectItem value="shafi">Shafi'i</SelectItem>
                            <SelectItem value="hanbali">Hanbali</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.sect === "shia" && (
                      <div>
                        <Label htmlFor="shiaSectDetails">Shia Sect Details</Label>
                        <Input
                          id="shiaSectDetails"
                          value={formData.shiaSectDetails}
                          onChange={(e) => updateFormData("shiaSectDetails", e.target.value)}
                          placeholder="Specify Shia sect details"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="prayerFrequency">Prayer Frequency *</Label>
                      <Select
                        value={formData.prayerFrequency}
                        onValueChange={(value) => updateFormData("prayerFrequency", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How often do you pray?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5times">5 times daily</SelectItem>
                          <SelectItem value="regularly">Regularly</SelectItem>
                          <SelectItem value="sometimes">Sometimes</SelectItem>
                          <SelectItem value="rarely">Rarely</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="halalFoodStrictness">Halal Food Strictness</Label>
                      <Select
                        value={formData.halalFoodStrictness}
                        onValueChange={(value) => updateFormData("halalFoodStrictness", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How strict are you with Halal food?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="veryStrict">Very Strict</SelectItem>
                          <SelectItem value="strict">Strict</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="notStrict">Not Strict</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="islamicDressCode">Islamic Dress Code Preferences</Label>
                      <Select
                        value={formData.islamicDressCode}
                        onValueChange={(value) => updateFormData("islamicDressCode", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Your Islamic dress code preferences" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="liberal">Liberal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mosqueAttendance">Mosque Attendance Frequency</Label>
                      <Select
                        value={formData.mosqueAttendance}
                        onValueChange={(value) => updateFormData("mosqueAttendance", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How often do you attend the mosque?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regularly">Regularly</SelectItem>
                          <SelectItem value="occasionally">Occasionally</SelectItem>
                          <SelectItem value="rarely">Rarely</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.gender === "female" && (
                      <div>
                        <Label htmlFor="hijabWearing">Hijab Wearing</Label>
                        <Select
                          value={formData.hijabWearing}
                          onValueChange={(value) => updateFormData("hijabWearing", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Do you wear hijab?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="always">Always</SelectItem>
                            <SelectItem value="usually">Usually</SelectItem>
                            <SelectItem value="sometimes">Sometimes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    {formData.gender === "male" && (
                      <div>
                        <Label htmlFor="beardKeeping">Beard Keeping</Label>
                        <Select
                          value={formData.beardKeeping}
                          onValueChange={(value) => updateFormData("beardKeeping", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Do you keep a beard?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, always</SelectItem>
                            <SelectItem value="sometimes">Sometimes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <div>
                      <Label htmlFor="islamicEducation">Islamic Education</Label>
                      <Select
                        value={formData.islamicEducation}
                        onValueChange={(value) => updateFormData("islamicEducation", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Your Islamic education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="extensive">Extensive (Madrasa/Islamic University)</SelectItem>
                          <SelectItem value="moderate">Moderate (Islamic courses)</SelectItem>
                          <SelectItem value="basic">Basic (Self-taught)</SelectItem>
                          <SelectItem value="learning">Still learning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Details */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="height">Height</Label>
                        <Select value={formData.height} onValueChange={(value) => updateFormData("height", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select height" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="150-155">150-155 cm</SelectItem>
                            <SelectItem value="155-160">155-160 cm</SelectItem>
                            <SelectItem value="160-165">160-165 cm</SelectItem>
                            <SelectItem value="165-170">165-170 cm</SelectItem>
                            <SelectItem value="170-175">170-175 cm</SelectItem>
                            <SelectItem value="175-180">175-180 cm</SelectItem>
                            <SelectItem value="180-185">180-185 cm</SelectItem>
                            <SelectItem value="185+">185+ cm</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="maritalStatus">Marital Status *</Label>
                        <Select
                          value={formData.maritalStatus}
                          onValueChange={(value) => updateFormData("maritalStatus", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="never-married">Never Married</SelectItem>
                            <SelectItem value="divorced">Divorced</SelectItem>
                            <SelectItem value="widowed">Widowed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="education">Education Level *</Label>
                      <Select value={formData.education} onValueChange={(value) => updateFormData("education", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="professional">Professional Degree</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="profession">Profession *</Label>
                      <Input
                        id="profession"
                        value={formData.profession}
                        onChange={(e) => updateFormData("profession", e.target.value)}
                        placeholder="Your current profession"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="income">Annual Income</Label>
                      <Select value={formData.income} onValueChange={(value) => updateFormData("income", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select income range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="below-25k">Below $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                          <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                          <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                          <SelectItem value="150k+">$150,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Select value={formData.children} onValueChange={(value) => updateFormData("children", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have children?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No children</SelectItem>
                          <SelectItem value="1">1 child</SelectItem>
                          <SelectItem value="2">2 children</SelectItem>
                          <SelectItem value="3+">3+ children</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="languagesSpoken">Languages Spoken</Label>
                      <Input
                        id="languagesSpoken"
                        value={formData.languagesSpoken}
                        onChange={(e) => updateFormData("languagesSpoken", e.target.value)}
                        placeholder="List languages you speak"
                      />
                    </div>

                    <div>
                      <Label htmlFor="willingToRelocate">Willingness to Relocate</Label>
                      <Select
                        value={formData.willingToRelocate}
                        onValueChange={(value) => updateFormData("willingToRelocate", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select willingness" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="maybe">Maybe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="smokingDrinking">Smoking/Drinking Status</Label>
                      <Select
                        value={formData.smokingDrinking}
                        onValueChange={(value) => updateFormData("smokingDrinking", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Never</SelectItem>
                          <SelectItem value="occasionally">Occasionally</SelectItem>
                          <SelectItem value="yes">Yes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="exerciseFitness">Exercise/Fitness Habits</Label>
                      <Select
                        value={formData.exerciseFitness}
                        onValueChange={(value) => updateFormData("exerciseFitness", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select habits" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regularly">Regularly</SelectItem>
                          <SelectItem value="occasionally">Occasionally</SelectItem>
                          <SelectItem value="rarely">Rarely</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="hobbiesInterests">Hobbies and Interests</Label>
                      <Textarea
                        id="hobbiesInterests"
                        value={formData.hobbiesInterests}
                        onChange={(e) => updateFormData("hobbiesInterests", e.target.value)}
                        placeholder="List your hobbies and interests"
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Family Information */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                        <Input
                          id="fatherOccupation"
                          value={formData.fatherOccupation}
                          onChange={(e) => updateFormData("fatherOccupation", e.target.value)}
                          placeholder="Father's profession"
                        />
                      </div>
                      <div>
                        <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                        <Input
                          id="motherOccupation"
                          value={formData.motherOccupation}
                          onChange={(e) => updateFormData("motherOccupation", e.target.value)}
                          placeholder="Mother's profession"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="siblings">Number of Siblings</Label>
                      <Select value={formData.siblings} onValueChange={(value) => updateFormData("siblings", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of siblings" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">No siblings</SelectItem>
                          <SelectItem value="1">1 sibling</SelectItem>
                          <SelectItem value="2">2 siblings</SelectItem>
                          <SelectItem value="3">3 siblings</SelectItem>
                          <SelectItem value="4+">4+ siblings</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="familyType">Family Type</Label>
                      <Select
                        value={formData.familyType}
                        onValueChange={(value) => updateFormData("familyType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select family type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nuclear">Nuclear Family</SelectItem>
                          <SelectItem value="joint">Joint Family</SelectItem>
                          <SelectItem value="extended">Extended Family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="familyIslamicPractice">Family's Islamic Practice Level</Label>
                      <Select
                        value={formData.familyIslamicPractice}
                        onValueChange={(value) => updateFormData("familyIslamicPractice", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select practice level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="veryPracticing">Very Practicing</SelectItem>
                          <SelectItem value="practicing">Practicing</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="notPracticing">Not Practicing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="familyOpenness">Family's Openness to Different Cultures</Label>
                      <Select
                        value={formData.familyOpenness}
                        onValueChange={(value) => updateFormData("familyOpenness", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select openness level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="veryOpen">Very Open</SelectItem>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="notOpen">Not Open</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="extendedFamilyStructure">Extended Family Structure</Label>
                      <Input
                        id="extendedFamilyStructure"
                        value={formData.extendedFamilyStructure}
                        onChange={(e) => updateFormData("extendedFamilyStructure", e.target.value)}
                        placeholder="Describe extended family structure"
                      />
                    </div>

                    <div>
                      <Label htmlFor="familyFinancialStatus">Family's Financial Status</Label>
                      <Select
                        value={formData.familyFinancialStatus}
                        onValueChange={(value) => updateFormData("familyFinancialStatus", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select financial status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="affluent">Affluent</SelectItem>
                          <SelectItem value="comfortable">Comfortable</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="struggling">Struggling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="familyEducationBackground">Family's Education Background</Label>
                      <Input
                        id="familyEducationBackground"
                        value={formData.familyEducationBackground}
                        onChange={(e) => updateFormData("familyEducationBackground", e.target.value)}
                        placeholder="Describe family's education background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="aboutMe">About Me</Label>
                      <Textarea
                        id="aboutMe"
                        value={formData.aboutMe}
                        onChange={(e) => updateFormData("aboutMe", e.target.value)}
                        placeholder="Tell us about yourself, your interests, and what makes you unique..."
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* Step 5: Partner Preferences */}
                {step === 5 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredAgeMin">Preferred Age (Min)</Label>
                        <Input
                          id="preferredAgeMin"
                          type="number"
                          value={formData.preferredAgeMin}
                          onChange={(e) => updateFormData("preferredAgeMin", e.target.value)}
                          placeholder="18"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredAgeMax">Preferred Age (Max)</Label>
                        <Input
                          id="preferredAgeMax"
                          type="number"
                          value={formData.preferredAgeMax}
                          onChange={(e) => updateFormData("preferredAgeMax", e.target.value)}
                          placeholder="35"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="preferredEducation">Preferred Education</Label>
                      <Select
                        value={formData.preferredEducation}
                        onValueChange={(value) => updateFormData("preferredEducation", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred education" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="high-school">High School or above</SelectItem>
                          <SelectItem value="bachelors">Bachelor's or above</SelectItem>
                          <SelectItem value="masters">Master's or above</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredProfession">Preferred Profession</Label>
                      <Input
                        id="preferredProfession"
                        value={formData.preferredProfession}
                        onChange={(e) => updateFormData("preferredProfession", e.target.value)}
                        placeholder="Any specific profession preference"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredLocation">Preferred Location</Label>
                      <Input
                        id="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={(e) => updateFormData("preferredLocation", e.target.value)}
                        placeholder="City, Country or Any"
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredIslamicKnowledge">Preferred Islamic Knowledge Level</Label>
                      <Select
                        value={formData.preferredIslamicKnowledge}
                        onValueChange={(value) => updateFormData("preferredIslamicKnowledge", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred knowledge level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="extensive">Extensive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredFamilyBackground">Preferred Family Background</Label>
                      <Input
                        id="preferredFamilyBackground"
                        value={formData.preferredFamilyBackground}
                        onChange={(e) => updateFormData("preferredFamilyBackground", e.target.value)}
                        placeholder="Describe preferred family background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dealBreakers">Deal Breakers</Label>
                      <Textarea
                        id="dealBreakers"
                        value={formData.dealBreakers}
                        onChange={(e) => updateFormData("dealBreakers", e.target.value)}
                        placeholder="List your deal breakers"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="importanceOfAppearance">Importance of Physical Appearance</Label>
                      <Select
                        value={formData.importanceOfAppearance}
                        onValueChange={(value) => updateFormData("importanceOfAppearance", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select importance level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="veryImportant">Very Important</SelectItem>
                          <SelectItem value="important">Important</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="notImportant">Not Important</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredCommunicationStyle">Preferred Communication Style</Label>
                      <Select
                        value={formData.preferredCommunicationStyle}
                        onValueChange={(value) => updateFormData("preferredCommunicationStyle", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select communication style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="direct">Direct</SelectItem>
                          <SelectItem value="respectful">Respectful</SelectItem>
                          <SelectItem value="humorous">Humorous</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="lookingFor">What are you looking for in a partner?</Label>
                      <Textarea
                        id="lookingFor"
                        value={formData.lookingFor}
                        onChange={(e) => updateFormData("lookingFor", e.target.value)}
                        placeholder="Describe the qualities you're looking for in your life partner..."
                        rows={4}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-emerald-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-emerald-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>
                )}

                {/* Step 6: Islamic Lifestyle */}
                {step === 6 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="quranRecitationFrequency">Frequency of Quran Recitation</Label>
                      <Select
                        value={formData.quranRecitationFrequency}
                        onValueChange={(value) => updateFormData("quranRecitationFrequency", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="rarely">Rarely</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="islamicKnowledgeLevel">Islamic Knowledge Level</Label>
                      <Select
                        value={formData.islamicKnowledgeLevel}
                        onValueChange={(value) => updateFormData("islamicKnowledgeLevel", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select knowledge level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="islamicActivitiesParticipation">Participation in Islamic Activities</Label>
                      <Select
                        value={formData.islamicActivitiesParticipation}
                        onValueChange={(value) => updateFormData("islamicActivitiesParticipation", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select participation level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regularly">Regularly</SelectItem>
                          <SelectItem value="occasionally">Occasionally</SelectItem>
                          <SelectItem value="rarely">Rarely</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredIslamicLifestyle">Preferred Islamic Lifestyle</Label>
                      <Select
                        value={formData.preferredIslamicLifestyle}
                        onValueChange={(value) => updateFormData("preferredIslamicLifestyle", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select lifestyle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traditional">Traditional</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="modern">Modern</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="willingnessToLearnFaith">Willingness to Learn and Grow in Faith</Label>
                      <Select
                        value={formData.willingnessToLearnFaith}
                        onValueChange={(value) => updateFormData("willingnessToLearnFaith", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select willingness" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="veryWilling">Very Willing</SelectItem>
                          <SelectItem value="willing">Willing</SelectItem>
                          <SelectItem value="neutral">Neutral</SelectItem>
                          <SelectItem value="notWilling">Not Willing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  {step < 6 ? (
                    <Button type="button" onClick={handleNext} className="ml-auto bg-emerald-600 hover:bg-emerald-700">
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="ml-auto bg-emerald-600 hover:bg-emerald-700"
                      disabled={!formData.agreeToTerms}
                    >
                      Create Profile
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
