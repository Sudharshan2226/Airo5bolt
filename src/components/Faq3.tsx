import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={`group rounded-lg border border-gray-600/50 transition-all duration-200 ease-in-out ${
        isOpen
          ? 'bg-gradient-to-br from-black via-gray-900/50 to-black'
          : 'hover:bg-gray-900/30'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-transparent"
      >
        <h3
          className={`text-base font-medium transition-colors duration-200 ${
            isOpen ? 'text-white' : 'text-white/70'
          }`}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={`p-0.5 rounded-full flex-shrink-0 transition-colors duration-200 ${
            isOpen ? 'text-white' : 'text-gray-400'
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-gray-300 leading-relaxed"
              >
                {answer}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs: Omit<FAQItemProps, 'index'>[] = [
    {
      question: 'What is the event about?',
      answer: 'The event is focused on showcasing various technical skills through competitions and workshops.',
    },
    {
      question: 'Who can participate in the event?',
      answer: 'The event is open to all students and professionals interested in technology and innovation.',
    },
    {
      question: 'How do I register for the event?',
      answer: 'You can register for the event through our official events website. Visit the registration page and fill out the required details.',
    },
    {
      question: 'What is the schedule for the event?',
      answer: 'The event schedule will be shared on our website and social media channels. Stay tuned for updates.',
    },
    {
      question: 'Is there any participation fee?',
      answer: 'NO, there is no participation fee for the events.',
    },
    {
      question: 'What about food and travel accommodation?',
      answer: (
        <div>
          Food will be provided and transportation will be provided from Tambaram. Also please refer to the below PDF
          <br />
          <a 
            href="/Bus Boarding Point.pdf" 
            download 
            className="text-white hover:text-gray-300 underline transition-colors duration-300"
          >
            Sairam Bus Transport Routes
          </a>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 w-full bg-gradient-to-b from-transparent via-black/50 to-transparent" id="faq-section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10" />
      <div className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-gray-600/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-gray-600/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent tracking-wider uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
