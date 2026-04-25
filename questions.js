// questions.js - 20 Questions for Class 9-10 Hacking Simulator

const questions = [
  // Easy (50 points) - 8 Questions
  {
    id: 1,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "What is a Phishing link?",
    options: [
      "A safe link from your friend",
      "A fake link that looks real to steal your information",
      "A link to download free games",
      "A link for watching videos"
    ],
    correct: 1
  },
  {
    id: 2,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "Which of these is the strongest password?",
    options: [
      "password123",
      "admin",
      "MyName@2026Varanasi!",
      "12345678"
    ],
    correct: 2
  },
  {
    id: 3,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "What should you do if you receive a suspicious email asking for your password?",
    options: [
      "Reply with your password",
      "Click the link immediately",
      "Delete the email and inform your teacher",
      "Forward it to your friends"
    ],
    correct: 2
  },
  {
    id: 4,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "What is Malware?",
    options: [
      "Helpful software",
      "Harmful software that can damage your computer or steal data",
      "A new type of game",
      "An antivirus program"
    ],
    correct: 1
  },
  {
    id: 5,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "Which one is a safe practice?",
    options: [
      "Sharing your password with friends",
      "Using the same password everywhere",
      "Using different strong passwords for different accounts",
      "Writing password on a paper and keeping it on table"
    ],
    correct: 2
  },
  {
    id: 6,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "What does 'https://' in a URL mean?",
    options: [
      "The website is fast",
      "The website is secure and encrypted",
      "The website is free",
      "The website has games"
    ],
    correct: 1
  },
  {
    id: 7,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "Ransomware is a type of malware that:",
    options: [
      "Makes your computer faster",
      "Encrypts your files and asks for money",
      "Plays music",
      "Helps you study"
    ],
    correct: 1
  },
  {
    id: 8,
    type: "mcq",
    difficulty: "easy",
    points: 50,
    question: "What is Social Engineering?",
    options: [
      "Building bridges",
      "Tricking people to give away confidential information",
      "A new subject in school",
      "A type of hacking tool"
    ],
    correct: 1
  },

  // Medium (100 points) - 7 Questions
  {
    id: 9,
    type: "mcq",
    difficulty: "medium",
    points: 100,
    question: "Which of these is an example of a Phishing attack?",
    options: [
      "Receiving a call from your bank asking for OTP",
      "Getting a WhatsApp message from unknown number with a link",
      "Both A and B",
      "None of the above"
    ],
    correct: 2
  },
  {
    id: 10,
    type: "mcq",
    difficulty: "medium",
    points: 100,
    question: "What is a strong way to protect your accounts?",
    options: [
      "Two-Factor Authentication (2FA)",
      "Using only one password",
      "Turning off antivirus",
      "Sharing password via email"
    ],
    correct: 0
  },
  {
    id: 11,
    type: "mcq",
    difficulty: "medium",
    points: 100,
    question: "What does a Trojan horse malware do?",
    options: [
      "It disguises itself as a useful program but harms your system",
      "It makes your computer run very fast",
      "It cleans your computer",
      "It helps in coding"
    ],
    correct: 0
  },
  {
    id: 12,
    type: "mcq",
    difficulty: "medium",
    points: 100,
    question: "If you see a pop-up saying 'Your computer is infected, click here to fix', you should:",
    options: [
      "Click immediately",
      "Close it and scan with real antivirus",
      "Enter your details",
      "Share the link with friends"
    ],
    correct: 1
  },
  {
    id: 13,
    type: "fill",
    difficulty: "medium",
    points: 100,
    question: "Full form of OTP (used in banking)",
    correct: "one time password"
  },
  {
    id: 14,
    type: "mcq",
    difficulty: "medium",
    points: 100,
    question: "Which is safer: Public WiFi or Mobile Hotspot?",
    options: [
      "Public WiFi",
      "Mobile Hotspot (with password)",
      "Both are equally safe",
      "None"
    ],
    correct: 1
  },
  {
    id: 15,
    type: "mcq",
    difficulty: "medium",
    points: 100,
    question: "What is the best action after clicking a suspicious link by mistake?",
    options: [
      "Ignore it",
      "Change all your passwords and scan your device",
      "Continue using the same device normally",
      "Tell no one"
    ],
    correct: 1
  },

  // Hard (150 points) - 5 Questions
  {
    id: 16,
    type: "fill",
    difficulty: "hard",
    points: 150,
    question: "What is the name of malware that locks your files and demands ransom? (one word)",
    correct: "ransomware"
  },
  {
    id: 17,
    type: "mcq",
    difficulty: "hard",
    points: 150,
    question: "Which of these is a sign of a hacked account?",
    options: [
      "You receive emails you didn't send",
      "Your friends get strange messages from your account",
      "Both A and B",
      "Your internet is slow"
    ],
    correct: 2
  },
  {
    id: 18,
    type: "fill",
    difficulty: "hard",
    points: 150,
    question: "What does VPN stand for? (full form)",
    correct: "virtual private network"
  },
  {
    id: 19,
    type: "mcq",
    difficulty: "hard",
    points: 150,
    question: "Why should you avoid downloading cracked software?",
    options: [
      "It is illegal",
      "It often contains malware",
      "Both A and B",
      "It is very expensive"
    ],
    correct: 2
  },
  {
    id: 20,
    type: "fill",
    difficulty: "hard",
    points: 150,
    question: "What is the best way to create a strong password? (short answer)",
    correct: "mix uppercase lowercase numbers special characters"
  }
];