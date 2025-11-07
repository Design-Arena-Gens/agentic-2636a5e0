'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'bot'
  content: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hello! I'm your Daily Routine AI Bot. I can help you plan your day, create morning/evening routines, set goals, and provide motivation. How can I assist you today?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase()

    if (lowerMsg.includes('morning') && (lowerMsg.includes('routine') || lowerMsg.includes('schedule'))) {
      return `Here's a great morning routine I recommend:

<div class="routine-card">
<h3>🌅 Morning Routine (6:00 AM - 9:00 AM)</h3>
<ul>
<li>6:00 AM - Wake up, drink a glass of water</li>
<li>6:15 AM - 10-minute meditation or stretching</li>
<li>6:30 AM - Shower and get ready</li>
<li>7:00 AM - Healthy breakfast (protein + fruits)</li>
<li>7:30 AM - Review daily goals and to-do list</li>
<li>8:00 AM - Start your most important task</li>
</ul>
</div>

Would you like me to customize this based on your wake-up time or specific goals?`
    }

    if (lowerMsg.includes('evening') || lowerMsg.includes('night')) {
      return `Here's an effective evening routine:

<div class="routine-card">
<h3>🌙 Evening Routine (8:00 PM - 10:00 PM)</h3>
<ul>
<li>8:00 PM - Light dinner (finish 2-3 hours before bed)</li>
<li>8:30 PM - Reflect on the day, journal gratitude</li>
<li>9:00 PM - Prepare for tomorrow (layout clothes, pack bag)</li>
<li>9:15 PM - Wind down activities (reading, light stretching)</li>
<li>9:45 PM - No screens - relaxation time</li>
<li>10:00 PM - Sleep</li>
</ul>
</div>

Consistent evening routines improve sleep quality by 40%! Need adjustments?`
    }

    if (lowerMsg.includes('productive') || lowerMsg.includes('productivity')) {
      return `Here are my top productivity tips for your daily routine:

<div class="routine-card">
<h3>⚡ Productivity Boosters</h3>
<ul>
<li>Use the Pomodoro Technique: 25 min work, 5 min break</li>
<li>Tackle your hardest task first thing in the morning</li>
<li>Block social media during deep work sessions</li>
<li>Take a 20-minute walk after lunch</li>
<li>Batch similar tasks together</li>
<li>Keep your workspace clean and organized</li>
</ul>
</div>

Which area would you like to focus on improving?`
    }

    if (lowerMsg.includes('exercise') || lowerMsg.includes('workout') || lowerMsg.includes('fitness')) {
      return `Here's a balanced exercise routine to integrate into your day:

<div class="routine-card">
<h3>💪 Daily Exercise Plan</h3>
<ul>
<li>Morning: 10-minute stretching or yoga</li>
<li>Midday: 30-minute cardio (walk, run, or bike)</li>
<li>Evening: 20-minute strength training (3-4 times/week)</li>
<li>Throughout day: Stand up and move every hour</li>
<li>Weekend: Longer outdoor activities or sports</li>
</ul>
</div>

Even 20 minutes of daily movement makes a huge difference! What's your current fitness level?`
    }

    if (lowerMsg.includes('goal') || lowerMsg.includes('goals')) {
      return `Let me help you set up effective daily goals:

<div class="routine-card">
<h3>🎯 Daily Goal Framework</h3>
<ul>
<li>Set 3 main priorities for the day (not more!)</li>
<li>Make them specific and measurable</li>
<li>Schedule them in your calendar with time blocks</li>
<li>Review progress at midday and adjust if needed</li>
<li>Celebrate completions, no matter how small</li>
<li>Roll incomplete tasks to tomorrow with a plan</li>
</ul>
</div>

What are your top 3 goals for today?`
    }

    if (lowerMsg.includes('help') || lowerMsg.includes('what can you')) {
      return `I can help you with:

• **Morning & Evening Routines** - Personalized schedules
• **Productivity Tips** - Maximize your efficiency
• **Exercise Planning** - Daily fitness integration
• **Goal Setting** - Daily and long-term objectives
• **Meal Planning** - Healthy eating schedules
• **Sleep Optimization** - Better rest habits
• **Time Management** - Organize your day
• **Motivation** - Daily inspiration and accountability

Just ask me about any of these topics!`
    }

    if (lowerMsg.includes('meal') || lowerMsg.includes('eat') || lowerMsg.includes('food')) {
      return `Here's a healthy daily meal schedule:

<div class="routine-card">
<h3>🍽️ Daily Meal Plan</h3>
<ul>
<li>7:00 AM - Breakfast: Oatmeal with fruits & nuts</li>
<li>10:00 AM - Snack: Greek yogurt or apple</li>
<li>12:30 PM - Lunch: Lean protein, veggies, whole grains</li>
<li>3:30 PM - Snack: Handful of almonds or hummus</li>
<li>6:30 PM - Dinner: Balanced plate with lots of vegetables</li>
<li>8:30 PM - Optional: Herbal tea</li>
</ul>
</div>

Stay hydrated with 8 glasses of water throughout the day! Any dietary preferences?`
    }

    if (lowerMsg.includes('sleep') || lowerMsg.includes('tired')) {
      return `Let me help optimize your sleep:

<div class="routine-card">
<h3>😴 Sleep Optimization Tips</h3>
<ul>
<li>Stick to consistent sleep/wake times (even weekends!)</li>
<li>Get 7-9 hours of quality sleep</li>
<li>No screens 1 hour before bed</li>
<li>Keep bedroom cool (65-68°F / 18-20°C)</li>
<li>Avoid caffeine after 2 PM</li>
<li>Use blackout curtains and white noise if needed</li>
</ul>
</div>

Good sleep is the foundation of a productive day! What time do you usually sleep?`
    }

    if (lowerMsg.includes('motivat') || lowerMsg.includes('inspir')) {
      return `Here's your daily motivation boost! 💪

**Remember:** Every expert was once a beginner. You're making progress every single day, even when it doesn't feel like it.

**Today's Focus:** Show up, do your best, and trust the process.

**Quick Wins:**
• You woke up today - that's a victory!
• You're seeking to improve - that's growth!
• You're here planning your routine - that's commitment!

The difference between who you are and who you want to be is what you do. Let's make today count! What's one thing you'll accomplish today?`
    }

    if (lowerMsg.includes('thank')) {
      return "You're very welcome! I'm here whenever you need support with your daily routine. Keep up the great work! 🌟"
    }

    // Default response
    return `I'd be happy to help you with that! I specialize in:

• Creating morning and evening routines
• Productivity and time management tips
• Exercise and fitness planning
• Goal setting and tracking
• Meal planning and nutrition
• Sleep optimization
• Daily motivation

Could you tell me more specifically what aspect of your daily routine you'd like to improve? Or try asking about "morning routine", "productivity tips", or "goal setting"!`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Simulate thinking time
    setTimeout(() => {
      const botResponse = generateResponse(userMessage)
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }])
      setIsLoading(false)
    }, 800)
  }

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🤖 Daily Routine AI Bot</h1>
        <p>Your personal assistant for a more organized and productive life</p>
      </div>

      <div className="chat-container">
        <div className="messages">
          {messages.length === 1 && (
            <div className="suggestions">
              <button
                className="suggestion-btn"
                onClick={() => handleSuggestion("Create a morning routine for me")}
              >
                🌅 Morning Routine
              </button>
              <button
                className="suggestion-btn"
                onClick={() => handleSuggestion("Help me be more productive")}
              >
                ⚡ Productivity Tips
              </button>
              <button
                className="suggestion-btn"
                onClick={() => handleSuggestion("Set up exercise routine")}
              >
                💪 Exercise Plan
              </button>
              <button
                className="suggestion-btn"
                onClick={() => handleSuggestion("Help me sleep better")}
              >
                😴 Sleep Better
              </button>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role}`}
              dangerouslySetInnerHTML={{ __html: message.content }}
            />
          ))}

          {isLoading && (
            <div className="message bot">
              <div className="loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="input-area">
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about your daily routine..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
