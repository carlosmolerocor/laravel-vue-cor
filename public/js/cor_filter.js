class cor_filter {

	constructor(){

		this.instance = {
			 body:'',
			 input: '',
			 add_filter_text:'Add Filter',
			 save_filter_text:'Save Filters',
			 delete_all_filters_text:'Delete Filters',
			 options_content_text: 'has',
		}
		

		this.attributes = {
			params:[],
			filters:[],

		}

		/**
         * Contenedores de los elementos generales
         * */
        this.containers = {
            /** container donde insertaremos todo **/
            source_container: '',

            /** contenedor principal de los filters **/
            main: '.container_cor_filters',

            container_cor_filters_options:'.container_cor_filters_options',

            input_wrapper:'.container_input_filter',

            input_container:'.main_input_container',

            filters_container:'.filters_container',

       		filter_options:'.filter_options',

       		active_filters: '.active_filters',

       		dropdown_filter: '.dropdown_filter',

        }

        /**
         * Callbacks
        */
        this.styles = {

        	active_filters_container:'.active_filters',

            filter_active:'.filter_active',

            filters_list: '.filters_list',            

            setting_filter:'.settingFilter',

            close_filter_wrapper:'.closeFilter',

            close_icon:'.closeLabel',
            

			add_filter:'.add_filter_button',

            save_filters_button:'.save_current_filters',

            delete_all_filters:'.delete_filters_button',


            input:'.main_input_filters',

            filter_option: '.filter_option',

            input_list_value : '.input_list_value',

        }

		/**
         * Callbacks
        */
        this.callbacks = {
        	click_option: function (){return false;},
        	after_click_option: function (){return false;},

        	filter_added: function() {return false;},
            after_delete_filter:function() {return false;},

            delete_all_filters: function(){return false;}
        }

         /**
         * Configuraciones
         */
        this.configurations = {
            show_saved_filters: false,
        }

         /**
         * Listeners
         */

        this.listeners = {
        	listen_click_filter_option: '.listen_click_filter_option',
        	listen_click_filter:'.listen_click_filter',
        	listen_close_option:'.listen_close_option',
        	listen_main_input:'.listen_main_input',
        	listen_add_filter_button:'.listen_add_filter_button',
        	listen_click_save_filters: '.listen_click_save_filters',
        	listen_click_delete_filters: '.listen_click_delete_filters',
        }

       	/**
         * Templates
         * */
    	this.templates = {
            body: '',

            container_cor_filters_options: '',

            filter_actions:'',

            filters_container:'',

            active_filters:[],

            container_input_filter:'',

            container_filter_options:'',

            input_container:'',

            dropdown_filter:'',

        }
	}


	
	/**
	*	set all the filters
	*
	*	Setea todos los filtros que el componente va a usar
	**/

	setFilters(filters){

		console.log('Setting Filters...');

		let arr = this.attributes.filters;

		$.each(filters, function(index, filter){

			filter.type = filter.type || 'text';
			filter.active = filter.active || false;

			arr[index] = filter;

		});

		this.attributes.filters = arr;
	}


	/**
	*	Init filter component
	*
	*	Inicializa todos los metodos necesarios para el render del componente
	**/

	create(source_container){

		console.log('Creating...');

		/** seteo las configuraciones enviadas por el usuario **/
        this.setStartConfiguration(source_container);

        /** creo los templates principales del componente **/
        this.createTemplates();

        /** seteo los filtros **/
        this.renderFilterOptions();

        /** activo los listeners **/
        this.createListeners();
	}


	/**
	*	Creo los listeners para cada evento del componente
	*
	*	
	**/

    createListeners() {

        this.listenDeleteAllFiltersOptions();

        this.listenMainInputOnType();

        this.listenClickFilterOption();

        this.listenDeleteFilter();

        this.listenMainInputOnFocus();

        this.listenMainInputOnBlur();

    }


    /**
	*	Open option list on input focus
	*
	*	Evento para abrir el dropdown en el focus del input
	**/

	listenMainInputOnFocus(){

		var self = this;

		$(this.containers.source_container).on('focus', this.listeners.listen_main_input, function(){
			$(self.containers.dropdown_filter).addClass('open');
		});

	}

	/**
	*	Close option list on input blur
	*
	*	Evento para cerrar el dropdown de opciones en el blur del input
	**/

	listenMainInputOnBlur(){
		var self = this;

		$(this.containers.source_container).on('blur', this.listeners.listen_main_input, function(){
			$(self.containers.dropdown_filter).removeClass('open');
		});
	}

    /**
	*	Delete all filters event
	*
	*	Se eliminan todos los filtros actuales
	**/

    listenDeleteAllFiltersOptions(){

    	var self = this;

    	$(this.containers.source_container).on('click', this.listeners.listen_click_delete_filters, function(){

				$(self.styles.filter_active).each(function(){
					$(this).fadeOut('slow');
					$(this).remove();

					//setTimeout(function(){ $(this).remove(); }, 2000);

						let filter = $(this).data('filter');

						self.attributes.filters[filter]['active'] = false;

						self.attributes.filters[filter]['value'] = '';

						self.updateFilterList(filter);
					
				});
		});
    }

	/**
	*	listen click option event
	*
	*	Evento para el click de una opcion de la lista
	**/

	listenClickFilterOption(){

		var self = this;

		$(this.listeners.listen_click_filter_option).on('click', 'li', function(){

			var filter = $(this).data('filter');
			var value = $(self.styles.input).val();


			if (value!=''){
				self.addFilter(filter, value);

				self.removeFilterOption(filter);

				self.showAllFilterOptions();
			}else{

			}
			
			$(self.styles.input).val('');
			$('.input_list_value').text('');

		});

	}

	/**
	*	listen delete filter
	*
	*	Se elimina el filtro seleccionado
	**/

	listenDeleteFilter(){

		var self = this;

		$(this.containers.active_filters).on('click', this.listeners.listen_close_option, function(){

			var filter = $(this).closest(self.styles.filter_active).data('filter');

			$(this).closest(self.styles.filter_active).remove();

			self.deleteActiveFilter(filter);

			self.updateFilterList(filter);

			self.showAllFilterOptions();

		});
	}

    /**
	*	listen input type event
	*
	*	Se eliminan todos los filtros actuales
	**/

	listenMainInputOnType(){

		var self = this;

		$(this.containers.source_container).on('keyup', this.listeners.listen_main_input, function(e)
		{
			var code = e.which;

			//Si se presiona la tecla ENTER se atrapa el evento de esta manera
			if(code==13||code==188||code==186)
			{
				/*$(this).val('');
				$(self.styles.input_list_value).text('');	*/
			}

			// Si el input queda vacio muestra de nuevo todo tipo de opciones
			if($(this).val() === '')
			{
				$(self.styles.input_list_value).text('');

				self.showAllFilterOptions();

			}else{

				// Si se typea algo dentro del input se ocultan los elementos que no sean de tipo text

				self.hideFilterSelectOptions();

				$(self.styles.input_list_value).text(' '+self.instance.options_content_text+' "' + $(self.listeners.listen_main_input).val() + '"');

				$(self.containers.dropdown_filter).removeClass('open');
				$(self.containers.dropdown_filter).addClass('open');
			}

		});
	}

	/**
	*	Show all filter options
	*
	*	Muestra todas las opciones de filtrado incluyendo las que no son textos
	**/

	showAllFilterOptions(){

		$('ul'+this.styles.filters_list+' li').each(function(){

			if($(this).data('type')!='text'){
				$(this).show();
			}	

		});
	}

	/**
	*	Hide all filter options which are not text options
	*	
	*   Esconde todos las opciones de la lista que no sean tipo texto
	**/

	hideFilterSelectOptions(){

		$('ul'+this.styles.filters_list+' li').each(function(){

			if($(this).data('type')!='text'){
				$(this).hide();
			}	

		});
	}


	/**
	*	Renderlist
	*
	*	Se crean las opciones (los li) iniciales del dropdown
	**/

	renderFilterOptions(){

		var self = this;

		let arr = this.attributes.filters;

		for (var key in arr) {

			if(!arr[key]['active']){
				 var li = 
		    	`<li data-filter="${key}" data-type="${arr[key]['type']}"><a href="#" class="`+this.getClassOrIdName(this.styles.filter_option)+`">${key}<span class="`+this.getClassOrIdName(this.styles.input_list_value)+`"></span></a></li>`;

		    	$(self.styles.filters_list).append(li);
			}			  
				
		}
	}


	/**
	*	AddFilter
	*
	*	Cambia el filtro a activo y lo añade a la lista
	**/
	
	addFilter(filter, value){

		var self = this;
		
		if (value!=''){

			$(this.containers.active_filters).prepend(`
			<div class="`+this.getClassOrIdName(this.styles.filter_active)+`" data-filter='`+filter+`'>
			<div class="pull-left">
			<span>`+filter.charAt(0).toUpperCase() + filter.slice(1)+`: `+value+`</span>
			</div>
			<div class="`+this.getClassOrIdName(this.styles.close_filter_wrapper)+` pull-right `+this.getClassOrIdName(this.listeners.listen_close_option)+`">
			<i class="fal fa-times `+this.getClassOrIdName(this.styles.close_icon)+`"></i>
			</div>
			</div>`);

			for (var key in this.attributes.filters) {

				if(key === filter){
					self.attributes.filters[key]['active'] = true;

					self.attributes.filters[key]['value'] = value;
				}

			}
		}

	}


	/**
	*	Delete active filter
	*
	*	Remueve la opción de la lista de filtrado
	**/

	deleteActiveFilter(filter){

		var self = this;

			for (var key in this.attributes.filters) {

				if(key === filter){
					self.attributes.filters[key]['active'] = false;

					self.attributes.filters[key]['value'] = '';
				}

			}

	}


	/**
	*	update filter list
	*
	*	Update filter list and add and option
	**/

	updateFilterList(filter){

		$("li[data-filter='" + filter + "']").show();

	}

	/**
	*	Remove Filter Option
	*
	*	Remueve la opción de la lista de filtrado
	**/

	removeFilterOption(filter){

		$("li[data-filter='" + filter + "']").hide();

	}

    /**
	*	Create Templates
	*
	*	Se crean los templates de cada parte del filter
	**/
    createTemplates() {

    	console.log('Creating templates...');

    	/** Template de las opciones principales del header **/

    	this.templates.container_filter_options =
	    	`<div class="`+this.getClassOrIdName(this.containers.filter_options) +` pull-right">
	    		<a href="#" class="`+this.getClassOrIdName(this.styles.save_filters_button)+` `+ this.getClassOrIdName(this.listeners.listen_click_save_filters) +`">`+this.instance.save_filter_text +`</a>
	    		<a href="#" class="`+this.getClassOrIdName(this.styles.delete_all_filters)+` `+ this.getClassOrIdName(this.listeners.listen_click_delete_filters) +`">`+this.instance.delete_all_filters_text+`</a>
	    	</div>`;

    	/** Template de las opciones del header **/

        this.templates.container_cor_filters_options = 
	        `<div class="col-md-12">
	        	<div class="row">
	        		<div class="`+this.containers.container_cor_filters_options+`">
	        			<div class="filters_header">
	        				<div class="col-md-6">
	        					<a href="#" name="addFilter" class="`+this.getClassOrIdName(this.styles.add_filter)+` pull-left `+this.getClassOrIdName(this.listeners.listen_add_filter_button)+`">
	        					+ `+this.instance.add_filter_text+`</a>
	        				</div>
	        				<div class="col-md-6">
	        					`+this.templates.container_filter_options+`
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        </div>`;

	    /** Template para los filtros activos **/

	    this.templates.filters_container = `
		     <div class="col-md-12">
		     	<div class="`+ this.getClassOrIdName(this.containers.active_filters) +`">
		     	</div>
		     </div>`;


		/** Template del wrapper del input principal **/

	    this.templates.container_input_filter =
	    `<div class="`+this.getClassOrIdName(this.containers.input_wrapper)+`"></div>`;


	    /** Template del input principal **/

	    this.templates.input_container =
	    `<input type="text" class="`+this.getClassOrIdName(this.styles.input)+` `+
	    this.getClassOrIdName(this.listeners.listen_main_input)+`">`;


	    /** Template de filtros activos **/

		this.templates.active_filters =
	    `<div class="`+this.getClassOrIdName(this.styles.filter_active)+`">
	    </div>`;

	    /** Template del dropdown de opciones **/

	    this.templates.dropdown_filter =
	    `<div class="dropdown `+this.getClassOrIdName(this.containers.dropdown_filter)+`">
			<ul class="dropdown-menu dropdown-lg `+this.getClassOrIdName(this.styles.filters_list)+` `+this.getClassOrIdName(this.listeners.listen_click_filter_option)+`">
			</ul>
	    </div>`;



        $(this.containers.source_container).append(this.templates.container_cor_filters_options);

        $(this.containers.source_container).append(this.templates.filters_container);

        $(this.containers.active_filters).append(this.templates.container_input_filter);

        $(this.containers.input_wrapper).append(this.templates.input_container);

        $(this.containers.input_wrapper).append(this.templates.dropdown_filter);


    }


    /**
	*	Create Templates
	*
	*	Proceso una clase o un ID sin el identificador
	**/
    getClassOrIdName(name) {
        return name.substr(1);
    }

    /**
	*	Start Configuration
	*
	*	
	**/
    setStartConfiguration(source_container){

    	console.log('Configurating...');


    	this.containers.source_container = source_container;

		/*this.createTemplates();*/

        /** seteamos si tiene un select de origen **/
       /* if (source_container) {
            * identifico el select de origen *
            this.setSelectIdentity(source_container);
        }*/


    }


	/**
	*	Get active options
	*
	*	return all the active filters
	**/

	getActiveFilters(){
		return false;
	}


    /**
	*	Get instance
	*
	*	return the main instance
	**/
    getInstance(){
        return this.instance.body;
    }


}