module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		watch:{
			files:[
				'spm_modules/~.js',
                'app/~.js','app/~.tpl','app/~.ejs'
            ],
			tasks:['tmod','combo']
		},
		tmod: {
	      apptemplate: {
	        src: ['app/view/**/*.tpl'],
	        dest: 'tmp/view/view.js',
	        options: {
	            base: 'app/view',
	            minify: false,
	            namespace:'apptemplate'
	        }
	      }
	    },
        combo: {
	        options: {
	        	alias:{
	        		'$':'spm_modules/spaseed/1.1.14/lib/dom',
	                'mp':'spm_modules/spaseed/1.1.14/main/mp',
	                'App':'spm_modules/spaseed/1.1.14/main/App',
	                'Router':'spm_modules/spaseed/1.1.14/main/Router',
	                'AppRouter':'spm_modules/spaseed/1.1.14/main/H5Router',
	                'Node':'spm_modules/spaseed/1.1.14/main/Node',
	                'View':'spm_modules/spaseed/1.1.14/main/View',
	                'Event':'spm_modules/spaseed/1.1.14/lib/Event',
	                'Net':'spm_modules/spaseed/1.1.14/lib/Net',

	                'binder':'spm_modules/spaseed/1.1.14/lib/binder',
	                'cookie':'spm_modules/spaseed/1.1.14/lib/cookie',
	                'env':'spm_modules/spaseed/1.1.14/lib/env',
	                'dialog':'spm_modules/spaseed/1.1.14/lib/dialog',
	                'asyncrequest':'spm_modules/spaseed/1.1.14/lib/asyncrequest',
	                'stats':'spm_modules/spaseed/1.1.14/lib/stats',
	                'template':'spm_modules/spaseed/1.1.14/lib/template',

	                'config':'spm_modules/spaseed/1.1.14/config',
	                
	                'apptemplate':'tmp/view/view',
	                'request':'app/script/model/request'
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
	            }]
	        }
	    }
	});
	grunt.loadNpmTasks('grunt-qc-concat');
	grunt.loadNpmTasks('grunt-qc-watch');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-alan-tmod');
	grunt.loadNpmTasks('grunt-seajs-combo');

    grunt.registerTask('default',['tmod','combo','watch']);
    grunt.registerTask('test',['mocha:all']);
}