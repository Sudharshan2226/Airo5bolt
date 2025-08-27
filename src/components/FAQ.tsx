import { useState } from 'react';
import { ChevronDown, Mail, MessageCircle } from 'lucide-react';

export default function EnhancedFAQ() {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const faqItems = [
        {
            id: 'event-about',
            question: 'What is the event about?',
            answer: 'The event is focused on showcasing various technical skills through competitions and workshops.',
            details: []
        },
        {
            id: 'who-can-participate',
            question: 'Who can participate in the event?',
            answer: 'The event is open to all overalls and professionals interested in technology and innovation.',
            details: []
        },
        {
            id: 'how-to-register',
            question: 'How do I register for the event?',
            answer: 'You can register for the event through our official events website. Visit the registration page and fill out the required details.',
            details: []
        },
        {
            id: 'event-schedule',
            question: 'What is the schedule for the event?',
            answer: 'The event schedule will be shared on our website and social media channels. Stay tuned for updates.',
            details: []
        },
        {
            id: 'participation-fee',
            question: 'Is there any participation fee?',
            answer: 'NO, there is no participation fee for the events.',
            details: []
        },
        {
            id: 'food-accommodation',
            question: 'What about food and travel accommodation?',
            answer: 'Food will be provided and transportation will be provided from Tambaram. Also please refer to the below PDF',
            details: [
                'Download: Sairam Bus Transport Routes (Bus Boarding Point.pdf)'
            ]
        }
    ];

    return (
        <section className="py-16 md:py-32 bg-black">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about our event, registration, and participation details.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqItems.map((item) => {
                            const isOpen = openItems.has(item.id);
                            return (
                                <div 
                                    key={item.id}
                                    className="bg-gray-900 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <button
                                        onClick={() => toggleItem(item.id)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800 rounded-xl transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold text-white pr-4">
                                            {item.question}
                                        </h3>
                                        <ChevronDown 
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    
                                    <div className={`overflow-hidden transition-all duration-200 ${
                                        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}>
                                        <div className="px-6">
                                            <div className="border-t border-gray-700 pt-4">
                                                <p className="text-gray-300 mb-4">
                                                    {item.answer}
                                                </p>
                                                {item.details.length > 0 && (
                                                    <ul className="space-y-2 text-gray-300">
                                                        {item.details.map((detail, detailIndex) => (
                                                            <li key={detailIndex} className="flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Still need help?
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Our support team is available 24/7 to assist you with any questions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                    Live Chat
                                </button>
                                <button className="flex items-center justify-center gap-3 border border-gray-600 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">
                                    <Mail className="w-5 h-5" />
                                    Email Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
