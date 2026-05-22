export interface Author {
  name: string;
  bio: string;
  image: string;
}

export const authors: Record<string, Author> = {
  'Tom Ward': {
    name: 'Tom Ward',
    bio: 'Tom Ward is the VP of Marketing for Qnext Corp. He is an expert in the technology industry with a history of achievement. Tom holds an MBA from the Schulich School of Business at York University.',
    image: '/images/blog/authors/tom-ward.jpg',
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
