const articles = [
  {
    id: 'mastering-the-command-line',
    category: 'Command Line',
    title: "Mastering the Command Line: A Beginner's Guide",
    author: 'The Linuxverse Team',
    date: 'October 26, 2024',
    readTime: '8 min read',
    content: [
      {
        type: 'paragraph',
        text: "The command-line interface (CLI), or terminal, is one of the most powerful features of Linux. While graphical user interfaces (GUIs) are great for many tasks, the CLI offers unparalleled speed, control, and automation capabilities. This guide will introduce you to the fundamental commands you need to get started.",
      },
      {
        type: 'heading',
        level: 2,
        text: 'Navigating the Filesystem',
      },
      {
        type: 'paragraph',
        text: "Moving around your computer's directories is a primary task. Here are the key commands:",
      },
      {
        type: 'list',
        items: [
          "<code>pwd</code> (print working directory): Shows you the full path of the directory you are currently in.",
          "<code>ls</code> (list): Lists the files and directories in your current location. Use <code>ls -la</code> for a more detailed, long-form list including hidden files.",
          "<code>cd</code> (change directory): Used to move to a different directory. <code>cd ..</code> moves up one level, while <code>cd /home/user/Documents</code> moves to a specific path.",
        ],
      },
      {
        type: 'paragraph',
        text: 'Let\'s see them in action. First, check where you are:',
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ pwd\n/home/developer',
      },
      {
        type: 'paragraph',
        text: 'Now, list the contents and move into the <code>projects</code> directory.',
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ ls\nDesktop  Documents  Downloads  Music  Pictures  projects  Videos\n\n$ cd projects\n\n$ pwd\n/home/developer/projects',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Working with Files and Directories',
      },
      {
        type: 'paragraph',
        text: "Once you can navigate, you'll want to create, move, copy, and delete files and directories.",
      },
      {
        type: 'heading',
        level: 3,
        text: 'Creating',
      },
      {
        type: 'list',
        items: [
          "<code>mkdir &lt;directory-name&gt;</code>: Creates a new directory.",
          "<code>touch &lt;file-name&gt;</code>: Creates a new, empty file.",
        ],
      },
      {
        type: 'code',
        language: 'bash',
        text: '# Create a new directory for our website\n$ mkdir my-website\n\n# Create an HTML file inside it\n$ touch my-website/index.html',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Copying and Moving',
      },
      {
        type: 'list',
        items: [
          "<code>cp &lt;source&gt; &lt;destination&gt;</code>: Copies a file. Use <code>cp -r</code> to copy a directory and its contents.",
          "<code>mv &lt;source&gt; &lt;destination&gt;</code>: Moves or renames a file or directory.",
        ],
      },
      {
        type: 'code',
        language: 'bash',
        text: '# Copy the index file to create an about page\n$ cp my-website/index.html my-website/about.html\n\n# Rename the directory\n$ mv my-website my-awesome-website',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Deleting',
      },
      {
        type: 'paragraph',
        text: "<strong>Warning:</strong> These commands are permanent. There is no \"trash bin\" in the default CLI.",
      },
      {
        type: 'list',
        items: [
          "<code>rm &lt;file-name&gt;</code>: Removes a file.",
          "<code>rmdir &lt;directory-name&gt;</code>: Removes an <em>empty</em> directory.",
          "<code>rm -r &lt;directory-name&gt;</code>: Removes a directory and all its contents (recursive).",
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: "This is just the tip of the iceberg. The command line is a deep and powerful tool. By mastering these basic commands, you've taken your first step into a larger world of efficiency and control. Keep practicing, and soon these commands will become second nature.",
      },
    ],
  },
  {
    id: 'package-management-apt',
    category: 'Software',
    title: 'Package Management with APT',
    author: 'The Linuxverse Team',
    date: 'October 27, 2024',
    readTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        text: "APT (Advanced Package Tool) is the cornerstone of package management on Debian-based Linux distributions like Ubuntu. It simplifies installing, updating, and removing software. This guide covers the basics of using <code>apt</code>.",
      },
      {
        type: 'heading',
        level: 2,
        text: 'Updating Package Lists',
      },
      {
        type: 'paragraph',
        text: "Before installing or upgrading packages, it's crucial to update your local package list. This ensures you're getting the latest versions available from the repositories.",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ sudo apt update',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Installing Packages',
      },
      {
        type: 'paragraph',
        text: "To install a package, use <code>apt install</code> followed by the package name. For example, to install the text editor <code>nano</code>:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ sudo apt install nano',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Upgrading Packages',
      },
      {
        type: 'paragraph',
        text: "To upgrade all currently installed packages to their newest versions:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ sudo apt upgrade',
      },
      {
        type: 'paragraph',
        text: "To perform a full upgrade, which can remove packages if necessary to complete the upgrade:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ sudo apt full-upgrade',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Removing Packages',
      },
      {
        type: 'paragraph',
        text: "To remove a package:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ sudo apt remove nano',
      },
      {
        type: 'paragraph',
        text: "To remove a package along with its configuration files:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ sudo apt purge nano',
      },
      {
        type: 'paragraph',
        text: "Mastering <code>apt</code> is essential for managing software on your Debian-based system efficiently."
      }
    ],
  },
  {
    id: 'intro-bash-scripting',
    category: 'Scripting',
    title: 'Introduction to Bash Scripting',
    author: 'The Linuxverse Team',
    date: 'October 28, 2024',
    readTime: '10 min read',
    content: [
      {
        type: 'paragraph',
        text: "Bash scripting allows you to automate tasks on your Linux system by writing sequences of commands in a file. It's a powerful way to enhance productivity and perform complex operations with ease.",
      },
      {
        type: 'heading',
        level: 2,
        text: 'Your First Bash Script',
      },
      {
        type: 'paragraph',
        text: "Creating a Bash script is simple. Start by creating a file, typically with a <code>.sh</code> extension. The first line should be the 'shebang', which tells the system which interpreter to use:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '#!/bin/bash\n\n# This is a comment\necho "Hello, Linuxverse!"',
      },
      {
        type: 'paragraph',
        text: "Save this as <code>hello.sh</code>. Before you can run it, you need to make it executable:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ chmod +x hello.sh',
      },
      {
        type: 'paragraph',
        text: "Now, you can run your script:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ ./hello.sh\nHello, Linuxverse!',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Variables',
      },
      {
        type: 'paragraph',
        text: "Variables store data. You can define them and use them within your script:",
      },
      {
        type: 'code',
        language: 'bash',
        text: '#!/bin/bash\n\nNAME="Developer"\necho "Hello, $NAME"',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Control Structures',
      },
      {
        type: 'paragraph',
        text: "Bash supports common control structures like <code>if</code> statements and loops (<code>for</code>, <code>while</code>), allowing for more complex logic.",
      },
      {
        type: 'list',
        items: [
          "<code>if-then-else</code>: Conditional execution.",
          "<code>for</code> loops: Iterate over a list of items.",
          "<code>while</code> loops: Execute commands as long as a condition is true."
        ]
      },
      {
        type: 'paragraph',
        text: "Bash scripting is a vast topic, but these basics provide a solid foundation for automation."
      }
    ],
  },
  {
    id: 'understanding-file-permissions',
    category: 'System',
    title: 'Understanding File Permissions',
    author: 'The Linuxverse Team',
    date: 'October 29, 2024',
    readTime: '7 min read',
    content: [
      {
        type: 'paragraph',
        text: "File permissions are a fundamental security concept in Linux. They control who can read, write, or execute files. Understanding them is crucial for system administration and security."
      },
      {
        type: 'heading',
        level: 2,
        text: 'Reading Permissions'
      },
      {
        type: 'paragraph',
        text: "When you list files with <code>ls -l</code>, you'll see a string like <code>-rwxr-xr--</code>. This represents the permissions."
      },
      {
        type: 'list',
        items: [
          "The first character indicates the file type (<code>-</code> for file, <code>d</code> for directory).",
          "The next three characters (<code>rwx</code>) are for the <strong>owner</strong>.",
          "The following three (<code>r-x</code>) are for the <strong>group</strong>.",
          "The last three (<code>r--</code>) are for <strong>others</strong>."
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Changing Permissions with chmod'
      },
      {
        type: 'paragraph',
        text: "The <code>chmod</code> command is used to change permissions. You can use symbolic notation (<code>u</code>,<code>g</code>,<code>o</code>,<code>a</code> and <code>+</code>,<code>-</code>,<code>=</code> with <code>r</code>,<code>w</code>,<code>x</code>) or octal notation."
      },
      {
        type: 'code',
        language: 'bash',
        text: '# Give the owner execute permission\n$ chmod u+x myfile.sh\n\n# Set permissions to rwxr-xr-x (755 in octal)\n$ chmod 755 myfile.sh'
      },
      {
        type: 'paragraph',
        text: "Properly managing file permissions helps protect your system from unauthorized access and errors."
      }
    ]
  },
  {
    id: 'customizing-desktop-environment',
    category: 'Desktop',
    title: 'Customizing Your Desktop Environment',
    author: 'The Linuxverse Team',
    date: 'October 30, 2024',
    readTime: '9 min read',
    content: [
      {
        type: 'paragraph',
        text: "One of the joys of Linux is the ability to customize your desktop environment to an incredible degree. Whether you're using GNOME, KDE, XFCE, or another environment, there are many ways to personalize your experience."
      },
      {
        type: 'heading',
        level: 2,
        text: 'Themes and Icons'
      },
      {
        type: 'paragraph',
        text: "Most desktop environments support themes for window decorations, controls, and icons. Websites like GNOME-Look.org and the KDE Store are great resources for finding new themes."
      },
      {
        type: 'heading',
        level: 2,
        text: 'Extensions and Widgets'
      },
      {
        type: 'paragraph',
        text: "GNOME Shell extensions and KDE Plasma widgets can add new functionality or change existing behaviors. From custom docks to weather applets, the possibilities are vast."
      },
      {
        type: 'heading',
        level: 2,
        text: 'Window Managers and Compositors'
      },
      {
        type: 'paragraph',
        text: "For more advanced users, tweaking or even replacing window managers (like Mutter or KWin) or using standalone compositors (like Picom) can offer fine-grained control over effects and window behavior."
      },
      {
        type: 'paragraph',
        text: "Don't be afraid to experiment and create a desktop that is uniquely yours!"
      }
    ]
  },
  {
    id: 'basic-linux-networking',
    category: 'Networking',
    title: 'Basic Linux Networking Commands',
    author: 'The Linuxverse Team',
    date: 'October 31, 2024',
    readTime: '8 min read',
    content: [
      {
        type: 'paragraph',
        text: "Understanding basic networking commands is essential for troubleshooting connectivity issues or managing your Linux system's network configuration."
      },
      {
        type: 'heading',
        level: 2,
        text: 'Checking Connectivity: ping'
      },
      {
        type: 'paragraph',
        text: "The <code>ping</code> command sends ICMP ECHO_REQUEST packets to network hosts. It's the primary way to check if a remote host is reachable."
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ ping google.com'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Displaying IP Addresses: ip addr'
      },
      {
        type: 'paragraph',
        text: "The <code>ip addr</code> command (or older <code>ifconfig</code>) shows your network interfaces and their assigned IP addresses."
      },
      {
        type: 'code',
        language: 'bash',
        text: '$ ip addr show'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Viewing Network Sockets: ss'
      },
      {
        type: 'paragraph',
        text: "The <code>ss</code> command (a modern replacement for <code>netstat</code>) is used to investigate network sockets. It can show listening ports, established connections, and more."
      },
      {
        type: 'code',
        language: 'bash',
        text: '# List all listening TCP sockets\n$ ss -tlpn'
      },
      {
        type: 'paragraph',
        text: "These commands are just the starting point for Linux network diagnostics and management."
      }
    ]
  },
  {
    id: 'linux-kernel-architecture',
    category: 'Deep Dive',
    title: 'The Linux Kernel: An Architectural Overview',
    author: 'The Linuxverse Team',
    date: 'November 1, 2024',
    readTime: '12 min read',
    content: [
      {
        type: 'paragraph',
        text: "The Linux kernel is the core of the Linux operating system. It's a monolithic kernel, meaning it handles all OS services like process management, memory management, device drivers, and system calls in a single large program."
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Subsystems'
      },
      {
        type: 'list',
        items: [
          "<strong>Process Scheduler:</strong> Manages how processes share CPU time.",
          "<strong>Memory Manager:</strong> Handles virtual memory, paging, and swapping.",
          "<strong>Virtual File System (VFS):</strong> Provides a unified interface to various file systems.",
          "<strong>Networking Stack:</strong> Implements network protocols like TCP/IP.",
          "<strong>Device Drivers:</strong> Code that allows the kernel to interact with hardware devices."
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'System Calls'
      },
      {
        type: 'paragraph',
        text: "User-space applications interact with the kernel through system calls. These are well-defined entry points into the kernel for requesting services like file I/O or process creation."
      },
      {
        type: 'code',
        language: 'c',
        text: '// Example of a system call in C (conceptual)\n// ssize_t read(int fd, void *buf, size_t count);\n// This function, when called from user space, invokes the kernel\'s read system call.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Modularity'
      },
      {
        type: 'paragraph',
        text: "Despite being monolithic, the Linux kernel is highly modular. Loadable Kernel Modules (LKMs) allow drivers and other functionalities to be added or removed from the running kernel without rebooting."
      },
      {
        type: 'paragraph',
        text: "Understanding the kernel's architecture provides insight into how Linux operates at its most fundamental level."
      }
    ]
  }
];

export default articles;
