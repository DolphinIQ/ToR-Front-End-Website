
let initServicesPage = function(){
	
	addNavigationMenu();
	
	addServices();
	
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
					
					${ option.link == 'services.html' ? '<span class="bottom-border border-bot-red "></span>' : '' }
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

let addServices = function(){
	let output = '';
	let services = data.SERVICES_PAGE;
	let socials = data.STRATEGY_SESSION_PAGE.social_media_links;
	
	output += `
		<section class='services-session'>
			<div class="container">
				<div class="service " >
					
					<header>
						<h1> ${ services.header } </h1>
						<span class="bottom-border border-bot-red "></span>
						<a href=" ${ services.author.link } " >
							${ services.author.name }
						</a>
					</header>
					
					${ socialsPanel() }
					
					<h3>
						${ services.title }
					</h3> `;
	services.description.forEach( function( paragraph ){
		output += `
					<p>
						${ paragraph }
					</p>
		`;
	});				
	output +=	` 
					<a 
					href=" ${ services.session_link.link } " 
					class="services-link " >
						${ services.session_link.description }
					</a>
					
					${ socialsPanel() }
					
				</div>
			</div>
		</section>
	`;
	
	data.element.innerHTML += output;
}

let socialsPanel = function(){
	let socials = data.STRATEGY_SESSION_PAGE.social_media_links;
	let output = `
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
						
						<div class="shares">
							<i class="fas fa-share-alt"></i>
							<div class="num-of-shares">
								<p class="num " > X </p>
								<p class="writing " > SHARES </p>
							</div>
						</div>
					</div>
	`;
	
	return output;
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


initServicesPage();



