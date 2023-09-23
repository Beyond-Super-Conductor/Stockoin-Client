
import { CoinPost } from '@/types/coinBoardActions'
import parse from 'html-react-parser';

interface Props {
  post: CoinPost | undefined;
}

export default function Post({ post }: Props) {

  if(!post) return null;
  return (
    <div>{parse(post.content)}</div>
  )
}
