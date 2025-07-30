import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Head from 'next/head';

// Helper to generate blog URLs
const getBlogUrl = (title: string) =>
  `https://www.gem.coach/blog/${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      title: "Finish Strong: How Coaching Can Help You Achieve Your Year-End Goals",
      excerpt: "Discover why we struggle with adhering to our goals and how coaching can help! Caption: Participant at GEM's LIVE Coaching Event working...",
      category: "Coaching & Goals",
      date: "Oct 31, 2024",
      author: "Eric Horwitz",
      image: "https://static.wixstatic.com/media/aa49a0_406e88e48cf94d579258935cef9273b6~mv2.jpeg/v1/fill/w_980,h_1308,fp_0.50_0.50,q_90/aa49a0_406e88e48cf94d579258935cef9273b6~mv2.webp", // Replace with actual image if available
      url: "https://www.gem.coach/post/finish-strong-how-coaching-can-help-you-achieve-your-year-end-goals"
    },
    {
      title: "Celebrating 20 Years of GEM Coaching: A Journey with Coach Eric Horwitz",
      excerpt: "On February 5th, 2025, GEM Coaching will celebrate its 20th anniversary! Caption: Coach Eric Horwitz, CEO of GEM, giving a lecture at...",
      category: "Milestones",
      date: "Oct 21, 2024",
      author: "Eric Horwitz",
      image: "https://static.wixstatic.com/media/aa49a0_14acce68a49b41f68caf2006c7708c70~mv2.png/v1/fill/w_1480,h_740,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa49a0_14acce68a49b41f68caf2006c7708c70~mv2.png", // Replace with actual image if available
      url: "https://www.gem.coach/post/celebrating-20-years-of-gem-coaching-a-journey-with-coach-eric-horwitz"
    },
    {
      title: "How Group Coaching Unlocks Personal Growth, Momentum, and Lasting Transformation",
      excerpt: "GEM’s Treasure Chest coaching circles bring members together monthly for reflection, accountability, and growth. Through shared...",
      category: "Group Coaching",
      date: "Jun 24, 2024",
      author: "Eric Horwitz",
      image: "https://static.wixstatic.com/media/aa49a0_0e4537f006bb4a1289c8d082f983bd78~mv2.png/v1/fill/w_800,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa49a0_0e4537f006bb4a1289c8d082f983bd78~mv2.png", // Replace with actual image if available
      url: "https://www.gem.coach/post/how-group-coaching-unlocks-personal-growth-momentum-and-lasting-transformation"
    },
    {
      title: "Exploring the Evolution of the Coaching Profession: A Historical Perspective on GEM",
      excerpt: "Coach E sharing ways of being and possibilities. The rise of GEM (Generation X Management) and its relevance in the 21st century can be...",
      category: "Coaching History",
      date: "Dec 28, 2024",
      author: "Eric Horwitz",
      image: "https://static.wixstatic.com/media/aa49a0_495eb19659c14898a304e1ae2de5f286~mv2.jpg/v1/fill/w_1284,h_1171,al_c,q_85,enc_avif,quality_auto/aa49a0_495eb19659c14898a304e1ae2de5f286~mv2.jpg", // Replace with actual image if available
      url: "https://www.gem.coach/post/the-historical-context-of-the-coaching-profession-and-gem"
    }
  ];

  return (
    <div>
      <Head>
        <title>Executive Coaching Blog | Growth Mindset, Career Change, Leadership Development & GEM Insights</title>
        <meta
          name="description"
          content="Explore executive coaching articles, growth mindset tips, career change strategies, leadership development, goal setting at work, and professional identity counseling from Eric Horwitz and the GEM coaching community. Find career growth plan templates, midlife career change advice, and more."
        />
        <meta
          name="keywords"
          content="executive coaching blog, growth mindset, career change in 40s, leadership development, career growth plan template, goal setting at work, professional identity counseling, GEM coaching, Eric Horwitz, career transitions, personal growth, career development, work goals to set, midlife career crisis, coaching programs, leadership development programs, career transition resume examples, interview training skills, growth mindset quotes, goal setting books, burnout recovery, coaching articles, NYC executive coach"
        />
        {/* Google Analytics */}
      </Head>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Coaching Blog: Growth Mindset, Career Change & Leadership</h1>
          <p className="text-xl text-blue-100">
            Explore thought leadership, growth mindset activities, career growth plan templates, and leadership development strategies from Eric Horwitz and the GEM coaching community. Find expert advice on career change in your 30s, 40s, and 50s, goal setting at work, and professional identity counseling.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article: Career Growth, Leadership & Mindset</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={featuredPosts[0].image}
                alt={featuredPosts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#001C3E] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {featuredPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">Featured</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPosts[0].title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPosts[0].date}
                    </div>
                  </div>
                  <a
                    href={featuredPosts[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#001C3E] font-semibold hover:underline flex items-center"
                  >
                    {`Read More about ${featuredPosts[0].title}`}{' '}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Summaries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001C3E] mb-8">Latest Coaching Articles, Growth Mindset Tips & Career Change Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 flex flex-col">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#001C3E] mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <a
                    href={post.url ? post.url : getBlogUrl(post.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#001C3E] font-semibold hover:underline flex items-center mt-auto"
                  >
                    {`Read More about ${post.title}`}{' '}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;