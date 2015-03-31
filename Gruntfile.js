module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		concat:{
			app:{
				src:['.build/app/~.js'],
				dest:'dest/app.js'
			},
			spaseed:{
				src:['.build/spaseed/~.js'],
				dest:'dest/spaseed.js'
			}
		},
		watch:{
			files:[
				'spaseed/~.js','spaseed/~.tpl','spaseed/~.ejs',
                'app/~.js','app/~.tpl','app/~.ejs'
            ],
			tasks:['concat']
		},
		yuidoc: {
		    compile: {
		      name: '<%= pkg.name %>',
		      description: '<%= pkg.description %>',
		      version: '<%= pkg.version %>',
		      options: {
		        paths: ['spaseed'],
		        themedir: 'docs/themes/default',
		        outdir: 'docs/app/'
		      }
		    }
		},
		tmod: {
	      apptemplate: {
	        src: ['app/modules/**/*.tpl'],
	        dest: 'dest/.compiled/apptemplate.js',
	        options: {
	            base: 'app/modules',
	            minify: false,
	            namespace:'apptemplate'
	        }
	      }
	    },
        combo: {
	        options: {
	        	alias:'<%=pkg.spm.alias%>',
	        	base:'/',
	        	dest:'dest/app.combo.js'
	        },
	        build: {
	            files: [{
	                expand: true,
	                cwd: './',
	                src: ['app/main/startup.js','app/modules/**/*.js']
	            }]
	        }
	    },
		mocha: {
			all: {
			  src: ['test/index.html'],
			  options: {
			    run: true
			  }
			}
		}
	});
	grunt.loadNpmTasks('grunt-qc-concat');
	grunt.loadNpmTasks('grunt-qc-watch');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-alan-tmod');
	grunt.loadNpmTasks('grunt-seajs-combo');

    grunt.registerTask('default',['concat','yuidoc','tmod','watch']);
    grunt.registerTask('test',['mocha:all']);
}