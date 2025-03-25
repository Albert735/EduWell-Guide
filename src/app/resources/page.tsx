"use client";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { VscQuote } from "react-icons/vsc";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

interface TopicType {
  name: string;
  articles: ArticleType[];
}

interface ArticleType {
  title: string;
  content?: string;
  introduction?: string;
  resources: string[];
  conclusion: string;
}

interface FAQType {
  question: string;
  answer: string;
}

const topics: TopicType[] = [
  {
    name: "Academic & Productivity",
    articles: [
      {
        title: "Conquering the Academic Mountain: Strategies for Productivity",
        content:
          "The life of a student is a juggling act. Lectures, assignments, extracurriculars, and maybe even a part-time job – it's a lot to handle! Feeling overwhelmed is a common experience, but it doesn't have to be your default state. The key to navigating this chaos? Productivity. Start by breaking down large tasks into smaller, manageable chunks. Time management is your best friend. Explore techniques like the Pomodoro method, where you work in focused bursts with short breaks. Find a system that works for you, whether it’s a digital planner, a bullet journal, or simple to-do lists. Eliminate distractions. Put your phone on silent, find a quiet study space, and resist the urge to multitask. Focus on one task at a time, and you'll be amazed at how much you can accomplish. Prioritize your tasks based on urgency and importance. Not everything is equally critical. Learn to say “no” to commitments that don’t align with your goals or that will overextend you. Finally, remember to take breaks. Your brain needs time to rest and recharge. Don't feel guilty about taking a walk, listening to music, or just stepping away from your studies for a bit. Effective breaks can actually boost your productivity. Remember, productivity isn't about working harder; it's about working smarter. By implementing these strategies, you can take control of your academic life and achieve your goals with less stress.",
        introduction:
          "In the demanding world of academia, mastering productivity is key to success. This article provides practical strategies to help students manage their time effectively and achieve their academic goals without feeling overwhelmed.",
        resources: [
          "Pomodoro Technique: [https://pomodorotechnique.com/](https://pomodorotechnique.com/)",
          "Time Management Apps: Todoist, Google Calendar, Notion",
          "Study Skills Guides from Your University's Academic Support Center",
        ],
        conclusion:
          "By implementing these productivity tips and utilizing the resources available, you can transform your academic experience from stressful to successful. Remember, small changes can lead to significant improvements in your productivity and overall well-being.",
      },
    ],
  },
  {
    name: "Mental Health & Well-being",
    articles: [
      {
        title: "Your Mind Matters: Prioritizing Mental Health and Well-being",
        content:
          "The pressure to succeed academically can take a toll on your mental health. It’s easy to neglect your well-being when you're caught up in the whirlwind of student life, but prioritizing your mental health is just as important as acing your exams. Recognize the signs of stress. Are you feeling overwhelmed, irritable, or constantly tired? These could be indicators that you need to take a step back and focus on self-care. Make time for activities that you enjoy, whether it’s reading, painting, playing sports, or spending time with friends. Build a support system. Talk to trusted friends, family members, or counselors about your struggles. You don't have to face your challenges alone. Remember, seeking help is a sign of strength, not weakness. Practice mindfulness and relaxation techniques. Deep breathing, meditation, and yoga can help you calm your mind and reduce stress. Ensure you are getting enough sleep. A consistent sleep schedule is crucial for both your physical and mental health. Don't neglect your physical health. Eat nutritious foods, exercise regularly, and stay hydrated. These habits can significantly impact your mood and energy levels. Remember, taking care of your mental health is an ongoing process. Be patient with yourself, and don't be afraid to seek professional help when needed.",
        introduction:
          "Maintaining good mental health is essential for academic success and overall well-being. This article offers strategies for students to prioritize their mental health and navigate the challenges of university life.",
        resources: [
          "National Alliance on Mental Illness (NAMI): [https://www.nami.org/](https://www.nami.org/)",
          "The Jed Foundation: [https://www.jedfoundation.org/](https://www.jedfoundation.org/)",
          "University Counseling Services",
          "Mindfulness Apps: Headspace, Calm",
        ],
        conclusion:
          "Your mental health is just as important as your academic performance. By implementing these strategies and seeking support when needed, you can build resilience and thrive in your academic journey.",
      },
    ],
  },
  {
    name: "Career Development & Life Skills",
    articles: [
      {
        title: "Charting Your Course: Career Development and Life Skills",
        content:
          "College isn’t just about academics; it’s also about preparing for your future. Start thinking about your career early on. Explore different fields, attend career fairs, and network with professionals in your areas of interest. Develop essential life skills. Communication, critical thinking, and problem-solving are valuable in any profession. Seek out opportunities to enhance these skills through internships, volunteer work, or part-time jobs. Build your network. Connect with professors, classmates, and professionals in your field. Attend workshops and conferences to expand your knowledge and meet new people. Your network can open doors to exciting opportunities. Don't be afraid to try new things. Step outside your comfort zone and explore different interests. You might discover a hidden talent or passion that leads you down an unexpected career path. Remember, career development is a journey, not a destination. Be open to change and adapt to new opportunities as they arise. Your college years are a time for exploration and growth, so make the most of them.",
        introduction:
          "Preparing for your career starts in college. This article outlines key steps to develop essential life skills and build a strong foundation for your professional future.",
        resources: [
          "LinkedIn Learning: [https://www.linkedin.com/learning/](https://www.linkedin.com/learning/)",
          "Career Services at Your University",
          "Professional Networking Platforms: LinkedIn, Handshake",
          "Internship and Job Search Websites: Indeed, Glassdoor",
        ],
        conclusion:
          "By actively engaging in career development activities and building essential life skills, you can position yourself for success in the job market. Your college years are a valuable time to explore, learn, and grow.",
      },
    ],
  },
  {
    name: "Financial Literacy",
    articles: [
      {
        title: "Dollars and Sense: Building Financial Literacy",
        content:
          "Understanding personal finance is a crucial life skill, and it's never too early to start learning. As a student, you're likely navigating budgets, loans, and other financial responsibilities. Create a budget. Track your income and expenses to understand where your money is going. There are many apps and tools available to help you with this. Learning to manage your finances early will save you a lot of headache later. Avoid unnecessary debt. Credit cards can be useful tools, but they can also lead to debt if not used responsibly. Pay your bills on time and avoid spending more than you can afford. Learn about investing. Even small amounts of money can grow over time. Start by researching different investment options and consider opening a savings or investment account. Take advantage of student discounts. Many businesses offer discounts to students, so be sure to ask. This can help you save money on everything from food to entertainment. Educate yourself. Read books, articles, and blogs about personal finance. Attend workshops and seminars to learn from experts. Building financial literacy is an ongoing process, so stay informed and keep learning.",
        introduction:
          "Financial literacy is a critical skill for students, helping them manage budgets, understand loans, and plan for their future. This article provides practical tips to build financial awareness and responsibility.",
        resources: [
          "Practical Money Skills: [https://www.practicalmoneyskills.com/](https://www.practicalmoneyskills.com/)",
          "Investopedia: [https://www.investopedia.com/](https://www.investopedia.com/)",
          "Budgeting Apps: Mint, YNAB",
          "Financial Aid Offices at Your University",
        ],
        conclusion:
          "Building financial literacy is a lifelong journey. By starting early and utilizing the resources available, you can develop sound financial habits and secure your financial future.",
      },
    ],
  },
];

const faqs: FAQType[] = [
  {
    question: "How do I improve my time management?",
    answer:
      "Breaking down tasks, using time-blocking techniques like the Pomodoro method, and prioritizing based on urgency can significantly improve time management.",
  },
  {
    question: "What are some effective stress management techniques?",
    answer:
      "Mindfulness, regular exercise, adequate sleep, and building a strong support system are crucial for managing stress.",
  },
  {
    question: "How can I build my professional network?",
    answer:
      "Attending career fairs, using platforms like LinkedIn, and participating in industry events are great ways to expand your professional network.",
  },
  {
    question: "What are the basics of budgeting for students?",
    answer:
      "Tracking income and expenses, creating a monthly budget, and avoiding unnecessary debt are fundamental steps in budgeting.",
  },
  {
    question: "Where can I find mental health support on campus?",
    answer:
      "Most universities offer counseling services, and there are also national resources like NAMI that provide support and information.",
  },
  {
    question: "How can I find internships without prior experience?",
    answer:
      "Focus on showcasing transferable skills, network with alumni, and utilize university career services.",
  },
  {
    question: "Is there any software that can help with productivity?",
    answer:
      "Yes, there are many. Todoist, Google Calendar, and Notion are some of the popular applications used to help with productivity.",
  },
];

export default function ResourcesPage() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="container flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 gap-[7rem] py-[5rem]">
      <div className="flex flex-col justify-center items-center gap-4 space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Unlock Your Full Potential with Expert <br /> Advice & Free Resources
        </h1>
        <p className="text-center max-w-[40rem]  leading-relaxed">
          Explore expert-backed guides, career tips, mental wellness strategies,
          <br />
          and study hacks—all in one place.
        </p>
      </div>

      <div className="bg-[url(/assets/blurry-gradient-haikei.png)] bg-cover bg-center bg-no-repeat rounded-xl w-full h-[20rem]"></div>

      <div className="container mx-auto p-4 ">
        {/* <div>
          <h2 className="text-3xl font-bold  mb-8">
            Trending Topics for University Students
          </h2>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] w-full">
          {/* category list  */}
          <div className="md:col-span-1">
            <ul className="space-y-4">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 flex justify-between items-center ${
                    selectedTopic === topic
                      ? "border-l-2 p-2 border-black dark:border-white bg-gray-100 dark:bg-white/10"
                      : ""
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic.name}
                  <IoArrowForward />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 w-full flex flex-col gap-8">
            <ul className="flex flex-col gap-8">
              {selectedTopic.articles.map((article, index) => (
                <li key={index} className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">{article.title}</h3>
                    {/* conditional rendering  */}
                    {article.introduction && (
                      <div className="space-y-2">
                        <p className="font-medium">Introduction</p>
                        <p className=" leading-relaxed">
                          {article.introduction}
                        </p>
                      </div>
                    )}
                  </div>
                  {article.content && (
                    <div>
                      <p className=" leading-relaxed">{article.content}</p>
                    </div>
                  )}
                  {article.resources && (
                    <div className="space-y-2">
                      <p className="font-medium">Resources</p>
                      <ul>
                        {article.resources.map((resources, resourceIndex) => (
                          <li
                            key={resourceIndex}
                            className="list-disc ml-4 space-y-4  leading-relaxed"
                          >
                            <a
                              // Sets href to the resource if it's a valid URL; otherwise, disables the link.
                              href={
                                resources.startsWith("http") ? resources : "#"
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {/* Extracts and displays the text before : as the link label.  */}
                              {resources.split(":")[0]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {article.conclusion && (
                    <div className="space-y-2">
                      <p className="font-medium">Conclusion</p>
                      <p className=" leading-relaxed">{article.conclusion}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* blog and faq  */}

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-[3rem] w-full">
        <div className="">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        </div>
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="w-full md:col-span-3"
        >
          {faqs.map((faqs, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faqs.question}</AccordionTrigger>
              <AccordionContent>{faqs.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* cta  */}
      <div className="container flex flex-col justify-center items-center mx-auto p-4 w-full space-y-4">
        <h1 className="text-3xl font-bold text-center">
          Take the Next Step Toward <br />
          Your Success!
        </h1>
        <p className="text-center max-w-[30rem]  leading-relaxed flex items-start gap-2">
          <VscQuote size={20} />
          Ready to improve your academic and personal life? <br /> Find the
          right counselor today!
          <VscQuote size={20} className="rotate-180" />
        </p>

        <Link href="/join">
          <Button variant="default" className="mt-4 rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
