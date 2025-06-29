// Static content for the DifferencesPage (Distro Comparison)

import UbuntuLogo from '../assets/icon-distro.svg?react'; // PNG imported as path, changed to placeholder SVG
// Using placeholder for FedoraLogo as original ../assets/logo-fedora.svg?react was missing
import FedoraLogo from '../assets/icon-distro.svg?react'; 
// Using placeholder for ArchLogo as original ../assets/logo-arch.svg?react was missing
import ArchLogo from '../assets/icon-distro.svg?react';   

export const distrosContent = {
  pageInfo: {
    title: 'Decoding Distributions',
    description: 'Linux comes in many flavors called distributions (distros). Discover what makes popular choices like Ubuntu, Fedora, and Arch Linux unique, and which might be the best fit for your needs.',
  },
  distros: [
    {
      id: 'ubuntu',
      logoSrc: UbuntuLogo, // Now an SVG component
      name: 'Ubuntu',
      description: 'A user-friendly, Debian-based distribution popular for both desktops and servers. It focuses on ease of use and a polished experience out of the box.',
      targetAudience: 'Beginners & Professionals',
      packageManager: 'APT (dpkg)',
      philosophy: '"Linux for Human Beings"',
      delay: '0.1s',
    },
    {
      id: 'fedora',
      logoSrc: FedoraLogo, // Now using placeholder
      name: 'Fedora',
      description: "A community-driven project sponsored by Red Hat. It's known for being cutting-edge, featuring the latest software and technologies.",
      targetAudience: 'Developers & Enthusiasts',
      packageManager: 'DNF (rpm)',
      philosophy: 'Freedom, Friends, Features, First',
      delay: '0.2s',
    },
    {
      id: 'arch',
      logoSrc: ArchLogo, // Now using placeholder
      name: 'Arch Linux',
      description: 'A lightweight, flexible distribution for competent users. It follows a "Do-It-Yourself" approach, providing a minimal base system for you to build upon.',
      targetAudience: 'Advanced Users & DIYers',
      packageManager: 'Pacman',
      philosophy: 'Simplicity, Modernity, Pragmatism',
      delay: '0.3s',
    },
  ]
};
