class cor_filter {

	constructor(){

		this.instance = {
			 body:'',
			 input: '',
			 add_filter_text:'Add Filter',
			 save_filter_text:'Save Filters',
			 delete_all_filters_text:'Delete Filters',
		}
		

		this.attributes = {
			columns:[],
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

        }

        /**
         * Callbacks
        */
        this.styles = {

        	active_filters_container:'.active_filters',

            filter_active:'.filter_active',            

            setting_filter:'.settingFilter',

            close_filter_wrapper:'.closeFilter',

            close_icon:'.closeLabel',
            

			add_filter:'.add_filter_button',

            save_filters_button:'.save_current_filters',

            delete_all_filters:'.delete_filters_button',


            dropdown_filter:'.dropdown-filter',



            input:'.main_input_filters',

            filter_option: '.filter_option',

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
        	liste_close_option:'.listen_close_option',
        	listen_main_input:'.listen_main_input',
        	listen_click_filter_option:'.listen_click_filter_option',
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

            active_filters:'',

            container_input_filter:'',

            container_filter_options:'',

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

        /** activo los listeners **/
        this.createListeners();
	}


	/** Activo los listeners de cad elemento **/
    createListeners() {

        this.listenDeleteAllFiltersOptions();

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

					setTimeout(function(){ $(this).remove(); }, 2000);
					
				});
		});
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
	    	`<div class="`+this.containers.filter_options+` pull-right">
	    		<a href="#" class="`+this.getClassOrIdName(this.styles.save_filters_button)+` `+ this.getClassOrIdName(this.listeners.listen_click_save_filters) +`">`+this.instance.save_filter_text +`</a>
	    		<a href="#" class="`+this.getClassOrIdName(this.styles.delete_all_filters)+` `+ this.getClassOrIdName(this.listeners.listen_click_delete_filters) +`">`+this.instance.delete_all_filters_text+`</a>
	    	</div>`;

    	/** Template de las opciones **/

        this.templates.container_cor_filters_options = 
	        `<div class="col-md-12">
	        	<div class="row">
	        		<div class="container_cor_filters_options">
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

	     this.templates.active_filters = `<div class="`+ this.getClassOrIdName(this.styles.active_filters_container) +`"></div>`;

	     this.templates.container_input_filter = `<div class="container_input_filter"></div>`;

	     console.log($(this.templates.active_filters).prepend(this.templates.container_input_filter));

	     console.log(this.templates.active_filters);


        $(this.containers.source_container).prepend(this.templates.container_cor_filters_options);

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

/*        this.createTemplates();*/

        /** seteamos si tiene un select de origen **/
       /* if (source_container) {
            * identifico el select de origen *
            this.setSelectIdentity(source_container);
        }*/


    }


	/**
	*	Build options
	*
	*	Construye las opciones para el select en base a las columnas
	**/

	buildFilterOptions(){
		return false;
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
	*	Get input value
	*
	*	return the main input value
	**/
    getInputValue(){
        return $(this.getInstance()).find(this.input_type).val();
    }

    /**
	*	Get instance
	*
	*	return the main instance
	**/
    getInstance(){
        return this.instance.body;
    }


	/**
	*	Set active option
	*
	*	setea una opcion como activa para no mostrarla en los siguientes resultados
	**/

	setFilterAsActive(){
		return false;
	}


	/**
	*	Set active option
	*
	*	borra un filtro activo
	**/

	deleteActiveFilters(){
		return false;
	}


	/** 
	*  Show filter options 
	*
	*	muestra la lista de filtros posibles para el input
	**/
    showFiltersList() {
    	return false;
    }




}