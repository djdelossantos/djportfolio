# Portfolio Customization Guide

## How to Replace Placeholder Content with Your Real Work

### 1. Update Contact Information (5 minutes)

**File:** `/components/Contact.tsx`

Replace these placeholder values:
- Line 44: `dan@example.com` → Your real email
- Line 46: `dan@example.com` → Your real email (appears twice)
- Line 57: `https://linkedin.com/in/yourprofile` → Your LinkedIn URL
- Line 80: `https://calendly.com/yourlink` → Your Calendly/calendar link
- Line 104: `[Your Location]` → Your city/location

---

### 2. Update Testimonials (15 minutes)

**File:** `/components/Testimonials.tsx`

**What you need:** Ask 3 former colleagues for testimonials. Here's the template email:

```
Hey [Name],

I'm updating my portfolio and would love to include a testimonial about working together. 
Could you write 2-3 sentences about:
- What you appreciated about my work/approach
- A specific impact or moment that stood out
- What it was like collaborating with me

Thanks!
```

**How to update:**
Lines 15-37: Replace the 3 testimonial objects with your real ones:

```typescript
{
  quote: "Their actual quote here",
  author: "Their Name",
  role: "Their Job Title",
  company: "Company Name",
  relationship: "How you worked together (e.g., 'Direct manager at X')"
}
```

---

### 3. Replace Case Studies with Your Real Projects (Main Work)

**File:** `/components/Work.tsx`

This is where you'll spend most of your time. For each project:

#### **Step 1: Gather Your Assets**

For each project, collect:
- [ ] 1 hero image (screenshot of final product)
- [ ] 4 process images (photos of research, sketches, testing, workshops)
- [ ] 3 solution screenshots (final UI from different angles/states)
- [ ] Project details (company, timeline, team size, your role)
- [ ] Outcome metrics (3-4 specific results with numbers)

#### **Step 2: Upload Images**

Since you'll have real images, you have two options:

**Option A: Use Unsplash for now (quick)**
- Keep using Unsplash URLs as placeholders
- Replace later when you have professional screenshots

**Option B: Use your own images (better)**
- Upload images to a service like Imgur, Cloudinary, or your own server
- Replace the image URLs in the code

#### **Step 3: Update the caseStudies Array**

Lines 52-268 contain the 3 placeholder case studies. Replace each one:

```typescript
{
  title: "YOUR PROJECT NAME",
  tagline: "One sentence describing the core transformation",
  context: {
    company: "Company Name (Industry Type)",
    duration: "X months",
    team: "X designers, X engineers, X PMs, etc.",
    myRole: "Your actual role title"
  },
  problem: "What was wrong? Why did this project exist? Be specific about user pain.",
  challenge: "What made this hard? Include data if you have it (e.g., 'dropout rate was 65%')",
  
  approach: [
    {
      phase: "Research",
      description: "What you did and why. 2-3 sentences in your voice.",
      icon: Search, // Keep this as-is
      details: [
        "Specific method 1 (e.g., '15 user interviews')",
        "Specific method 2 (e.g., 'Analyzed 200 support tickets')",
        "Specific method 3",
        "Specific method 4"
      ]
    },
    {
      phase: "Synthesis",
      description: "What you learned. The key insight.",
      icon: Lightbulb, // Keep this
      details: [
        "How you synthesized (e.g., 'Affinity mapping')",
        "What patterns emerged",
        "How you prioritized",
        "Who you collaborated with"
      ]
    },
    {
      phase: "Exploration",
      description: "How you explored solutions. What you tried.",
      icon: TestTube, // Keep this
      details: [
        "Prototyping approach",
        "Testing methods",
        "Iteration cycles",
        "Validation approach"
      ]
    },
    {
      phase: "Solution",
      description: "What you built and why it worked.",
      icon: Rocket, // Keep this
      details: [
        "Key features designed",
        "Design system work",
        "Collaboration details",
        "Launch approach"
      ]
    }
  ],
  
  processImages: [
    {
      url: "URL to your research photo",
      caption: "What this image shows (e.g., 'User journey map from workshop')",
      phase: "Research" // or "Ideation", "Testing", "Iteration"
    },
    // Add 3 more images
  ],
  
  keyInsight: "The ONE big 'aha!' moment from this project",
  
  solution: "2-3 sentences explaining your solution in plain language",
  
  solutionImages: [
    "URL to screenshot 1",
    "URL to screenshot 2",
    "URL to screenshot 3"
  ],
  
  outcomes: [
    {
      metric: "Specific metric (e.g., 'Time to task reduced 60%')",
      description: "Context about how you measured it"
    },
    // Add 3 more outcomes
  ],
  
  learnings: [
    "One thing you'd do differently",
    "One thing that surprised you",
    "One thing you'll carry forward"
  ],
  
  heroImage: "URL to your hero/header image",
  gradient: "from-violet-500/20 to-fuchsia-500/20" // or change colors
}
```

#### **Step 4: How Many Projects?**

You currently have 3 projects. To add more or remove:

**To add a 4th project:**
- Copy one of the existing objects (lines 52-268)
- Paste it after the 3rd project
- Add a comma after the 3rd project
- Fill in your content

**To remove a project:**
- Delete the entire object block
- Make sure there's a comma between remaining objects

---

### 4. Update Hero Section

**File:** `/components/Hero.tsx`

**What to update:**
- Line 30: Update your name if needed
- Line 33: Keep or modify the description
- Line 36-38: Update the intro paragraph if you want
- Line 64: Confirm "17 years" is still accurate (or update)

---

### 5. Update About Section

**File:** `/components/About.tsx`

This already has your 5-step methodology and AI tools. Only update if:
- Your methodology changes
- You use different tools
- You want to adjust the design principles

**Lines to check:**
- Line 60-123: Your 5-step methodology
- Line 137-202: Your design principles  
- Line 216-297: Your AI tools (already includes ChatGPT, Claude, Gemini, Figma Make)

---

## Quick Start: What to Update First

If you only have 30 minutes right now:

1. **Contact info** (5 min) - So people can actually reach you
2. **Hero name/title** (2 min) - Make sure it's accurate
3. **Pick 1 real project** (23 min) - Replace the first case study with one real project
   - Just the text content, use placeholder images for now
   - Focus on: title, context, problem, approach, outcomes

Then you can gradually:
- Add testimonials when you get them
- Replace images when you have them ready
- Add more projects one at a time

---

## Image Guidelines

**Process Images (4 per project):**
- Photo of research wall/affinity mapping
- Photo/screenshot of early sketches or wireframes
- Photo of user testing session
- Screenshot of design iterations/versions

**Solution Images (3 per project):**
- Final UI - main screen
- Final UI - secondary state or feature
- Final UI - mobile view or detail shot

**Dimensions:**
- Process images: ~800px wide minimum
- Solution images: ~1200px wide minimum
- Hero image: ~1200px wide minimum

---

## Need Help?

Just tell me:
- "Update contact info" → I'll help you replace the contact details
- "Add my project about [X]" → Tell me about your project and I'll help format it
- "Replace testimonials" → Give me the quotes and I'll update them
- "Change colors" → Tell me what palette you want

Ready to start? What would you like to update first?
