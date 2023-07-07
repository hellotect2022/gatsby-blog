import { useRef,useMemo,useState, useEffect } from 'react'

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
  selectedCategory,
  posts,
) {
  const containerRef = useRef(null,)
  
  const [count, setCount] = useState(1)
  const postListData = useMemo(
    () =>
      posts.filter(({ node: { frontmatter: { categories } } }) =>
        selectedCategory !== 'All'
          ? categories.includes(selectedCategory)
          : true,
      ),
    [selectedCategory],
  )

  const observer=useRef(null)
  useEffect(()=>{
    observer.current = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) return;
  
        setCount(value => value + 1);
        observer.unobserve(entries[0].target)
      })
  },[])
  

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListData.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return { 
    containerRef,
    postList : postListData.slice(0,count*NUMBER_OF_ITEMS_PER_PAGE)
  }
}

export default useInfiniteScroll