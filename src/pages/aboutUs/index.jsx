import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users, Zap } from 'lucide-react';
import { div } from 'framer-motion/client';
import Navbar from '../../components/Navbar';

const TeamMember = ({ name, position, imageUrl }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
    >
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4 border-4 border-green-500" />
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 font-medium">{position}</p>
    </motion.div>
);

const FeatureCard = ({ title, description, icon: Icon }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500"
    >
        <div className="flex items-center mb-4">
            <Icon className="text-green-500 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Frank Koomson",
            position: "Head/Backend Dev",
            imageUrl: "/src/assets/images/frank.jpg"
        },
        {
            name: "Mary-Magdalene",
            position: "Head Librarian/Backend Dev",
            imageUrl: "/api/placeholder/150/150"
        },

        {
            name: "Believe Kwamitse",
            position: "Lead Developer/Frontend Dev",
            imageUrl: "/api/placeholder/150/150"
        },

        {
            name: "Roberta Ayettey",
            position: "UX Designer/Frontend Dev",
            imageUrl: "/api/placeholder/150/150"
        },

        {
            name: "Daniel Essel",
            position: "Marketing Director/Frontend Dev",
            imageUrl: "/api/placeholder/150/150"
        },

    ];

    const features = [
        {
            title: "Detailed Book Information",
            description: "Access comprehensive book data, including descriptions, author details, and genres.",
            icon: Book
        },
        {
            title: "Simple Book Management",
            description: "Easily create, edit, and delete books from your library with a few clicks.",
            icon: Users
        },
        {
            title: "Real-time Feedback",
            description: "Instant notifications help keep track of actions, ensuring a smooth user experience.",
            icon: Zap
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-green-200 to-white m">
                <div className="container mx-auto px- py-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0 }}
                        className="text-5xl font-bold mb-8 text-green-700 text-center"
                    >
                        About BookVault
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-green-300 shadow-xl rounded-lg p-8 mb-16 "
                    >
                        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                            BookVault is dedicated to providing the best library management system to help you organize and manage your book collection efficiently.
                        </p>
                        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                            Founded in 2024, our mission is to simplify the way individuals and institutions catalog, track, and discover books. We believe that a well-organized library is a gateway to knowledge and imagination.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mb-16 bg-green-300 rounded-lg "
                    >
                        <h2 className="text-4xl font-semibold text-green-700 mb-8 text-center ">
                            Our Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 pb-4">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className=' bg-green-300 rounded-lg'
                    >
                        <h2 className="text-4xl font-semibold text-green-700 mb-8 text-center">Our Team</h2>
                        <p className="text-lg mb-8 text-center text-gray-700 max-w-3xl mx-auto">
                            BookVault is powered by a passionate team of librarians, software engineers, and book lovers. We're committed to continually improving our platform to meet the evolving needs of book enthusiasts and libraries worldwide.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 pb-4">
                            {teamMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;