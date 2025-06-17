// Static content for the HomePage
// Import icons for FeatureCards
import IconHistory from '../assets/icon-history.svg?react';
import IconDistro from '../assets/icon-distro.svg?react';
import IconUsage from '../assets/icon-usage.svg?react';

export const homeContent = {
  hero: {
    title: 'Explore the Linuxverse',
    subtitle: 'Your ultimate guide to the world of Linux. From its humble beginnings to modern-day power, discover everything you need to know.',
    cta: {
      text: 'Start Exploring',
      link: '#features', // Link to features section on the same page
    },
    terminalLines: [
      { prompt: 'user@linuxverse:~$", text: 'echo "Welcome, developer!"' },
      { text: 'Welcome, developer!' },
      { prompt: 'user@linuxverse:~$", showCursor: true },
    ],
  },
  features: {
    title: 'Discover Linux From Every Angle',
    description: 'Dive into the rich history, explore the diverse ecosystem of distributions, and master essential skills with our curated guides.',
    items: [
      {
        id: 'history',
        icon: IconHistory,
        title: 'History of Linux',
        description: 'Travel back in time to witness the birth and evolution of the kernel that changed the world.',
        link: '/history',
        delay: '0.1s',
      },
      {
        id: 'distros',
        icon: IconDistro,
        title: 'Distro Differences',
        description: 'Ubuntu, Arch, Fedora, Debian... Unravel the vast ecosystem of distributions and find the perfect one for you.',
        link: '/differences',
        delay: '0.2s',
      },
      {
        id: 'usage',
        icon: IconUsage,
        title: 'Usage & Tutorials',
        description: 'From command-line wizardry to desktop customization, get hands-on with practical guides.',
        link: '/usage',
        delay: '0.3s',
      },
    ]
  },
  featuredArticles: {
    title: 'Featured Insights',
    articles: [
      {
        id: 'mastering-the-command-line',
        category: 'Getting Started',
        title: "Mastering the Command Line: A Beginner's Guide",
        description: 'Unlock the true power of Linux by learning the essential commands that every user should know. This guide covers navigation, file manipulation, and more.',
        link: '/article/mastering-the-command-line',
        delay: '0.1s',
      },
      {
        id: 'linux-kernel-architecture',
        category: 'Deep Dive',
        title: 'The Linux Kernel: An Architectural Overview',
        description: 'Explore the core of the operating system. We break down the monolith, from process scheduling to memory management, in an easy-to-understand way.',
        link: '/article/linux-kernel-architecture',
        delay: '0.2s',
      },
    ]
  }
};
