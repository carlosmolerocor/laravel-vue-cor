class cor_filter {

	constructor(){

		this.instance = {
			 body:'',
			 input: '',
			 add_filter_text:'Add Filter';
			 save_filter_text:'Save Filters';
			 delete_all_filters_text:'Delete Filters';
		}
		

		this.attributes = {
			columns:[

			],

			filters:[

			]
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

            add_filter:'.add_filter_button',

            save_filters_button:'.save_current_filters',

            delete_all_filters:'.delete_filters_button',



            input_wrapper:'.container_input_filter',

            input_container:'.main_input_container',

            input:'.main_input_filters',



            filters_container:'.filters_container',

       		active_filters_container:'.active_filters',

            filter_active:'.filter_active',            

            setting_filter:'.settingFilter',

            close_filter_wrapper:'.closeFilter',

            close_icon:'.closeLabel',
            


            dropdown_filter:'.dropdown-filter',

            dropdown_filter_options:'.dropdown_filter_options'

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
        	click_filter_option: '.listen_click_filter_option',
        	filter_option:'.listen_click_filter',
        	close_option:'.listen_close_option',
        	input_type:'.main_input_filters',
        	input_text_filter:'.input_text_filter'
        }
	}
	
	/**
	*	set all the filters
	*
	*	Setea todos los filtros que el componente va a usar
	**/

	setFilters(filters){

		$.each(filters, function(i, filter){

			filter.type = filter.type || 'text', 
			filter.active = filter.active || false,

			this.attributes.filters.push(filter);

		});
	}


	/**
	*	Init filter component
	*
	*	Inicializa todos los metodos necesarios para el render del componente
	**/

	create(source_container){

		 /** seteo las configuraciones enviadas por el usuario **/
        this.setStartConfiguration(source_container);

	}



    /**
	*	Create Templates
	*
	*	Se crean los templates de cada parte del filter
	**/
    createTemplates() {


    }

    /**
	*	Start Configuration
	*
	*	
	**/
    setStartConfiguration(source_container){

        this.createTemplates();

        /** seteamos si tiene un select de origen **/
        if (source_container) {
            /** identifico el select de origen **/
            this.setSelectIdentity(source_container);
        }


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