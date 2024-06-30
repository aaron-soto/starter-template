'use client';

import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import SectionHeading from '../style-components/SectionHeading';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

export enum FaqVoteType {
  Upvote = 'upvote',
  Downvote = 'downvote',
}

const faqs: Faq[] = [
  {
    id: 1,
    question: 'What services does your web development agency offer?',
    answer:
      'We offer comprehensive web development services, including custom web app development, e-commerce solutions, responsive website design, and maintenance and support.',
  },
  {
    id: 2,
    question: 'How do I start a project with your agency?',
    answer:
      'To start a project, you can contact us through our website’s contact form or call us directly. We will schedule a consultation to understand your requirements and provide a detailed proposal.',
  },
  {
    id: 3,
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web development technologies such as Next.js, React, Node.js, and TypeScript. We also have expertise in using Supabase for backend services and ShadCN for UI components.',
  },
  {
    id: 4,
    question: 'How long does it take to develop a web app?',
    answer:
      'The development time for a web app varies based on the complexity and requirements of the project. On average, a custom web app can take anywhere from a few weeks to several months to complete.',
  },
  {
    id: 5,
    question: 'Do you provide post-launch support?',
    answer:
      'Yes, we provide ongoing support and maintenance services to ensure your web app remains up-to-date and functions smoothly. We offer various support plans tailored to your needs.',
  },
];

const handleFaqVote = async (
  questionId: number,
  type: FaqVoteType,
): Promise<void> => {
  try {
    const response = await fetch('/api/trackFaqVote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: questionId, type }),
    });
    if (response.ok) {
      toast({
        title: 'Thank you for your feedback!',
      });
    } else {
      toast({
        title: 'Failed to record vote',
      });
    }
  } catch (error) {
    toast({
      title: 'Failed to record vote',
      description: 'Please try again later.',
    });
  }
};

const FAQSection = () => {
  const [votes, setVotes] = useState<{
    [key: number]: { upvote: boolean; downvote: boolean };
  }>({});

  useEffect(() => {
    const storedVotes = localStorage.getItem('faqVotes');
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, []);

  const handleVoteClick = (faqId: number, voteType: FaqVoteType) => {
    const currentVotes = { ...votes };
    if (voteType === FaqVoteType.Upvote) {
      currentVotes[faqId] = {
        upvote: !currentVotes[faqId]?.upvote,
        downvote: false,
      };
    } else {
      currentVotes[faqId] = {
        upvote: false,
        downvote: !currentVotes[faqId]?.downvote,
      };
    }
    setVotes(currentVotes);
    localStorage.setItem('faqVotes', JSON.stringify(currentVotes));
    handleFaqVote(faqId, voteType);
  };

  return (
    <div className="container py-20">
      <SectionHeading
        title="Ask us anything"
        description="Have any questions? We have the answers."
      />
      <Accordion type="single" collapsible>
        {faqs.map((faq: Faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
              <p className="text-xs text-gray-500 mt-4 mb-2">
                Was this helpful?
              </p>
              <div className="flex gap-4 text-md">
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    'flex items-center gap-2 text-xs',
                    votes[faq.id]?.upvote &&
                      'text-green-400 hover:text-green-600 bg-green-50/80 hover:bg-green-50 dark:bg-green-900 dark:hover:text-green-400 dark:hover:bg-green-800',
                  )}
                  onClick={() => handleVoteClick(faq.id, FaqVoteType.Upvote)}
                >
                  <ThumbsUp height={18} width={18} />
                  Upvote
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    'flex items-center gap-2 text-xs',
                    votes[faq.id]?.downvote &&
                      'text-red-400 hover:text-red-600 bg-red-50/80 hover:bg-red-50 dark:bg-red-900 dark:hover:text-red-400 dark:hover:bg-red-800',
                  )}
                  onClick={() => handleVoteClick(faq.id, FaqVoteType.Downvote)}
                >
                  <ThumbsDown height={18} width={18} />
                  Downvote
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
