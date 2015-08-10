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
				files:['app/script/reactmodule/**/*.jsx','spm_modules/spaseed/1.1.19/**/*.jsx'],
				tasks:['react','combo']
			}
		},
		tmod: {
	      spaseedtemplate: {
	        src: ['spm_modules/spaseed/1.1.19/view/**/*.html'],
	        dest: 'tmp/spaseed/view/view.js',
	        options: {
	            base: 'spm_modules/spaseed/1.1.19/view',
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
		    		cwd:'spm_modules/spaseed/1.1.19',
		    		src: ['**/*.jsx'],
		      		dest:'tmp/spaseed/react',
		      		ext: '.js'
		    	}]
		    }
		},

        combo: {
	        options: {
	        	alias:{
	        		'$':'spm_modules/spaseed/1.1.19/lib/dom',
	                'mp':'spm_modules/spaseed/1.1.19/main/mp',
	                'App':'spm_modules/spaseed/1.1.19/main/App',
	                //'Router':'spm_modules/spaseed/1.1.19/main/Router',
	                'Router':'tmp/spaseed/react/main/Router',
	                'AppRouter':'spm_modules/spaseed/1.1.19/main/H5Router',
	                'Node':'spm_modules/spaseed/1.1.19/main/Node',
	                'View':'spm_modules/spaseed/1.1.19/main/View',
	                'Event':'spm_modules/spaseed/1.1.19/lib/Event',
	                'Net':'spm_modules/spaseed/1.1.19/lib/Net',


	                'Dialog':'spm_modules/spaseed/1.1.19/lib/Dialog',
	                'ReactDialog':'tmp/spaseed/react/component/dialog/Dialog',
	                'DialogButton':'tmp/spaseed/react/component/dialog/DialogButton',


	                'Mask':'spm_modules/spaseed/1.1.19/lib/Mask',
	                'ErrorTips':'spm_modules/spaseed/1.1.19/lib/ErrorTips',
	                'Loading':'spm_modules/spaseed/1.1.19/lib/Loading',

	                'binder':'spm_modules/spaseed/1.1.19/lib/binder',
	                'cookie':'spm_modules/spaseed/1.1.19/lib/cookie',
	                'env':'spm_modules/spaseed/1.1.19/lib/env',
	                'asyncrequest':'spm_modules/spaseed/1.1.19/lib/asyncrequest',
	                'stats':'spm_modules/spaseed/1.1.19/lib/stats',
	                'template':'spm_modules/spaseed/1.1.19/lib/template',

	                'config':'spm_modules/spaseed/1.1.19/config',
	                
	                'apptemplate':'tmp/app/view/view',
	                'request':'app/script/model/request',

	                'react':'spm_modules/spaseed/1.1.19/lib/react'
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
	                //for eact
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