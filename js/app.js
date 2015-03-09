$(document).foundation();


var convoData = [{
          conversationId: 1234,
          id:156,
          msgdate: "12/12/2014 2:00pm",
          hasBeenRead: false,
          attachmentId: 76656598,
          msg: "We just received your results...",
          fromId: 788,
          RecipientId: 567,
          RecipientType: "patient",
          SenderId: 1,
          SenderType: "provider"
     },
     {
          conversationId: 1235,
          id:156,
          msgdate: "12/12/2014 2:00pm",
          hasBeenRead: false,
          attachmentId: 76656598,
          msg: "results... voluptatibus tempore maxime dignissimos sed!",
          fromId: 788,
          RecipientId: 567,
          RecipientType: "provider",
          SenderId: 1,
          SenderType: "patient"
     },
     {
          conversationId: 1236,
          id:156,
          msgdate: "12/12/2014 2:00pm",
          hasBeenRead: false,
          attachmentId: 76656598,
          msg: "just received your other id 1236..",
          fromId: 788,
          RecipientId: 567,
          RecipientType: "patient",
          SenderId: 1,
          SenderType: "provider"
     },
     {
          conversationId: 1235,
          id:156,
          msgdate: "12/12/2014 2:00pm",
          hasBeenRead: false,
          attachmentId: 76656598,
          msg: "results... voluptatibus tempore maxime dignissimos sed!",
          fromId: 788,
          RecipientId: 567,
          RecipientType: "provider",
          SenderId: 1,
          SenderType: "provider"
     },
     {
          conversationId: 1236,
          id:156,
          msgdate: "12/12/2014 2:00pm",
          hasBeenRead: false,
          attachmentId: 76656598,
          msg: "just received Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, error. your other id 1236..",
          fromId: 788,
          RecipientId: 567,
          RecipientType: "patient",
          SenderId: 1,
          SenderType: "patient"
     },
     {
          conversationId: 1237,
          id:157,
          msgdate: "12/12/2014 11:00am",
          hasBeenRead: false,
          attachmentId: 76656598,
          msg: "did you get the results Lorem ipsum dolor sit amet, ng elit. Inventore aperiam, itaque, sit labore ipsum dolor consectetur adipisicing elit. Cum distinctio natus minus tempora iure dolor.",
          fromId: 788,
          RecipientId: 567,
          RecipientType: "provider",
          SenderId: 2,
          SenderType: "patient"                             
     }];            

var ContentTemplate = Handlebars.templates["content-template"];
$('.content-container').append( ContentTemplate(convoData));

var bubblesTemplate = Handlebars.templates["bubble-template"];
$('div.bubble-container').append( bubblesTemplate(convoData) );

             
        
var physicians = [
{
    "id": 0,
    "name": "Dr. Smith's Office"
},
{
    "id": 1,
    "name": "Dr. Hodgkins' Office"
}];

var conversations = [{
     id:1234,
     subject: "Lab Results",
     lastmsgdate: "12/12/2014 11:00am",
     hasBeenRead: false,
     hasAttachments: false,
     providerId: 0,
     patientId: 1289
},
{
     id:1235,
     subject: "Insurance Reminder",
     lastmsgdate: "12/12/2014 10:00am",
     hasBeenRead: false,
     hasAttachments: false,
     providerId: 0,
     patientId: 1289
},
{
     id:1236,
     subject: "Annual Checkup",
     lastmsgdate: "12/11/2014 4:00pm",
     hasBeenRead: true,
     hasAttachments: true,
     providerId: 0,
     patientId: 1289
},
{
     id:1237,
     subject: "Appointment Reminder",
     lastmsgdate: "12/10/2014 4:00pm",
     hasBeenRead: true,
     hasAttachments: true,
     providerId: 0,
     patientId: 1289
},
{
     id:1238,
     subject: "Welcome Message",
     lastmsgdate: "12/10/2014 2:00pm",
     hasBeenRead: true,
     hasAttachments: true,
     providerId: 0,
     patientId: 1289
},
{
     id:1239,
     subject: "New Physician Coming On Board",
     lastmsgdate: "11/20/2014 2:00pm",
     hasBeenRead: false,
     hasAttachments: false,
     providerId: 0,
     patientId: 1289
},
{
     id:1239,
     subject: "Welcome to Dr. Hodgkins' Office",
     lastmsgdate: "12/1/2014 9:00am",
     hasBeenRead: false,
     hasAttachments: true,
     providerId: 1,
     patientId: 1289
}];
                   
          
var conversationTemplate = undefined;
var providerTemplate = undefined;

// compile all necessary handlebars templates used in this page
conversationTemplate = Handlebars.templates["tab-template"];
providerTemplate = Handlebars.templates["provider-list"];

// load initial physicians list
$('.ProviderList').append(providerTemplate(physicians));

// load conversations for initial provider on list
if (physicians != undefined && physicians.length > 0) {
  var firstListItem = $('.ProviderList option:first-child').val();
  LoadConversations(firstListItem);
};


// now register the selection of the physician to load a list of conversations for that physician
$(".ProviderList").on('change', function () {
  LoadConversations(this.value);
});


  

function LoadConversations(providerId) {
   var filtered = $.grep(conversations, function (a) {
       return a.providerId == providerId;
   });

   $('dl.tabs.vertical').empty();
   if (filtered != undefined && filtered.length > 0) {
       $('dl.tabs.vertical').append( conversationTemplate(filtered));
   };
};  

// Actions when tabs are clicked   
function tabClick(){
  var $activetab = $("dd"); 
  // displays default subject .first()
  var $subject = $activetab.first().find("h4").text();
  $(".subject-bar span").text($subject);

  // tab click function
  $activetab.click(function() {

       //changes background-color of content subject bar
       var bgcolor = $(this).css( "background-color" );
       $(".subject-bar").css("background-color", bgcolor);

       //changes subject bar text to active subject text
       var $subject = $(this).find("h4").text();
       $(".subject-bar span").text($subject);

       // removes active class from other <dd> tabs
       $(this).addClass("active");
       $("dd").not(this).removeClass("active");

  });
};  

$(function() {
    tabClick();
});

$('.ProviderList').change(function(){
    if (window.matchMedia('(max-width: 480px)').matches){
        $("dd>a").addClass("left-off-canvas-toggle");
    };
    tabClick();
});




// Adds off-canvas toggle for small screen
if (window.matchMedia('(max-width: 480px)').matches){
    
    $("dd>a").addClass("left-off-canvas-toggle");
};

// Adds and Removes off-canvas toggle according to screen re-size  
$(window).resize(function() {

    if (window.matchMedia('(max-width: 480px)').matches){
        $("dd>a").addClass("left-off-canvas-toggle");
    };

    if (window.matchMedia('(min-width: 481px)').matches){
          $("dd>a").removeClass("left-off-canvas-toggle");
    };

});

               