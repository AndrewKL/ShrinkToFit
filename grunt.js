module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/tests.html']
        }
    });

    // Travis CI task.
    grunt.registerTask('travis', 'lint qunit');
};