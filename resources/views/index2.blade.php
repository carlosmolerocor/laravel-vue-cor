<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel projects</title>

        <!-- Fonts -->

        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-KwxQKNj2D0XKEW5O/Y6haRH39PE/xry8SAoLbpbCMraqlX7kUP6KHOnrlrtvuJLR" crossorigin="anonymous">

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <link rel="stylesheet" href="{{ asset('css/projects.css') }}">

   	</head>
 	<body>

 	<div id="app" class="container-fluid">
		
		<section id="header">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5">							
							<div class="dropdown pull-left">
							  <button class="btn btn-default btn-title-dropdown dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
							    <b>Todos los proyectos</b>
							    <span class="glyphicon glyphicon-chevron-down margin-left-sm" aria-hidden="true"></span>
							  </button>
							  <ul class="dropdown-menu dropdown-width-100 dropdown-lg">
							    <li><a href="#">Mi equipo</a></li>
							    <li><a href="#">Solo míos</a></li>
							    <li><a href="#">Todos los proyectos</a></li>
							  </ul>
							</div>						
						</div>
						<div class="col-md-7">
							<ul class="horizontal-list pull-right">
								<li>
									<div class="selectButton">
										<div class="onoffswitch">
										    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
										    <label class="onoffswitch-label" for="myonoffswitch">
										        <span class="onoffswitch-inner"></span>
										        <span class="onoffswitch-switch"></span>
										    </label>
										</div>
									</div>
								</li>
								<li><span class="horizontal-list">Ver finalizados</span></li>
								<li>
									<div class="selectButton">
										<i class="fal fa-bars"></i>
									</div>
								</li>
								<li class="border-right-list">
									<div class="selectButton">
										<i class="fal fa-th"></i>
									</div>
								</thi>
								<li>
									<div class="selectButton">
										<i class="fal fa-filter"></i>
									</div>
								</li>
								<li>
									<div class="selectButton">
										<i class="fa fa-columns"></i>
									</div>
								</li>
								<li>
									<div class="selectButton">
										<i class="fa fa-ellipsis-v"></i>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="filters">
			
		</section>

		<section id="body-table">
			<div class="row">
				<div class="container cor_filter">
					{{-- <div class="col-md-12">
						<div class="row">
							<div class="container_cor_filters_options">
								<div class="filters_header">
									<div class="col-md-6">
										<a href="#" name="addFilter" class="add_filter_button listen_add_filter_button pull-left">+ Agregar Filtro</a>
									</div>
									<div class="col-md-6">
										<div class="filter_actions pull-right">
											<a href="#" class="save_current_filters listen_click_save_filters">SAVE FILTERS </a>
											<a href="#" class="delete_filters_button listen_click_delete_filters">DELETE FILTERS</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> --}}
					{{-- <div class="col-md-12">
							 <div class="active_filters">
								<div class="filter_active">
										<div class="pull-left">
											<span>Titulo: "ASP"</span>
										</div>
										<div class="closeFilter pull-right listen_close_option">
											<i class="fal fa-cog settingFilter"></i>
											<i class="fal fa-times closeLabel"></i>
										</div>
								</div>
								<div class="container_input_filter">
									<input type="text" class="main_input_filters listen_main_input">
									<div class="filters">
										<div class="dropdown dropdown-filter">
										  <ul class="dropdown-menu dropdown-lg listen_click_filter_option">
										    <li><a href="#" class="filter_option" data-filter="Nombre" data-type="text">Nombre <span class="input_list_value"></span></a></li>
										    <li><a href="#" class="filter_option" data-filter="Cliente" data-type="text">Cliente <span class="input_list_value"></span></a></li>
										    <li><a href="#" class="filter_option" data-filter="Titulo" data-type="text">Titulo <span class="input_list_value"></span></a></li>
										    <li><a href="#" class="filter_option" data-filter="Labels" data-type="text">Labels <span class="input_list_value"></span></a></li>
										    <li><a href="#" class="filter_option" data-filter="Deadline" data-type="text">Deadline <span class="input_list_value"></span></a></li>
										  </ul>
										</div>	
									</div>		
								</div>
							</div>					
					</div> --}}

				</div>
			</div>
		</section>

{{-- 		<h2>Small Modal</h2>
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Small Modal</button>

		<div class="modal" id="myModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>This is a small modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> --}}

		<section id="footer">
			
		</section>

	</div>

	<style>
		.cor_filter a:hover, .cor_filter a:focus, .cor_filter a:visited{
			text-decoration: none;
			color:#3B606B;
		}
		.active_filters{
		  padding: 0;
  		  margin: 0;
		  -ms-box-orient: horizontal;
		  display: -webkit-box;
		  display: -moz-box;
		  display: -ms-flexbox;
		  display: -moz-flex;
		  display: -webkit-flex;
		  display: flex;
		  flex-direction: row;
  		  flex-flow: row wrap;
  		  justify-content: flex-start;
  		  margin-top: 20px;

		}
		.container_cor_filters_options{
			margin-top: 20px;
		}
		.container_input_filter{
			flex: 1;
		}
		.main_input_filters{
			width: 100%;
			height: 40px;
			padding: 1px;
			font-size: 16px;
			border:0px;
			border-bottom: 1px solid #333;
		}
		.main_input_filters:focus{
			outline: -webkit-focus-ring-color auto 0px;
		}
		.add_filter_button{
			border:2px #eee solid;
			padding: 5px 10px;
			border-radius: 30px;
			color:#3B606B;
		}
		.button_active{
			font-weight: 600px;
		}
		.save_current_filters{
			margin-right: 20px;
		}
		.save_current_filters,.delete_filters_button{
			text-transform: uppercase;
			color:#3B606B;
			font-size: 18px;
		}
		.filter_active span {
		    vertical-align: top;
		}
		.filter_active {
		    background-color: #fff;
		    color: #707070;
		    padding: 0 10px;
		    display: inline-block;
		    border:1px solid #EBEBEB;
		    border-radius: 18px;
		    height: 36px;
		    line-height: 2.8;
		    vertical-align: middle;
		    margin: 5px 10px 5px 0px;
		}
		.filter_active .closeFilter {
			font-size: 20px;
		    padding: 8px;
		    cursor: pointer;
		    margin: -17px -5px 0 5px;
		}
		.filter_active .closeLabel {
		  
		    -webkit-transition: -webkit-transform .2s ease-in-out;
		    transition: transform .2s ease-in-out;
		}
		.closeLabel:hover {
		  -webkit-transform: rotate(-90deg);
		  -moz-transform: rotate(-90deg);
		  -o-transform: rotate(-90deg);
		  -ms-transform: rotate(-90deg);
		  transform: rotate(-90deg);
		}
	</style>

		<script src="{{ asset('js/projects.js') }}"></script>

		<script src="{{ asset('js/cor_filter.js') }}"></script>

		<script>

			var json =
				{
					nombre:{
						type:'text',
					},
					apellido:{
						type:'text',
					},
					titulo:{
						type:'text',
					},
					categoria:{
						type:'text',
					},
					labels:{
						type:'select'
					}
				};

			var filter = new cor_filter();

			filter.setFilters(json);



			filter.instance.add_filter_text = 'Añadir Filtros';
			filter.instance.save_filter_text = 'Guardar Filtros';

			filter.create('.cor_filter');



			/*$('.listen_main_input').keyup(function(e){
				
				var code = e.which;

				if(code==13||code==188||code==186)
				{
					$('.active_filters').prepend(`<div class="filter_active">
										<div class="pull-left">
											<span>Search: `+$(this).val()+`</span>
										</div>
										<div class="closeFilter pull-right listen_close_option">
											<i class="fal fa-times closeLabel"></i>
										</div>
								</div>`);

					$(this).val('');
					$('.input_list_value').text('');
					
				}

				if($(this).val() === '')
				{
					$('.dropdown-filter').removeClass('open');
					$('.input_list_value').text('');

				}else{
					
					$('.input_list_value').text('contiene "' + $('.listen_main_input').val() + '"');

					$('.dropdown-filter').removeClass('open');
					$('.dropdown-filter').addClass('open');
				}
			});*/


			/*$('.listen_click_filter_option').on('click', 'a', function(){

				if($('.listen_main_input').val() === ''){

				}else{
					$('.active_filters').prepend(`<div class="filter_active">
										<div class="pull-left">
											<span>`+$(this).data('filter')+`: `+$('.listen_main_input').val()+`</span>
										</div>
										<div class="closeFilter pull-right listen_close_option">
											<i class="fal fa-times closeLabel"></i>
										</div>
								</div>`);
				
				$('.listen_main_input').val('');
				$('.input_list_value').text('');
				$('.dropdown-filter').removeClass('open');
				}

			});*/


			/*$('.listen_main_input').on('focus',function(){
				$('.dropdown-filter').addClass('open');
			});


			$('.listen_main_input').on('focusout',function(){
				$('.dropdown-filter').removeClass('open');
			});*/


			/*$('.active_filters').on('click', 'div.listen_close_option', function(){
				$(this).closest('.filter_active').remove();
			});*/


			$('.listen_add_filter_button').on('click', function(){
				$('.listen_main_input').focus();
				$('.dropdown-filter').addClass('open');
			});

			/*
			$('.listen_click_delete_filters').click(function(){
				

				$('.filter_active').each(function(){
					$(this).fadeOut().remove();
				});
			});*/

		</script>
    </body>
</html>
