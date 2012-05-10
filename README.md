# jOption - jQuery Plugin!

This jQuery plugin allows dynamically add options into a Select tag using ajax or local JSON data.

### Requires jQuery 1.4x

# jOption options

     $('#select_local').addOptions({
        url         : '',       // ajax URL
        data        : '',       // data ajax params
        content     : '',       // offline content JSON array
        method      : 'GET',    // ajax method
        selected    : '',       // selected value
        complete    : '',       // complete function()
        empty       : true      // clear select before add options
     });


# Usage:
## From local variable

    var jsondata = [{
        'value' : '1',
        'text'  : 'Option 1'
     },{
        'value' : '2',
        'text'  : 'Option 2'
     }];

     $('#select_local').addOptions({
        content : jsondata
     });


## From JSON File data.json

    $('#select_file').addOptions({
        url : 'data.json'
    });


## Manually option load

    // addOption( <value>, <text>, <selected:boolean>)

    $('#select_manual').addOption('1','m option 1', false);

    $('#select_manual').addOption('2','m option 2', true);


## From JSON File data.json with callback function

    $('#lnk_load').click(function(){
        $('#select_file_callback').addOptions({
            url : 'data.json',
            complete : callbackResult, // javascript function
            selected : 2 // select value 2 if exist
        });
        return false;
    });