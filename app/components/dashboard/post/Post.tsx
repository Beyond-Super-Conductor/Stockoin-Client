'use client';
import useCoinBoardActions from '@/hooks/useCoinBoardActions';
import { CoinPost } from '@/types/coinBoardActions'
import { formatDate } from '@/utils/formatDate';
import parse from 'html-react-parser';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';



export default function Post() {
  const { detail: post, comments, getCommentsByPostId, getPostById } = useCoinBoardActions();
  const params = useParams();


  useEffect(() => {
    if(!params.postId) return ;

    getPostById(+params.postId);
    getCommentsByPostId(+params.postId);
  },[params.postId])

  console.log(comments)
  
  if(!post) return null;
  return (
    <div className='w-full'>
      {/* metadata */}
      <div
        className='flex items-center justify-between gap-2 border-b border-slate-200 py-4 bg-gradient-to-r from-slate-600 to-slate-300 px-4 h-[120px]'
        >
        <div className='bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text text-4xl font-[500] antialiased'>
          <span>{post.title}</span>
          <br />
          
        </div>
        
        <div className='flex flex-col items-end gap-2'>
          
          <div className='flex items-center gap-2'>
            <p className=' text-2xl'>{post.user.nickname}</p>
            <div className='rounded-full overflow-hidden'>
              <Image
                width={30}
                height={30}
                src={post.user.picture}
                alt='user'
              />
            </div>
          </div>

          <div className='flex flex-col justify-end items-end'>
            <p className='text-lg'>작성일자:{formatDate(post.createdAt)}</p>
            <p className='text-lg'>수정일자:{formatDate(post.updatedAt)}</p>
            <div>
            <span className='px-1 inline-block text-lg pr-2'>조회: {post.viewCount}</span>
            <span className='px-1 inline-block text-lg'>추천: 4</span>
            <span className='px-1 inline-block text-lg'>댓글: 4</span>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className='relative w-full min-h-[600px] border border-slate-400 border-t-transparent pt-20 px-4' >
        {parse(post.content)}
        <div
          className={`
           absolute bottom-20 left-1/2 right-1/2 -translate-x-1/2 border w-[200px] h-[120px] flex flex-col items-center justify-center rounded-lg
           cursor-pointer font-bold
           hover:border-slate-400 hover:bg-indigo-400 hover:text-white  hover:transition-all hover:duration-500
           active:border-indigo-400 active:bg-red-400 active:text-white active:rounded-2xl
           `}>
          <button className='text-3xl'>추천</button>
          <span className="block text-lg tracking-wide ">(4)</span>
        </div>
      </div>
      {/* reply */}
      <div className='bg-slate-200 py-8'>
        <div className='w-full flex items-center justify-between px-4 border-b-2 pb-2 border-b-slate-600'>
          <div className='flex gap-2 h-20 pt-4'>
            <p>전체 댓글 6개</p>
            <select className='border border-red-400 h-10'>
              <option>최신순</option>
              <option>추천순</option>
              <option>답글달린순</option>
            </select>
          </div>
          <div className='flex gap-2 items-center'>
            <button>본문 보기</button>
            <button>댓글닫기</button>
            <button>새로고침</button>
          </div>
        </div>
        {
          (comments && comments.comments.length > 0)
          ? comments.comments.map((comment) => (
            <div className='w-full  flex items-center justify-between px-4 border-b-2 pb-2 border-b-slate-600'>
              <div className='flex gap-2 h-20 pt-4'>
                <p>{comment.user.nickname}</p>
                <p>{formatDate(comment.createdAt)}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <button>답글</button>
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>
          ))
          : <div className='w-full h-20 flex items-center justify-center'>
              <p>댓글이 없습니다.</p>
            </div>
        }
      </div>
      <div className='w-full my-10 flex items-center justify-end px-20 border-y border-slate-400 h-[200px] gap-2'>
        <p className='flex-[0.4]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odit laboriosam est inventore eveniet autem ad at, ex vel, accusantium eos et. Aliquam omnis molestias eligendi, quas eius eveniet accusantium!
        </p>
        <div className='flex-[0.6] flex flex-col items-end gap-4'>
          <textarea className='border border-slate-400 w-full h-40' />
          <div className='flex items-center justify-end gap-2'>
            <button
              className='border rounded-lg border-slate-400 px-4 py-2'
              >등록</button>
            <button className='border rounded-lg border-slate-400 px-4 py-2'>등록+추천</button>
          </div>
          </div>
      </div>
      <div>
        <button>글쓰기 버튼</button>
      </div>
    </div>
  )
}
