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
	        src: ['app/script/module/**/*.tpl'],
	        dest: 'dest/views/apptemplate.js',
	        options: {
	            base: 'app/script/module',
	            minify: false,
	            namespace:'apptemplate'
	        }
	      }
	    },
        combo: {
	        options: {
	        	alias:'<%=pkg.spm.alias%>',
	        	base:'/',
      			destPath:'/',
	        	dest:'dest/app.combo.js'
	        },
	        build: {
	            files: [{
	                expand: true,
	                cwd: './',
	                src: ['app/script/entry.js','app/script/module/**/*.js']
	            }]
	        }
	    }
	});
	grunt.loadNpmTasks('grunt-qc-concat');
	grunt.loadNpmTasks('grunt-qc-watch');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-alan-tmod');
	grunt.loadNpmTasks('grunt-seajs-combo');

    grunt.registerTask('default',['tmod','combo','watch']);
    grunt.registerTask('test',['mocha:all']);
}