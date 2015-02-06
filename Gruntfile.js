module.exports = function(grunt){
	var transport = require('grunt-cmd-transport');
	var style = transport.style.init(grunt);
	var text = transport.text.init(grunt);
	var script = transport.script.init(grunt);

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		concat:{
			spaseed:{
				src:['spaseed/~.js'],
				dest:'dest/spaseed.js'
			},
			app:{
				src:['app/~.js'],
				dest:'dest/app.js'
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
	        	type:'cmd-concat',
	            base: 'app/modules',
	            minify:false,
	            namespace:'apptemplate'
	        }
	      }
	    },
	    transport : {
		    options : {
		        paths : ['.'],
		        alias: '<%= pkg.spm.alias %>',
		        debug:false,
		        parsers : {
		            '.js' : [script.jsParser],
		            '.css' : [style.css2jsParser],
		            '.html' : [text.html2jsParser]
		        }
		    },
		    javascript : {
		    	files : [
		            {
		            	expand:true,
		                cwd : 'app',
		                src : '**/*.js',
		                filter : 'isFile',
		                dest : '.build'
		            }
		        ]
		    },
		    style : {
		        options : {
		            idleading : 'dist/styles/'
		        },
		        files : [
		            {
		            	expand : true,
		                cwd : 'styles',
		                src : '**/*',
		                filter : 'isFile',
		                dest : '.build/styles'
		            }
		        ]
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
	grunt.loadNpmTasks('grunt-cmd-transport');

    grunt.registerTask('default',['concat','yuidoc','tmod','watch']);
    grunt.registerTask('test',['mocha:all']);
}