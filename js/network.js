var List = [];

var scan_function = function() {
    console.log("In scan function");
    var main = document.getElementById('main_area');
    console.log("main",main);
    var example = document.getElementById('example_wrapper');
    main.removeChild(example);
    main.innerHtml = "Hello World";
}

var createTable = function (){
    $.getJSON('my.json', function(data) {
            $.each(data, function(index, value) {
                  List[index] = [];
                  List[index].push(index+1);
                  List[index].push(value.sig_priority);
                  var myDate = new Date(value.timestamp);
                  myDate = moment(myDate).format('YYYY-MM-DD HH:mm:ss');
                  List[index].push(myDate);
                  List[index].push(numToDot(value.ip_src));
                  List[index].push(FindPortTypes(value,true));
                  List[index].push(numToDot(value.ip_dst));
                  List[index].push(FindPortTypes(value,false));
                  List[index].push(value.sig_name);

                });
         $('#example').dataTable( {
            "sDom": "<'row'<'span8'l><'span8'f>r>t<'row'<'span8'i><'span8'p>>",
            "aaData": List,
            "aoColumns": [
                            { "sTitle": "Id" },
                            { "sTitle": "Pri"},
                            { "sTitle": "Data/Time" },
                            { "sTitle": "Src IP" },
                            { "sTitle": "SPort"},
                            { "sTitle": "Dst IP" },
                            { "sTitle": "DPort"},
                            { "sTitle": "Event Message"},
                        ]
                    });
    });
    console.log("list2",List);
    getDetails();

}


var getDetails = function(id){

    console.log("list",List);
}
