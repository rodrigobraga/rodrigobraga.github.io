; (function ($) {

    $.BasicCal = function (el, options) {

        var defaults = {
            Date: new Date(),
            highlightCurrentDay: true,
            highlightBlankDays: true,
            Header : {
                'sun': 'dom',
                'mon': 'seg',
                'tue': 'ter',
                'wed': 'qua',
                'thu': 'qui',
                'fri': 'sex',
                'sat': 'sab'            },
            onDateClick : function () { null; }
        }

        var plugin = this;

        var WeekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

        var template = '<ul><li>${sun}</li><li>${mon}</li><li>${tue}</li><li>${wed}</li><li>${thu}</li><li>${fri}</li><li>${sat}</li></ul>';

        plugin.settings = {}

        // 
        var init = function () {

            // merged options
            plugin.settings = $.extend({}, defaults, options);

            //
            plugin.el = el;

            //
            $.tmpl(template, plugin.settings.Header).appendTo(plugin.el);

            //            plugin.el.addClass('basiccal');

            // draw calendar on the element (el)
            drawCalendar();
        }

        plugin.Today = function () {            
            plugin.settings.Date = new Date();
            drawCalendar();
        }

        plugin.PreviousDay = function () {            
            var _current = plugin.settings.Date.getDate();
            plugin.settings.Date.setDate(_current - 1);
            drawCalendar();
        }

        plugin.PreviousMonth = function () {
            var _current = plugin.settings.Date.getMonth();
            plugin.settings.Date.setMonth(_current - 1);            
            drawCalendar();
        }

        plugin.NextDay = function () {            
            var _current = plugin.settings.Date.getDate();
            plugin.settings.Date.setDate(_current + 1);            
            drawCalendar();
        }

        plugin.NextMonth = function () {
            var _current = plugin.settings.Date.getMonth();
            plugin.settings.Date.setMonth(_current + 1);            
            drawCalendar();
        }

        plugin.JumpToDate = function (_date) {
            plugin.settings.Date = _date;
            drawCalendar();
        }

        plugin.GetDateFromCalendar = function () {
            return plugin.settings.Date;
        }

        function drawCalendar() {

            // clear            plugin.el.find('ul:gt(0)').remove();            var weeks = [];

            var _week = {
                'sun': '',
                'mon': '',
                'tue': '',
                'wed': '',
                'thu': '',
                'fri': '',
                'sat': ''            };            var _year     = plugin.settings.Date.getFullYear();            var _month    = plugin.settings.Date.getMonth();            var _last_day = lastDayInMonth(_year, _month);            for (var i = 1; i < _last_day + 7; i++) {                
                var _date = new Date();
                _date.setFullYear(_year);
                _date.setMonth(_month);
                _date.setDate(i);                var _day_of_week = _date.getDay();                var _valor = i > _last_day ? '' : i;                                _week[WeekDays[_day_of_week]] = _valor;

                if (_date.getDay() == 6) {                    weeks.push(_week);                    _week = {
                        'sun': '',
                        'mon': '',
                        'tue': '',
                        'wed': '',
                        'thu': '',
                        'fri': '',
                        'sat': ''                    };
                }
            }                                    $.tmpl(template, weeks).appendTo(plugin.el);

            // set date clicked as current date
            plugin.el.find('li:not(:empty)').click(function () {
                var _date = $(this).text();
                plugin.settings.Date.setDate(_date);
                highlightCurrentDay();
            });

            plugin.el.find('li:not(:empty)').click(plugin.settings.onDateClick);

            plugin.settings.highlightCurrentDay ? highlightCurrentDay() : null;
            plugin.settings.highlightBlankDays ? highlightBlankDays() : null;
        }
        function highlightCurrentDay() {
            var _day = plugin.settings.Date.getDate();
            plugin.el.find('li').removeClass('selected');
            plugin.el.find('li:contains("' + _day + '"):first').addClass('selected');
        }

        function highlightBlankDays() {
            plugin.el.find('li:empty').addClass('inactive').html('&nbsp;');
        }

        var lastDayInMonth = function (year, month) {
            return 32 - new Date(year, month, 32).getDate();
        }

        // call the "constructor" method
        init();
    }

})(jQuery);