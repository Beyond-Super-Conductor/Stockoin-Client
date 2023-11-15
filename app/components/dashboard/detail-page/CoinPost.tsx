'use client';
import { CoinPost as ICoinPost } from '@/types/coinBoardActions';
import { toToday } from '@/utils/toToday';
import Link from 'next/link'
import { useParams } from 'next/navigation';

interface Props {
  post: ICoinPost;
}

export default function CoinPost({post}:Props) {
    const { slug, tokenDetail } = useParams();
  return (
    <li className='w-full' key={post.updatedAt + post.id}>
    <Link
    href={`/dashboard/${slug}/${tokenDetail}/post/${post.id}`}
    className='flex py-2 px-4 text-start w-full gap-[2px] text-xl'
    >
      <span className='flex-[0.1] text-center'>{post.id}</span>
      <span className='flex-[0.1] text-center'>일반</span>
      <span className='flex-[0.5]'>{post.title}</span>
      <span className='flex-[0.2] text-center'>{post.user.nickname}</span>
      <span className='flex-[0.15] text-center'>{toToday(post.createdAt)}</span>
      <span className='flex-[0.1] text-center'>{post.viewCount}</span>
      <span className='flex-[0.1] text-center'>3</span>  
  </Link>
  </li>
  )
}
