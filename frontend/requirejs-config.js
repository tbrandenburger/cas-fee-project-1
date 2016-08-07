requirejs.config({
    baseUrl: '/',
    paths: {
        jquery: 'lib/jquery/jquery-2.2.3.min',
        handlebars: 'lib/handlebars/handlebars.min',
        DashboardController: 'controller/dashboard.controller',
        NoteController: 'controller/note.controller',
        NoteService: 'services/note.service',
        Helpers: 'helpers',
        HandlebarsHelpers: 'handlebarsHelpers',
        app: 'main'
    }
});