import React, {useMemo} from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import useInfiniteScroll from 'hooks/useInfiniteScroll'


// const POST_ITEM_DATA = {
//     title: 'Post Item Title',
//     date: '2020.01.29.',
//     categories: ['Web', 'Frontend', 'Testing'],
//     summary:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
//     thumbnail:
//       'https://avatars.githubusercontent.com/u/109232140?v=4',
//     link: 'https://www.google.co.kr',
//   }

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList = function ({selectedCategory ,posts }) {
  console.log("fuck-posts",posts);
  // const postListData = useMemo(
  //   () =>
  //     posts.filter(({ node: { frontmatter: { categories } } }) =>
  //       selectedCategory !== 'All'
  //         ? categories.includes(selectedCategory)
  //         : true,
  //     ),
  //   [selectedCategory],
  // )
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts)

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({node: { id,fields:{slug} ,frontmatter },}) => (<PostItem {...frontmatter} link={slug} key={id}/>)
      )}
        {/* <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} /> */}
    </PostListWrapper>
  )
}

export default PostList