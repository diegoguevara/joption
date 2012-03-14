/*!
* @(#) jOption jQuery plugin v2.0.0
*
* Copyright 2011, Diego Guevara
* Released under dual licensed under the MIT or GPL Version 2 licenses.
*
* Creation Date: Jun.02.2010
* Last Update: Jan.28.2011
*/

(function($){
    $.fn.addOptions = function(options){

        var defaults =
        {
            url         : '',       // ajax URL
            data        : '',       // data ajax params
            content     : '',       // offline content array
            method      : 'GET',    // ajax method
            selected    : '',       // selected value
            complete    : '',       // complete function()
            clear       : true      // clear select before add options
        };

        options = $.extend(defaults, options);

        var obj = this;

        if (options.clear){ // clear select
            obj.empty();
        }

        if (options.url != ''){
            $.ajax({
                type    : options.method,
                url     : options.url,
                dataType: 'json',
                data    : options.data,
                cache   : false,
                success : function(data_){
                    loadOptions(obj, data_, options);

                    if (options.complete != '')
                        options.complete(true);
                },
                error: function(){
                    if (options.complete != '')
                        options.complete(false);
                }
            });
        }
        else{
            loadOptions(obj, options.content, options);
            if (options.complete != '')
                options.complete(true);
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
