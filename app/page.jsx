import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-ceneter'>
        Discover and Share
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center'>Ai powered prompts</span>
        </h1>
        <p className='desc text-center'>Promptopia is an open-source ai prompting tool for modern world to discover, share creative prompts</p>
        
        <Feed/>
    </section>
  )
}

export default Home
