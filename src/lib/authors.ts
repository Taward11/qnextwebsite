export interface Author {
  name: string;
  bio: string;
  image: string;
}

export const authors: Record<string, Author> = {
  'FileFlex Team': {
    name: 'FileFlex Team',
    bio: 'The FileFlex team writes about Zero Trust Data Access, hybrid IT, secure file sharing, and the future of data governance. FileFlex Enterprise extends Zero Trust to the data layer—securing access to files wherever they live without moving them.',
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
