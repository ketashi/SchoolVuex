<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            a {
                text-decoration: none;
                width: 100%;
            }
            .v-sheet--offset {
                top: -24px;
                position: relative;
            }
        </style>
        <title>Colegio</title>
    <body>
        <div id="app">
            <dashboard-component></dashboard-component>
        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
