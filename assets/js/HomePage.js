
let initHomePage = function(){
	
	addNavigationMenu();
	
	addHeaderBanner();
	headerImageMove(); // animation
	
	addExpertiseSection();
	addAboutSection();
	// addOurTeamSection();
	addCarouselBlogSection();
	addContactSection();
	
	addFooter();
	
}

let headerImageMove = function(){
	let lFollowX = 0;
    let lFollowY = 0;
    let friction = 1 / 30;
	let mouseX = 0.5;
	let mouseY = 0.5;
	let multiplier = 7;
	let aspectRatio = window.innerWidth / window.innerHeight;
	let translate;
	let x = 0;
	let y = 0;
	
	document.addEventListener( 'mousemove', function(evt){	
		mouseX = Math.max(
			-100, 
			Math.min(100, $(window).width() / 2 - evt.clientX)
		);
		mouseY = Math.max(
			-100, 
			Math.min(100, $(window).height() / 2 - evt.clientY)
		);
		lFollowX = (aspectRatio * mouseX) / multiplier; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (1 * mouseY) / multiplier;
	}, false );
	
	let headerMove = function(){
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;
		
		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.05)';
		
		$('.img-div').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});
		
		requestAnimationFrame( headerMove );
	}
	
	requestAnimationFrame( headerMove );
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

let addHeaderBanner = function(){
	let output = '';
	let head = data.HOME_PAGE.header;
	
	output += `
		<header class="banner" >
			<div class="img-div" ></div>
			<div class="filter"></div>
			
			<div class="container">
				<h1> 
					${ head.title }
				</h1>
				
				<div class="buttons">
					<a href=" ${ head.button1.link } " class="red"> ${ head.button1.text } </a>
					<a href=" ${ head.button2.link } " class="green"> ${ head.button2.text } </a>
				</div>
			</div>
		</header>
	`;
	
	data.element.innerHTML += output;
}

let addExpertiseSection = function(){
	let output = '';
	let exp = data.HOME_PAGE.sections.ourExpertise;
	
	output += `
		<section class="our-expertise">
			<div class="container">
			
				<div class="section-header">
					<h2 class="dark-text"> ${ exp.header } </h2>
					<div class="section-legend"> ${ exp.legend } </div>
				</div>
				
				<div class="row" data-aos="fade-right" >
	`;
			
	exp.columns.forEach( function(col){
		output += `
			<div class="col-lg-3 col-md-3 focus-box"  >
				<div class="
					service-icon  
					hover-border-bot-${ col.classColor } "
				>
					<a href="#">
						<img 
							src=" ${ col.imageUrl } " 
							alt=" ${ col.imageAlt } "
						>
					</a>
				</div>
				
				<h3 class="red-border-bottom" >
					${ col.header }
				</h3>
				<span class="bottom-border border-bot-${ col.classColor } "></span>
				
				<p>
					${ col.description }
				</p>
			</div> <!-- column -->
		`;
	});
	
	output += `
				</div> <!-- row -->
				
			</div>
		</section>
	`;
	
	
	data.element.innerHTML += output;
}

let addAboutSection = function(){
	let output = '';
	let about = data.HOME_PAGE.sections.aboutUs;
	
	output += `
		<section class="about-us">
			<div class="container">
				
				<div class="section-header">
					<h2 class=""> ${ about.header } </h2>
					<div class="section-legend"> ${ about.legend } </div>
				</div>
				
				<div class="row">
					<div class="col-xl-6 col-lg-6 column zerif-rtl-big-title" data-aos="fade-right" >
						<div class="big-intro">
							${ about.bigIntro }
						</div>
					</div>
					
					<div class="col-xl-6 col-lg-6 column zerif_about_us_center " data-aos="fade-up" >
	`;
	about.paragraphs.forEach( function( paragraph ){
		output += `
						<p>
							${ paragraph }
						</p>
		`;
	});
	output += `
					</div>
				</div>
				
				
			</div>
		</section>
	`;
	
	data.element.innerHTML += output;
}

let addOurTeamSection = function(){
	let output = '';
	let team = data.HOME_PAGE.sections.ourTeam;
	
	output += `
		<section class="our-team">
			<div class="container">
				
				<div class="section-header">
					<h2 class="dark-text"> ${ team.header } </h2>
					<div class="section-legend"> ${ team.legend } </div>
				</div>
				
				<div class="row justify-content-md-center">
	`;
	team.members.forEach( function( member ){
		output += `
					<div class="col-lg-3 col-md-3 " >
						<div class="team-member">
							<figure class="profile-pic">
								<img 
									src=" ${ member.imageUrl } " 
									alt=" ${ member.imageAlt } " 
								>
							</figure>
							
							<div class="member-quick" >
								<h3 class="dark-text"> ${ member.name } </h3>
								<span class="bottom-border border-bot-red "></span>
								<div class="position" > ${ member.position } </div>
							</div>
							
							<div class="social-icons" >
								<ul>
									<li><a href=" ${ member.socialMedia.facebook_link } ">
										<i class="fab fa-facebook-f"></i>
									</a></li>
									<li><a href=" ${ member.socialMedia.twitter_link } ">
										<i class="fab fa-twitter"></i>
									</a></li>
									<li><a href=" ${ member.socialMedia.linked_in_link } ">
										<i class="fab fa-linkedin-in"></i>
									</a></li>
								</ul>
							</div>
							
							<div class="member-details" >
								${ member.details }
							</div>
							
						</div>
					</div>
		`;
	});
	
	output += `
				</div>
				
			</div>
		</section>
	`;
	
	data.element.innerHTML += output;
}

let addCarouselBlogSection = function(){
	let output = '';
	let blog = data.HOME_PAGE.sections.carousel_blog;
	
	output += `
		<section class="latest-news">
			<div class="container">
				
				<div class="section-header">
					<h2 class="dark-text"> ${ blog.header } </h2>
					<div class="section-legend"> ${ blog.legend } </div>
				</div>
				
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false" >
				
				  <div class="carousel-inner">
	`;
	blog.posts.forEach( function( post , index ){
		let color = '';
		if( index % 4 == 0 ) color = 'red';
		if( index % 4 == 1 ) color = 'green';
		if( index % 4 == 2 ) color = 'blue';
		if( index % 4 == 3 ) color = 'yellow';
		
		if( index % 4 == 0 && index != 0 ){
			output += `
					</div>
				</div>
			`;
		}
		if( index % 4 == 0 ){
			output += `
				<div class="carousel-item ${ index == 0 ? 'active' : '' } ">
					<div class="row">
			`;
		}
		output += `
			<div class="col-md-3">
				<a href=" ${ post.link } "> <img src=" ${ post.imageUrl } " alt=" Post Picture " > </a>
				<h4><a href=" ${ post.link } "> ${ post.name } </a></h3>
				<span class="bottom-border border-bot-${ color } "></span>
				<p>
					${ post.description } <a href=" ${ post.link } " > [...] </a>
				</p>
			</div>
		`;
		
	});
					
	output += `
			</div>
				</div>
				  </div> 
				  
				  <a class="carousel-control-prev controls" href="#carouselExampleControls" role="button" data-slide="prev">
					<i class="fas fa-angle-left"></i>
					<span class="sr-only">Previous</span>
				  </a>
				  <a class="carousel-control-next controls" href="#carouselExampleControls" role="button" data-slide="next">
					<i class="fas fa-angle-right"></i>
					<span class="sr-only">Next</span>
				  </a>
				  
				</div>
				
			</div>
		</section>
	`;
	
	data.element.innerHTML += output;
}

let addContactSection = function(){
	let output = '';
	let contact = data.HOME_PAGE.sections.contactUs;
	let plc = contact.input_fields_placeholders;
	
	output += `
		<section class="contact-us">
			<div class="container">
			
				<div class="filter"></div>
				
				<div class="section-header">
					<h2 class=""> ${ contact.header } </h2>
					<div class="section-legend"> ${ contact.legend } </div>
				</div>
				
				<form method="POST" action="" >
					<div class="form-row" data-aos="fade-right" >
					
						<div class="col-lg-4 col-md-4 form-col ">
							<input type="text" class="form-control" placeholder=" ${ plc.name } " required >
						</div>
						<div class="col-lg-4 col-md-4 form-col ">
							<input type="email" class="form-control" placeholder=" ${ plc.email } " required >
						</div>
						<div class="col-lg-4 col-md-4 form-col ">
							<input type="text" class="form-control" placeholder=" ${ plc.subject } " required >
						</div>
					</div>
					
					<div class="form-row" data-aos="fade-left" >
						<div class="col-lg-12 col-md-12 form-col " data-aos="fade-left" >
							<textarea class="form-control" rows="3" placeholder=" ${ plc.text } " required ></textarea>
						</div>
					</div>
					
					<button class=" red-btn" type="submit" data-aos="fade-right" >
						 ${ contact.button_text } 
					</button>
					
				</form>
				
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
							<p> Taste Of Revenue </p>
						</div>
					</div>
					
				</div>
			</div>
		</footer>
	`;
	
	data.element.innerHTML += output;
}


initHomePage();

