export interface Author {
  name: string;
  bio: string;
  image: string;
}

export const authors: Record<string, Author> = {
  'Tom Ward': {
    name: 'Tom Ward',
    bio: 'Tom Ward is the VP of Marketing for Qnext Corp. He is an expert in the technology industry with a history of achievement. Tom holds an MBA from the Schulich School of Business at York University.',
    image: '/images/blog/authors/tom-ward.webp',
  },
  'Jacob Williams': {
    name: 'Jacob Williams',
    bio: 'Jacob Williams is a system engineer supporting FileFlex Enterprise customers at Qnext Corp.',
    image: '/images/blog/authors/jacob-williams.jpg',
  },
  'Anthony DeCristofaro': {
    name: 'Anthony DeCristofaro',
    bio: 'Mr. DeCristofaro is CEO of Qnext Corp. with over thirty years of computer industry experience and multiple M&A transactions. A highly successful entrepreneur, he has started, developed and either merged or sold several technology companies including MGI Software which was Intel invested.',
    image: '/images/blog/authors/anthony-decristofaro.jpg',
  },
  'Ed Dubrovsky': {
    name: 'Ed Dubrovsky',
    bio: 'Ed Dubrovsky, CISSP, OSCP, PMP, MBA, MSc, is a seasoned entrepreneur, executive, technical leader and board advisor to Qnext with more than three decades of experience in cybersecurity, risk mitigation, and incident response. He has directly managed over 11,000 security incidents, including ransomware, business email compromise, malicious insider activity, extortion, executive protection scenarios, and large-scale post-breach recovery programs. Ed has founded and scaled global cybersecurity companies employing hundreds of professionals and has been involved in incident response and risk mitigation efforts for Fortune 50 organizations across military, defense, public sector, and private-sector environments. He is a frequent industry speaker and media contributor on cyber-risk, emerging threats, and connected and AI-driven systems, and is currently working on his first book examining cyber-risk from the perspective of a ransomware negotiator.',
    image: '/images/blog/authors/ed-dubrovsky.webp',
  },
  'Dr. Ed Amoroso': {
    name: 'Dr. Ed Amoroso',
    bio: 'Dr. Edward Amoroso is the founder and CEO of TAG Cyber. He is an experienced CEO, Chief Security Officer, Chief Information Security Officer, university professor, security consultant, keynote speaker, computer scientist, and prolific author with experience working in the telecommunications industry beginning at Bell Labs and leading to the position of SVP/CSO at AT&T. He holds a Doctor of Computer Science from Stevens Institute of Technology, and is also a graduate of Columbia Business School. He has served directly four presidential administrations in the field of cybersecurity and is now a member of the board of directors of M&T Bank, and is a senior advisor for the Laboratory of Applied Physics at Johns Hopkins University.',
    image: '/images/blog/authors/ed-amoroso.png',
  },
  'Chris Wilder': {
    name: 'Chris Wilder',
    bio: 'Chris Wilder is an industry analyst with TAG Cyber specializing in cybersecurity.',
    image: '/images/blog/authors/chris-wilder.jpg',
  },
  'FileFlex Team': {
    name: 'FileFlex Team',
    bio: 'The FileFlex team writes about Zero Trust Data Access, hybrid IT, secure file sharing, and the future of data governance.',
    image: '/images/blog/authors/fileflex-team.svg',
  },
};

export function getAuthor(name: string): Author {
  return (
    authors[name] ?? {
      name,
      bio: '',
      image: '/images/blog/authors/fileflex-team.svg',
    }
  );
}
