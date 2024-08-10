import Image from 'next/image'

interface Comment {
  id: string
  profileURL: string
  nickName: string
  createdAt: string
  content: string
}

interface CommentProps {
  comment: Comment
}

export default function Comment({ comment }: CommentProps) {
  const { id, profileURL, nickName, createdAt, content } = comment
  return (
    <div className='flex gap-2 md:gap-3'>
      <div className='flex h-[26px] w-[26px] items-center justify-center'>
        <img
          className='h-[22px] w-[22px] rounded-full object-cover'
          src={profileURL}
          alt='프로필'
        />
      </div>
      <div className='flex flex-col'>
        <div className='mb-2 flex items-center'>
          <h3 className='mr-2 text-xs font-semibold text-custom-black-200 md:text-sm'>
            {nickName}
          </h3>
          <span className='text-[10px] font-normal text-custom-gray-400 md:text-xs'>
            {createdAt}
          </span>
        </div>
        <p className='mb-2 text-xs font-normal text-custom-black-200 md:text-sm'>
          {content}
        </p>
        <div className='flex gap-2 text-[10px] font-normal text-custom-gray-400 underline md:gap-3 md:text-xs'>
          <button
            onClick={() => {
              console.log('수정')
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              console.log('삭제')
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}