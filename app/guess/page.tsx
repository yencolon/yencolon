"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// List of countries and capitals (you can expand this list)
const COUNTRIES = [
  { country: "France", capital: "Paris" },
  { country: "Germany", capital: "Berlin" },
  { country: "Italy", capital: "Rome" },
  { country: "Spain", capital: "Madrid" },
  { country: "United Kingdom", capital: "London" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Australia", capital: "Canberra" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Canada", capital: "Ottawa" },
  { country: "India", capital: "New Delhi" },
]

export default function Component() {
  const [currentCountry, setCurrentCountry] = useState("")
  const [userGuess, setUserGuess] = useState("")
  const [feedback, setFeedback] = useState("")
  const [score, setScore] = useState(0)
  const [totalGuesses, setTotalGuesses] = useState(0)

  const selectRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * COUNTRIES.length)
    setCurrentCountry(COUNTRIES[randomIndex].country)
    setUserGuess("")
    setFeedback("")
  }

  useEffect(() => {
    selectRandomCountry()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const correctCapital = COUNTRIES.find(c => c.country === currentCountry)?.capital
    if (userGuess.toLowerCase() === correctCapital?.toLowerCase()) {
      setFeedback("Correct!")
      setScore(score + 1)
    } else {
      setFeedback(`Sorry, the correct answer is ${correctCapital}.`)
    }
    setTotalGuesses(totalGuesses + 1)
  }

  const handleNextCountry = () => {
    selectRandomCountry()
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Capital Cities Game</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4 text-center">What is the capital of <strong>{currentCountry}</strong>?</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter capital city"
            className="w-full"
          />
          <Button type="submit" className="w-full">Submit Guess</Button>
        </form>
        {feedback && (
          <p className={`mt-4 text-center ${feedback.startsWith('Correct') ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
          </p>
        )}
        {feedback && (
          <Button onClick={handleNextCountry} className="w-full mt-4">Next Country</Button>
        )}
        <p className="mt-4 text-center">Score: {score} / {totalGuesses}</p>
      </CardContent>
    </Card>
  )
}