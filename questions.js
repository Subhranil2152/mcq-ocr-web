const questionsData = {
  1: [
      { 
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1 
      },
      { 
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2,
        explanation: "The capital of France is Paris"
      },
      // Add more questions for Day 1
  ],
  2: [
      { 
        question: "What is 3 + 5?",
        options: ["7", "8", "9", "10"],
        answer: 1,
        explanation: "3 + 5 is 8" 
      },
      { 
        question: "What is the capital of Germany?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 0,
        explanation: "The capital of Germany is Berlin"
      },
      // Add more questions for Day 2
  ],
  3: [
      { 
        question: "Following statements about CKD-MBD are true EXCEPT",
        options: [
          "Occurs in CKD only",
          "Osteitis cystica fibrosa is the most common MBD",
          "Phosphate lowering therapy is indicated",
          "Calcium supplementation has no benefit"
        ],
        answer: 3,
        explanation: "Calcium supplementation has no benefit"
      },
      { 
        question: "28-year-old gentleman presented with postural hypotension. He has a history of recurrent loin pain with episodes of hematuria a year back which was investigated and he was diagnosed with nephrocalcinosis. ABG analysis revealed Metabolic Alkalosis with High urinary Chloride levels. The most probable diagnosis is?",
        options: [
          "Barrter's syndrome",
          "Gitelmans syndrome",
          "Liddles syndrome",
          "Gordon's syndrome"
        ],
        answer: 0,
        explanation: "Barrter's syndrome"
      },
      { 
        question: "A 30-year-old male is incidentally detected to have high BP. His Urine Chloride levels are high. Blood gas analysis revealed Metabolic alkalosis with an unmeasurable Renin levels. Which is the likely cause:",
        options: [
          "Barrter's syndrome",
          "Gitelmans syndrome",
          "Liddles syndrome",
          "All of them"
        ],
        answer: 2,
        explanation: "Liddles syndrome is a stimulatory defect in eNaT channels at the DCT. This leads to a state of Pseudo-Hyperaldosteronism: This causes Urinary Na+ and water loss."
      },
      { 
        question: "All of the following statement are true about Bartter syndrome & Gitelmann's syndrome are true except:",
        options: [
          "Autosomal recessive inheritance",
          "Bartters' syndrome presents earlier in life than Gitelmanns syndrome",
          "Hypercalciuria is common in Bartter's syndrome",
          "Genetic defect in barter syndrome involves transporter protein in distal tubule"
        ],
        answer: 3,
        explanation: "Genetic defect in barter syndrome involves transporter protein in distal tubule"
      }
  ],
  4: [
      { 
        question: "Which of the following statement about Dialysis associated Amyloidosis is true?",
        options: [
          "A It is a late complication seen with Haemodialysis",
          "B Peritoneal dialysis can filter ß2 Micro globulin and prevent amyloidosis",
          "C Paraplegia can develop due to destruction of paravertebral ligaments and intervertebral disc",
          "D Analgesic with anti-inflammatory medication is the treatment of choice"
        ],
        answer: 0 
      },
      { 
        question: "Match the following renal tubular defect with their presentation:",
        options: [
          "A. Asymptomatic",
          "B. Cerebral calcifications",
          "C. Nephrocalcinosis",
          "D. Fanconi's syndrome"
        ],
        subOptions: [
          "1. Type 1 RTA",
          "2. Type 2 RTA",
          "3. Type 3 RTA",
          "4. Type 4 RTA"
        ],
        answer: 1
      },
      { 
        question: "All of the following statement are true about Bartter syndrome & Gitelmann's syndrome are true except:",
        options: [
          "A Autosomal recessive inheritance",
          "B Bartter's syndrome presents earlier in life than Gitelmann's syndrome",
          "C Hypercalciuria is common in Bartter's syndrome",
          "D Genetic defect in barter syndrome involves transporter protein in distal tubule"
        ],
        answer: 3,
        explanation: "Option D is incorrect because..."
      }
      // Add more questions for Day 4
  ],
  // Add more days as needed
};

// Export the questionsData object for external use
module.exports = {
    questionsData
};
