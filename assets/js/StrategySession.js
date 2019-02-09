
let initStrategySessionPage = function(){
	
	addNavigationMenu();
	
	addArticle();
	
	addFooter();
	
}

let addNavigationMenu = function(){
	let output = '';
	let nav = data.navigation_menu;
	
	output += `
		<nav class="navbar fixed-top navbar-expand-lg navbar-light">
			
		  <a class="navbar-brand" href=" ${ nav.options[0].link } ">
			<img 
				src=" ${ nav.logo_image_url } " 
				alt=" ${ nav.logo_image_alt } " 
			>
		  </a>
		  
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		  
			<ul class="navbar-nav ml-auto">
	`;
	nav.options.forEach( function( option ){
		output += `
				<li class="nav-item">
					<a class="nav-link" href=" ${ option.link } "> 
						${ option.name } 
					</a>
					
					${ option.link == 'strategySession.html' ? '<span class="bottom-border border-bot-red "></span>' : '' }
				</li>
		`;
	});
	
	output += `
			</ul>
			
		  </div>
		</nav>
		
		<div class="navbar-placeholder"></div>
	`;
	
	data.element.innerHTML += output;
}

let addArticle = function(){
	let output = '';
	let article = data.STRATEGY_SESSION_PAGE;
	let socials = article.social_media_links;
	let posts = data.HOME_PAGE.sections.carousel_blog.posts;
	
	output += `
		<section class='strategy-session'>
			<div class="container">
				<div class="row " >
					
					<div class="col-lg-9 left-content" >
						<div class="article " >
							
							<header>
								<h1> ${ article.header } </h1>
								<span class="bottom-border border-bot-red "></span>
								<a href=" ${ article.author.link } " >
									${ article.author.name }
								</a>
							</header>
							
							<div class="social-panel " >
								<a href=" ${ socials.mail } " class="sp-link mail " >
									<i class="fas fa-envelope"></i>
								</a>
								
								<a href=" ${ socials.buffer } " class="sp-link buffer " >
									<img src="assets/img/icons/buffer.png" alt="Buffer" >
								</a>
								
								<a href=" ${ socials.pinterest } " class="sp-link pinterest " >
									<i class="fab fa-pinterest"></i>
								</a>
								
								<a href=" ${ socials.pocket } " class="sp-link pocket " >
									<i class="fab fa-get-pocket"></i>
								</a>
								
								<a href=" ${ socials.linkedin } " class="sp-link linkedin " >
									<i class="fab fa-linkedin-in"></i>
								</a>
								
								<a href=" ${ socials.twitter } " class="sp-link tweeter " >
									<i class="fab fa-twitter"></i>
								</a>
								
								<a href=" ${ socials.facebook } " class="sp-link facebook " >
									<i class="fab fa-facebook-f"></i>
								</a>
								
								<a href=" ${ socials.googleplus } " class="sp-link googleplus " >
									<i class="fab fa-google-plus-g"></i>
								</a>
							</div>
							
							<h3>
								${ article.title }
							</h3>
							
							<p>
								${ article.description }
							</p>
							
							<h4>
								${ article.schedule_your_time }
							</h4>
							
							<div class="schedule " >
								
								<div class="filter "></div>
								
								<div class="top-heading " >
									<h3> ${ article.scheduling.header } </h3>
									<p>
										<strong>Duration:</strong> ${ article.scheduling.duration }
									</p>
									<p>
										<strong>Your time zone:</strong> Please select
									</p>
								</div>
								
								<div class="choose-time-zone " data-aos="fade-down" >
								
									<div class="top-heading " >
										<h3> Your time zone </h3>
										<p>
											All times will be displayed according to your time zone:
										</p>
									</div>
									
									<form>
										
										<div class="select-container">
										<select class="select-choice">
											<option value="1" selected>Country One</option>
											<option value="2">Country Two</option>
											<option value="3">Country Three</option>
											<option value="4">Country Four</option>
										</select>
										<span class="arrow" > <i class="fas fa-angle-down"></i> </span>
										</div>
										
										<div class="select-container">
										<select class="select-choice">
											<option value="1" selected>Time One</option>
											<option value="2">Time Two</option>
											<option value="3">Time Three</option>
											<option value="4">Time Four</option>
										</select>
										<span class="arrow" > <i class="fas fa-angle-down"></i> </span>
										</div>
										
										<button type="submit" >
											Continue
										</button>
										
									</form>
									
								</div>
								
							</div>
							
							<div class="social-panel " >
								<a href=" ${ socials.mail } " class="sp-link mail " >
									<i class="fas fa-envelope"></i>
								</a>
								
								<a href=" ${ socials.buffer } " class="sp-link buffer " >
									<img src="assets/img/icons/buffer.png" alt="Buffer" >
								</a>
								
								<a href=" ${ socials.pinterest } " class="sp-link pinterest " >
									<i class="fab fa-pinterest"></i>
								</a>
								
								<a href=" ${ socials.pocket } " class="sp-link pocket " >
									<i class="fab fa-get-pocket"></i>
								</a>
								
								<a href=" ${ socials.linkedin } " class="sp-link linkedin " >
									<i class="fab fa-linkedin-in"></i>
								</a>
								
								<a href=" ${ socials.twitter } " class="sp-link tweeter " >
									<i class="fab fa-twitter"></i>
								</a>
								
								<a href=" ${ socials.facebook } " class="sp-link facebook " >
									<i class="fab fa-facebook-f"></i>
								</a>
								
								<a href=" ${ socials.googleplus } " class="sp-link googleplus " >
									<i class="fab fa-google-plus-g"></i>
								</a>
							</div>
							
						</div>
					</div> <!-- END OF LEFT CONTENT -->
					
					
					<div class="col-lg-3 right-content" >
						
						<form class="form-inline my-2 my-lg-0">
							<div class="search-container" >
								<input class="form-control search" type="search" placeholder="Search" aria-label="Search">
								<span class="glass" onclick="" > <i class="fas fa-search"></i> </span>
							</div>
						</form>
						
						<div class="right-posts" >
							<h2> ${ article.section1 } </h2>
							<span class="bottom-border border-bot-red "></span>
							
							<ul class="list-right " > `;
	for( let i = 0; i < article.number_of_posts_to_display; i++ ){ // fill recent posts
		let post = posts[i];
		output += `
								<li>
									<a href=" ${ post.link } ">
										${ post.name }
									</a>
								</li>
		`;
	}
	output +=				`</ul>
							
							<h2> ${ article.section2 } </h2>
							<span class="bottom-border border-bot-red "></span>
							
							<ul class="list-right " > `;
	article.archives.forEach( function( archive ){ // fill archive dates
		output += `
								<li>
									<a href="#"> ${ archive } </a>
								</li>
		`;
	});
	output +=				`</ul>
							
							<h2> ${ article.section3 } </h2>
							<span class="bottom-border border-bot-red "></span>
							
							<ul class="list-right " > `;
	article.categories.forEach( function( category ){ // fill categories
		output += `
								<li>
									<a href="#"> ${ category } </a>
								</li>
		`;
	});
								/* <li>
									<a href="#"> Restaurant Marketing </a>
								</li>
								<li>
									<a href="#"> Uncategorized </a>
								</li> */
	output += 				`</ul>
							
						</div>
						
					</div>
					
				</div>
			</div>
		</section>
	`;
	
	data.element.innerHTML += output;
}



let addFooter = function(){
	let output = '';
	let footer = data.footer;
	
	output += `
		<footer>
			<div class="container">
				<div class="row">
				
					<div class="col-lg-3 company-details ">
						<div class="footer-icon">
							<img src="assets/img/icons/location.png" alt="Location">
						</div>
						<div class="footer-details">
							${ footer.address }
						</div>
					</div>
					
					<div class="col-lg-3 company-details ">
						<div class="footer-icon">
							<img src="assets/img/icons/envelope.png" alt="Location">
						</div>
						<div class="footer-details">
							<a href=" ${ footer.email } " > 
								${ footer.email } 
							</a>
						</div>
					</div>
					
					<div class="col-lg-3 company-details ">
						<div class="footer-icon">
							<img src="assets/img/icons/telephone.png" alt="Location">
						</div>
						<div class="footer-details">
							${ footer.phone_number }
						</div>
					</div>
					
					<div class="col-lg-3 copyright ">
						<div class="footer-icon">
							<a href=" ${ footer.company.links.facebook } " >
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href=" ${ footer.company.links.twitter } " >
								<i class="fab fa-twitter"></i>
							</a>
						</div>
						
						<div class="footer-details">
							<p> ${ footer.company.name } </p>
						</div>
					</div>
					
				</div>
			</div>
		</footer>
	`;
	
	data.element.innerHTML += output;
}


initStrategySessionPage();



