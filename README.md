## Welcome to the joption wiki!

This is an example for joption usage:

This jQuery library provide us a easy way to load select options from json datasource.

It can be loaded from a local JSON variable or from an external JSON datasource.

### Requires jQuery 1.4x


## From local variable

    var jsondata = { // value : text
        '1':'option 1',
        '2':'option 2',
        '3':'option 3',
        '4':'option 4'
     }

     $('#select_local').addOptions({
        data : jsondata
     });


## From JSON File data.json

    $('#select_file').addOptions({
        url : 'data.json'
    });


## Manually option load

    // ( value, text, selected:boolean)

    $('#select_manual').addOption('1','m option 1', false);

    $('#select_manual').addOption('2','m option 2', true);


## From JSON File data.json with callback function

    $('#lnk_load').click(function(){
        $('#select_file_callback').addOptions({
            url : 'data.json',
            callback : callbackResult,
            selected : 2 // select value 2 if exist
        });
        return false;
    });
        