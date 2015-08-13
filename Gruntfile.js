module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		watch:{
			tmod:{
				files:[
					'spm_modules/~.js',
	                'app/~.js','app/~.html'
	            ],
				tasks:['tmod','combo']
			},
			jsx:{
				files:['app/script/reactmodule/**/*.jsx','spm_modules/spaseed/1.1.22/**/*.jsx'],
				tasks:['react','combo']
			}
		},
		tmod: {
	      spaseedtemplate: {
	        src: ['spm_modules/spaseed/1.1.22/view/**/*.html'],
	        dest: 'tmp/spaseed/view/view.js',
	        options: {
	            base: 'spm_modules/spaseed/1.1.22/view',
	            minify: false,
	            namespace:'spaseedtemplate'
	        }
	      },
	      apptemplate: {
	        src: ['app/view/**/*.html'],
	        dest: 'tmp/app/view/view.js',
	        options: {
	            base: 'app/view',
	            minify: false,
	            namespace:'apptemplate'
	        }
	      }
	    },

	    //for react
	    react: {
		    dest: {
		    	files:[{
		    		expand: true,
		    		cwd: 'app/script/reactmodule',
		    		src: ['**/*.jsx'],
		      		dest:'tmp/app/script/module',
		      		ext: '.js'
		    	},{
		    		expand: true,
		    		cwd:'spm_modules/spaseed/1.1.22',
		    		src: ['**/*.jsx'],
		      		dest:'tmp/spaseed/react',
		      		ext: '.js'
		    	}]
		    }
		},

        combo: {
	        options: {
	        	alias:{
	        		'$':'spm_modules/spaseed/1.1.22/lib/dom',
	                'mp':'spm_modules/spaseed/1.1.22/main/mp',
	                'App':'spm_modules/spaseed/1.1.22/main/App',
	                //'Router':'spm_modules/spaseed/1.1.22/main/Router',
	                'Router':'tmp/spaseed/react/main/Router',
	                'AppRouter':'spm_modules/spaseed/1.1.22/main/H5Router',
	                'Node':'spm_modules/spaseed/1.1.22/main/Node',
	                'View':'spm_modules/spaseed/1.1.22/main/View',
	                'Event':'spm_modules/spaseed/1.1.22/lib/Event',
	                'Net':'spm_modules/spaseed/1.1.22/lib/Net',


	                'Dialog':'spm_modules/spaseed/1.1.22/lib/Dialog',
	                'ReactDialog':'tmp/spaseed/react/component/dialog/Dialog',
	                'DialogButton':'tmp/spaseed/react/component/dialog/DialogButton',


	                'Mask':'spm_modules/spaseed/1.1.22/lib/Mask',
	                'ErrorTips':'spm_modules/spaseed/1.1.22/lib/ErrorTips',
	                'Loading':'spm_modules/spaseed/1.1.22/lib/Loading',

	                'binder':'spm_modules/spaseed/1.1.22/lib/binder',
	                'cookie':'spm_modules/spaseed/1.1.22/lib/cookie',
	                'env':'spm_modules/spaseed/1.1.22/lib/env',
	                'asyncrequest':'spm_modules/spaseed/1.1.22/lib/asyncrequest',
	                'stats':'spm_modules/spaseed/1.1.22/lib/stats',
	                'template':'spm_modules/spaseed/1.1.22/lib/template',

	                'config':'spm_modules/spaseed/1.1.22/config',
	                
	                'apptemplate':'tmp/app/view/view',
	                'request':'app/script/model/request',

	                'react':'spm_modules/spaseed/1.1.22/dist2/react'
	        	},
	        	base:'/',
      			destPath:'/',
	        	dest:'dest/app.combo.js'
	        },
	        build: {
	            files: [{
	                expand: true,
	                cwd: './',
	                src: ['app/script/entry.js','app/script/module/**/**.js']
	                //for react
	                //src: ['app/script/entry.js','tmp/app/script/module/**/**.js']
	            }]
	        }
	    }
	});
	grunt.loadNpmTasks('grunt-qc-concat');
	grunt.loadNpmTasks('grunt-qc-watch');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-alan-tmod');
	grunt.loadNpmTasks('grunt-seajs-combo');
	grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default',['tmod','react','combo','watch']);
    grunt.registerTask('test',['mocha:all']);
}