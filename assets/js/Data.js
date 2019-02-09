const data = {
	element: document.querySelector('.app'),
	
	navigation_menu: {
		logo_image_url: 'assets/img/brand-logo.png',
		logo_image_alt: 'Logo',
		options: [
			{
				name: 'Home',
				link: 'index.html',
			},
			
			{
				name: 'Complimentary Strategy Session',
				link: 'strategySession.html',
			},
			
			{
				name: 'Our Restaurant Marketing Services',
				link: 'services.html',
			},
			
		],
	},
	
	footer: {
		address: `B, 50 Somewhere, Random 540, Adress, VA 20132`,
		email: 'info@tasteofrevenue.com',
		phone_number: '123-456-7890',
		company: {
			name: 'Taste Of Revenue',
			links: {
				facebook: 'https://www.facebook.com/ ',
				twitter: 'https://www.twitter.com/',
			}
		},
	},
	
	HOME_PAGE: {
		
		header: {
			title: 'RESULTS-DRIVEN DIGITAL MARKETING FOR RESTAURANT',
			button1: {
				text: 'WE DO IT FOR YOU',
				link: 'services.html',
			},
			button2: {
				text: 'WE COACH YOU TO DO IT',
				link: 'services.html',
			},
			bgImageUrl: 'assets/img/background.jpg',
			bgImageAlt: 'bg Image',
		},
		
		sections: {
			
			ourExpertise: {
				header: 'OUR EXPERTISE',
				legend: 'RESULTS-DRIVEN, MODERN RESTAURANT MARKETING METHODS.',
				columns: [
					digitalMarketing = {
						imageUrl: 'assets/img/media.png',
						imageAlt: 'Social Media',
						header: 'DIGITAL MARKETING / SOCIAL MEDIA',
						classColor: 'red',
						description: 'If you are paying a “social media” person or company to manage your social media, chances are you need to fire them. We own and invest in restaurants and we specialize in restaurants. We get results using a proven digital marketing system that has worked for all types of restaurants, all over the country, the Taste Of Revenue Method ™.'
					},
					
					restaurant = {
						imageUrl: 'assets/img/store.png',
						imageAlt: 'Building',
						header: 'RESTAURANT WEBSITE DESIGN, LOCAL SEO & REPUTATION MANAGEMENT',
						classColor: 'green',
						description: 'Your Website should be visually impressive and entice customers to visit you. And it should show up top in search and in all directories. And yes, all restaurants hate Yelp and other review sites. You still have to play the game, respond and move the pendulum in your favor by being smart with how you handle them. Trip Advisor, Google, Facebook and other review sites matter too.'
					},
					
					email = {
						imageUrl: 'assets/img/email.jpg',
						imageAlt: 'Email',
						header: 'EMAIL & MOBILE MARKETING',
						classColor: 'blue',
						description: 'Oh yes…email is alive and well and when used correctly can bring new and repeat customers into your restaurant every month on demand. We’ll show you how to build a huge list of loyal followers and then how to gently market to them. And, are you reaching your customers in their pocket with mobile marketing?'
					},
					
					strategy = {
						imageUrl: 'assets/img/Clipboard.png',
						imageAlt: 'Clipboard',
						header: 'RESTAURANT MARKETING STRATEGY',
						classColor: 'yellow',
						description: 'We’re amazed, daily, with how many restaurants are started or operated without a documented marketing plan and strategy for getting new and repeat customers each month into their restaurant. We change all that, and set you up for success you can bank on using our Taste Of Revenue Method ™ formula.'
					},
				],
			}, // end of Our Expertise section
			
			aboutUs: {
				header: 'ABOUT',
				legend: 'CREATORS OF THE TASTE OF REVENUE METHOD (TM)',
				bigIntro: 'A Proven System to Get New and Repeat Customers, On Demand.',
				paragraphs: [
					`If you are looking for someone to just keep your social media sites updated and managed, then you are on the wrong website. Our marketing services and coaching programs are for restaurant owners who demand results - a real ROI that can be tracked.`
					,
					`We are restaurant owners ourselves - so we know restaurants. We know what owners are going through, we know how little is available to put towards marketing. We also know that traditional marketing methods that used to work well for restaurants, don't work well any longer.`
					,
					`Most importantly, we know how to make digital marketing work for every kind of restaurant, no more smoke and mirrors. We aren't the cheapest, but we are the BEST and we deliver a ROI when others are scratching their head.`
					,
				],
			}, // end of About Us section
			
			ourTeam: {
				header: 'MEET OUR CEO',
				legend: 'Internationally Known Marketing Strategist',
				members: [
					{
						name: 'John Doe',
						position: 'CEO',
						imageUrl: 'assets/img/ceo.png',
						imageAlt: 'John Doe',
						details: 'John Doe is an internationally recognized expert in digital marketing & the creator of the Restaurant Marketing Method ™. He’s invested in restaurants, has helped several new restaurants open successfully, and older restaurants revive sales.',
						socialMedia: {
							facebook_link: 'https://facebook.com',
							twitter_link: 'https://twitter.com',
							linked_in_link: 'https://linkedin.com',
						},
					},
					
				],
				
			}, // end of Our Team Section
			
			carousel_blog: {
				header: 'TASTE OF REVENUE BLOG',
				legend: 'Taste Of Revenue Tips',
				posts: [
					{ // #1
						name: '9 Ways To Use Instagram For Restaurant Marketing',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #2
						name: '6 Restaurant Marketing Trends That Actually Work',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #3
						name: '3 Huge Impacts of Social Media in Restaurant Marketing',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #4
						name: '3 Ways to Increase Restaurant Sales',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #5
						name: '3 Restaurant Marketing Mistakes That Should Scare You',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #6
						name: 'Post 6',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #7
						name: 'Post 7',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					{ // #8
						name: 'Post 8',
						imageUrl: 'assets/img/post_img.png',
						link: '#',
						description: 'In a world of food bloggers, #foodporn hashtags and self-proclaimed “foodies”, we can make a pretty obvious link between dining and social media: People love sharing what they’re eating, and they especially love to do so on Instagram. In fact, there is perhaps no better industry that Instagram is geared towards than the restaurant industry, ',
					},
					
				],
			}, // end of Carousel Blog Posts section
			
			contactUs: {
				header: 'GET IN TOUCH',
				legend: `We're Here to Serve.`,
				input_fields_placeholders: {
					name: 'Your Name',
					email: 'Your Email',
					subject: 'Subject',
					text: 'Your Message',
				},
				button_text: 'SEND MESSAGE',
			},
			
		}, // end of sections
	}, // END OF HOME PAGE
	
	STRATEGY_SESSION_PAGE: {
		
		header: 'Complimentary Strategy Session',
		author: {
			name: 'John Doe',
			link: '#',
		},
		social_media_links: {
			mail: '#',
			buffer: '#',
			pinterest: '#',
			pocket: '#',
			linkedin: '#',
			twitter: '#',
			facebook: '#',
			googleplus: '#',
		},
		title: 'How Would You Like to Drive a Flood of New and Repeat Customers to Your Restaurant, On Demand, Every Single Month?',
		description: 'If you’re a restaurant owner, we offer a handful of 45 min, 1 on 1 complimentary strategy sessions each month. If you’re serious about increasing your restaurant revenues, schedule a time to meet with us.',
		schedule_your_time: 'Schedule Your Time to Meet',
		scheduling: {
			header: 'Pick a date and time',
			duration: '45 minutes',
		},
		
		section1: 'Recent Posts',
		section2: 'Archives',
		section3: 'Categories',
		
		number_of_posts_to_display: 5,
		
		archives: [
			'March 2018',
			'September 2017',
			'July 2017',
			'May 2017',
			'November 2016',
			'October 2016',
		],
		
		categories: [
			'Restaurant Marketing',
			'Uncategorized',
		],
		
	}, // END OF STRATEGY SESSION PAGE
	
	SERVICES_PAGE: {
		
		header: 'Our Restaurant Marketing Services ',
		author: {
			name: 'John Doe',
			link: '#',
		},
		// social media links are used from Strategy Session Page
		title: 'Monthly Digital Marketing and Management Services',
		description: [ // paragraphs
			`We’ll manage the restaurant marketing for you, and measurably driving new sales each month. We don’t have contracts, we are strictly month-to-month because we get RESULTS for clients.`
			,
			`This option is great for clients who just don’t have the time or resources to implement our marketing methods themselves and want a results-driven partner to work alongside with.`
			,
			`Our marketing strategy will include social media marketing (Facebook, Instagram, Twitter, Pinterest, Snapchat), email marketing (list building), mobile marketing, reputation management and local SEO.`
			
		],
		session_link: {
			description: 'Click here to request a complimentary 45-minute one-on-one strategy session.',
			link: 'strategySession.html',
		},
		
	}, // END OF SERVICES PAGE
	
};

