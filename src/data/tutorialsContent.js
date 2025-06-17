// Static content for the UsagePage (Tutorials List)

export const tutorialsContent = {
  pageInfo: {
    title: 'Linux Usage & Tutorials',
    description: 'Sharpen your Linux skills with our collection of guides and tutorials. From basic commands to advanced system tasks, find practical help for all levels.',
  },
  tutorials: [
    {
      id: 'mastering-the-command-line',
      category: 'Command Line',
      title: 'Mastering the Terminal',
      description: 'Unlock the core of Linux. Learn essential commands for file navigation, manipulation, and process management.',
      level: 'Beginner',
      delay: '0.1s',
    },
    {
      id: 'apt-package-management', // Note: This ID should match an article ID in articlesContent.js for linking
      category: 'Software',
      title: 'Package Management with APT',
      description: 'Discover how to find, install, update, and remove software on Debian-based systems like a pro.',
      level: 'Beginner',
      delay: '0.2s',
    },
    {
      id: 'bash-scripting-intro', // Note: This ID should match an article ID in articlesContent.js for linking
      category: 'Scripting',
      title: 'Introduction to Bash Scripting',
      description: 'Automate repetitive tasks and build powerful tools by learning the fundamentals of shell scripting.',
      level: 'Intermediate',
      delay: '0.3s',
    },
    {
      id: 'linux-file-permissions', // Note: This ID should match an article ID in articlesContent.js for linking
      category: 'System',
      title: 'Understanding File Permissions',
      description: 'A crucial security concept. Learn how to read and change permissions to control access to files and directories.',
      level: 'Intermediate',
      delay: '0.1s', // Staggering delay restarts for second row potentially
    },
    {
      id: 'desktop-customization', // Note: This ID should match an article ID in articlesContent.js for linking
      category: 'Desktop',
      title: 'Customizing Your Desktop Environment',
      description: 'Make your Linux desktop truly yours. Explore themes, icons, extensions, and window manager tweaks.',
      level: 'Beginner',
      delay: '0.2s',
    },
    {
      id: 'linux-networking-basics', // Note: This ID should match an article ID in articlesContent.js for linking
      category: 'Networking',
      title: 'Basic Linux Networking Commands',
      description: 'Diagnose network issues with `ping`, `ip`, `ss`, and other essential command-line utilities.',
      level: 'Advanced',
      delay: '0.3s',
    },
  ]
};
