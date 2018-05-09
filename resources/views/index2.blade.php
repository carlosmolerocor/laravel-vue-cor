<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel projects</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <link rel="stylesheet" href="{{ asset('css/projects.css') }}">

   	</head>
 	<body >

 	<div id="app" class="container">
		
		<section id="header">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-4">
							
							<div class="dropdown">
							  <button class="btn btn-default btn-title-dropdown dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    <h2>Todos los proyectos </h2>
							    <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
							  </button>
							  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">Action</a></li>
							    <li><a href="#">Another action</a></li>
							    <li><a href="#">Something else here</a></li>
							    <li role="separator" class="divider"></li>
							    <li><a href="#">Separated link</a></li>
							  </ul>
							</div>						
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="filters">
			
		</section>

		<section id="body-table">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						
					</div>
				</div>
			</div>
		</section>

		<section id="footer">
			
		</section>

	</div>

		<script src="{{ asset('js/projects.js') }}"></script>
    </body>
</html>
