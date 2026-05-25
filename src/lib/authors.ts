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
  'Anthony DeCristofaro': {
    name: 'Anthony DeCristofaro',
    bio: 'Anthony DeCristofaro is a technology leader and contributor at Qnext Corp, with deep expertise in enterprise IT architecture, data platforms, and Zero Trust security. He writes about hybrid-cloud strategy, unstructured data governance, and modern approaches to securing distributed work.',
    image: '/images/blog/authors/anthony-decristofaro.svg',
  },
  'Ed Dubrovsky': {
    name: 'Ed Dubrovsky',
    bio: 'Ed Dubrovsky, CISSP, OSCP, PMP, MBA, MSc, is a seasoned entrepreneur, executive, technical leader and board advisor to Qnext with more than three decades of experience in cybersecurity, risk mitigation, and incident response. He has directly managed over 11,000 security incidents, including ransomware, business email compromise, malicious insider activity, extortion, executive protection scenarios, and large-scale post-breach recovery programs. Ed has founded and scaled global cybersecurity companies employing hundreds of professionals and has been involved in incident response and risk mitigation efforts for Fortune 50 organizations across military, defense, public sector, and private-sector environments. He is a frequent industry speaker and media contributor on cyber-risk, emerging threats, and connected and AI-driven systems, and is currently working on his first book examining cyber-risk from the perspective of a ransomware negotiator.',
    image: '/images/blog/authors/ed-dubrovsky.webp',
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
