import React from 'react';
import { Play, Download, BookOpen, Mic, Video, FileText } from 'lucide-react';

const featuredVideos = [
	{
		title: 'Eric Horwitz - TEDx Talk: The Power of Purpose',
		url: 'https://www.youtube.com/embed/mbSV1gzS-yw',
	},
	{
		title: 'Eric Horwitz - Leadership in Uncertainty',
		url: 'https://www.youtube.com/embed/LMEV0xBLtDE',
	},
	{
		title: 'Eric Horwitz - Building Resilient Teams',
		url: 'https://www.youtube.com/embed/8DTV-6GSZDY',
	},
	{
		title: 'Eric Horwitz - Career Crossroads',
		url: 'https://www.youtube.com/embed/5R0feqLRzBQ',
	},
	{
		title: 'Eric Horwitz - Coaching for Impact',
		url: 'https://www.youtube.com/embed/Wg2ryAq2Jw4',
	},
	{
		title: 'Eric Horwitz - GEM Methodology',
		url: 'https://www.youtube.com/embed/a9oxZhwIXX8',
	},
	{
		title: 'Eric Horwitz -  On the six weekly habits we should need to start practicing',
		url: 'https://www.youtube.com/embed/qM3fOO5w3k0',
	},
  {
		title: 'Eric Horwitz - Vision, Plan, Practice, Impact',
		url: 'https://www.youtube.com/embed/Xjg51VTPy5I?si=N3NZ40xKUknxj6T9',
	},
  {
		title: 'Eric Horwitz - Columbia AlumniTALK: Making Career Moves',
		url: 'https://www.youtube.com/embed/Iae-Cb3RA2k?si=Uo2INHiRDdMLcPYV',
	},
  {
		title: 'Eric Horwitz - The Net(work) Only Appears When You Jump',
		url: 'https://www.youtube.com/embed/1vOjs5SqxSw?si=gFiQE-ywF2leZKow',
	},
];

const ResourcesPage: React.FC = () => {
	const videos = [
		'Columbia Alumni Career Panel',
		'Leadership in Times of Change',
		'Building Resilient Teams',
		'The Future of Executive Coaching',
	];

	const pressItems = [
		{
			title: "Onboarding Playbook for Impact",
			articleTitle: "Onboarding Playbook for Impact: How to Set Up New Hires for Success",
			url: "https://spiresearchpartners.com/onboarding-playbook-for-impact/?utm_source=chatgpt.com",
			image: "https://spiresearchpartners.com/wp-content/uploads/2024/06/business-onboarding-1200x582-1.jpg"
		},
		{
			title: "How a Business Coach Went to Designing Futures",
			articleTitle: "How a Business Coach Went to Designing Futures",
			url: "https://blog.breather.com/how-business-coach-went-to-designing-futures/",
			image: "https://d3jpl91pxevbkh.cloudfront.net/breather-com/image/upload/c_fill,g_face,h_600,w_1600/Breather_NYC_EricHorwitz-0108_wdgmyi.jpg"
		},
		{
			title: "What is a Career? (Columbia Alumni Coaches)",
			articleTitle: "What is a Career?",
			url: "https://careercoaches.alumni.columbia.edu/what_is_a_career",
			image: "https://assets.nationbuilder.com/columbia104/sites/1/meta_images/original/2022_Columbia-Alumni_Career-Coaches-Network_2-Color_Light-Blue-and-Dark-Blue_Horizontal_Nationbuilder.png?1680210459"
		}
	];

	const bookRecommendations = [
		'Ikigai by Héctor García and Francesc Miralles',
		'Atomic Habits by James Clear',
		'The 7 Habits of Highly Effective People by Stephen Covey',
		'Mindset by Carol Dweck',
		'The Gifts of Imperfection by Brené Brown',
		'Start with Why by Simon Sinek',
		'The Power of Now by Eckhart Tolle',
		'Crucial Conversations by Kerry Patterson',
		'The 5 AM Club by Robin Sharma',
		'Daring Greatly by Brené Brown',
	];

	return (
		<div>
			{/* Hero */}
			<section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<BookOpen className="h-12 w-12 mx-auto mb-4" />
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Resources & Media
					</h1>
					<p className="text-xl text-blue-100">
						Tools, insights, and inspiration to support your growth journey
					</p>
				</div>
			</section>

			{/* Press & Interviews */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						Press & Interviews
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{pressItems.map((item, index) => (
							<a
								key={index}
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col"
							>
								{index < 2 ? (
									<img
										src={item.image}
										alt={item.title + " article image"}
										className="w-full h-40 object-cover"
									/>
								) : (
									<div className="w-full bg-white flex items-center justify-center" style={{ height: "120px" }}>
										<img
											src={item.image}
											alt={item.title + " article image"}
											className="h-full w-auto object-contain"
										/>
									</div>
								)}
								<div className="p-6 flex-1 flex flex-col justify-between">
									<h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
										{item.articleTitle}
									</h3>
									<span className="text-[#001C3E] font-medium hover:underline mt-auto text-center">
										Read More →
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Recommended Reading */}
			<section className="py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						Eric's Recommended Reading
					</h2>
					<p className="text-lg text-gray-600 text-center mb-8">
						Top 10 books on purpose, leadership, and creativity
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{bookRecommendations.map((book, index) => (
							<div
								key={index}
								className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
							>
								<span className="bg-[#001C3E] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
									{index + 1}
								</span>
								<span className="text-gray-900">{book}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Videos */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Library</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{featuredVideos.map((video, idx) => (
							<div
								key={idx}
								className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
							>
								<div className="aspect-video bg-black flex items-center justify-center">
									<iframe
										width="100%"
										height="315"
										src={video.url}
										title={video.title}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										{video.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-[#001C3E] text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Put These Resources to Work?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Get personalized guidance on applying these tools to your unique
						situation
					</p>
					<a
						href="https://gem.coach/coaching"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-[#001C3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
					>
						Explore Coaching
					</a>
				</div>
			</section>
		</div>
	);
};

export default ResourcesPage;
