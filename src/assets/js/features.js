function onButtonClick(){
    let ele=document.getElementById('textInput');
    if(ele.className === "show") ele.className="hide";
    else ele.className="show";
};

var doc= new jsPDF();
$('#cmd').click(function () {
    doc.text($('#content').val(), 10, 10);
    doc.save('Notes.pdf'); 
});

function onJoinRoom(){
    let ele=document.getElementById('room-link').value;
    let destinationUrl= window.location.href+"?room="+ele;
    location.href=destinationUrl;
}

// $(function () {
//     $('.drag-item').draggable({
//                     snap        : true,
//                     cursor      : "move",
//                     delay       : 100,
//                     scroll      : false,
//                     cancel: "text",
//                     containment : "parent",
//                    drag: function(e, ui){
//                        //some code
//                     }
//                 }).resizable({
//                     containment : "parent",
//                     stop: function(e, ui) {
//                         var width = ui.size.width;
//                         var height = ui.size.height;
//                         var hereDrag = this;

//                         if($(hereDrag).find('textarea').length > 0){
//                             $(hereDrag).find('textarea').css('width', width - 10);
//                             $(hereDrag).find('textarea').css('height', height - 10);
//                         }
//                     },
//                     resize: function(e, ui){
//                        //some code
//                     }
//                 })

// });