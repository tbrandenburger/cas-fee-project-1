requirejs.config({
    baseUrl: '/',
    paths: {
        jquery: 'lib/jquery/jquery-2.2.3.min',
        handlebars: 'lib/handlebars/handlebars.min',
        dashboardController: 'controller/dashboard.controller',
        noteController: 'controller/note.controller',
        noteService: 'services/note.service',
        viewController: 'view.controller',
        helpers: 'helpers',
        handlebarsHelpers: 'handlebarsHelpers',
        main: 'main'
    }
});