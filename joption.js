/*!
* @(#) jOption jQuery plugin v1.2.0
* http://www.ritbox.com
*
* Copyright 2010, Diego Guevara - Ritbox Ltda.
* Released under dual licensed under the MIT or GPL Version 2 licenses.
*
* Creation Date: Jun.02.2010
* Last Update: Jul.06.2010
*/

 (function($){
    $.fn.addOptions = function(options){

        var defaults =
        {
            url: '',
            data: '',
            params : '',
            method : 'GET',
            selected: '',
            callback: ''
        };
        //var options;
        options = $.extend(defaults, options);




        var obj = this;
        //var value_active = '';

        if (options.url != '')
        {
            $.ajax(
            {
                type: options.method,
                url: options.url,
                dataType: 'json',
                data : options.params,
                cache: false,
                success: function(data){
                    loadOptions(obj, data, options);

                    if (options.callback != '')
                    options.callback(true);
                },
                error: function(){
                    if (options.callback != '')
                    options.callback(false);
                }
            });

        }
        else
        {
            loadOptions(obj, options.data, options);
            if (options.callback != '')
            options.callback(true);
        }

    };

    $.fn.addOption = function(value, text, selected){
        selvalue = (selected) ? "selected": "";
        value_active = '<option value="' + value + '"' + selvalue + '>';
        value_active += text;
        value_active += '</option>';

        this.append(value_active);
    };

    var loadOptions = function(obj, data, options){
        //obj.html('');

        $.each(data,
        function(thevalue, thetext){
            selvalue = (thevalue == options.selected) ? "selected": "";
            value_active = '<option value="' + thevalue + '"' + selvalue + '>';
            value_active += thetext;
            value_active += '</option>';

            obj.append(value_active);

        });
    }
})(jQuery);
